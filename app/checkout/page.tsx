"use client";
import React, { useState, useEffect } from "react";
import { UserType } from "@/Types/Auth";
import CartItem from "@/components/Cart/CartItem";
import OrderSummary from "@/components/Cart/OrderSummary";
import CheckoutProfile from "@/components/accountDetails/CheckoutProfile";
import PaymentLoader from "@/components/screenLoaders/PaymentLoader";
import { setCheckoutRequestID } from "@/features/slices/PaymentSlice";
import { useAppSelector, useAppDispatch } from "@/hooks";
import AxiosWrapper from "@/utils/axios/axiosWrapper";
import { wssResolver } from "@/utils/socketResolver/socketResolver";
import { io } from "socket.io-client";
import { PaymentsCallbackType } from "@/Types/Payments";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const socket = wssResolver();
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const dispatch = useAppDispatch();
  const user: UserType = useAppSelector((state) => {
    if (typeof state.auth.user !== "string") {
      return state.auth.user;
    }
  })!;
  const { products, subtotal } = useAppSelector((state) => state.cart);
  const { method } = useAppSelector((state) => state.payment);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaderMessage, setLoaderMessage] = useState<string>(
    "Processing payment, please wait..."
  );

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const data = {
        // Amount: subtotal.split(".")[0],
        Amount: "1",
        PhoneNumber: user.phone,
      };
      const response: any = await AxiosWrapper({
        method: "post",
        url: "/payments/mpesa/checkout",
        data,
      });

      console.log("payment response");
      console.log(response?.data);
      console.log("response checkout id");
      console.log(response?.data?.CheckoutRequestID);
      dispatch(setCheckoutRequestID(response?.data?.CheckoutRequestID));
    } catch (error) {
      setLoading(false);
      swal("Error", "Some error occurred, kindly try again later", "error");
    }
  };

  const handleMpesaCallback = ({
    ResultCode,
    ResultDesc,
  }: PaymentsCallbackType) => {
    setLoading(false);
    if (ResultCode === 0) {
      swal("Success", "Payment was successfull", "success");
      router.push("/")

      /**
       * #TODO:
       * Save products bought
       * Clear cart
       * Solve CI error
       */
      
    } else {
      setLoaderMessage("Processing payment, please wait...");
      swal("Error", ResultDesc, "error");
    }
  };
  const handleMpesaStatus = (status: string) => {
    setLoaderMessage(status);
  };
  //socket instances
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("mpesaCallback", handleMpesaCallback);
    socket.on("mpesaStatus", handleMpesaStatus);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("mpesaCallback", handleMpesaCallback);
      socket.off("mpesaStatus", handleMpesaStatus);
    };
  }, []);
  return (
    <>
      <div className="p-4 container mx-auto py-20 px-8">
        <span className="font-bold text-3xl w-full">Checkout</span>
        <hr className="mt-8 mb-6" />
        <div className="w-full flex relative">
          <div className="w-[60%] border-r pr-8">
            <CheckoutProfile />
          </div>
          <div className="w-[40%] sticky top-0 ">
            <span className="font-bold text-base mb-3 px-4">
              Order Summary
              <button
                onClick={() => socket.emit("hello", { author: user?.username })}
              >
                test emit
              </button>
            </span>
            <div
              className="w-full  px-4 flex flex-col max-h-[50vh] no-scrollbarss"
              style={{ overflowY: "auto" }}
            >
              {products?.map((product: any, index: number) => (
                <CartItem key={index} product={product} isPreview={false} />
              ))}
            </div>

            <div className="w-full sticky top-40 ">
              <OrderSummary handleCheckout={handleCheckout} />
            </div>
          </div>
        </div>
      </div>
      {loading && <PaymentLoader message={loaderMessage} />}
    </>
  );
};

export default Checkout;
