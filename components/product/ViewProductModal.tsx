import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { MdClose, MdStar } from "react-icons/md";
import { toggleShowModal } from "@/features/slices/ProductSlice";
import { BsDot, BsStars } from "react-icons/bs";
import ColorSelector from "../clickSelects/ColorSelector";
import SizeSelector from "../clickSelects/SizeSelector";
import AddToCartBtn from "./AddToCartBtn";
import { addNewProduct } from "@/features/slices/CartSlice";
import { CartItem } from "@/Types/products";

const ViewProductModal = () => {
  //TODO
  //size and color listeners
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { currentProduct } = useAppSelector((state) => state.products);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleSetColor = (color: string) => {
    setColor(color);
  };
  const handleSetSize = (size: string) => {
    setSize(size);
  };
  const handleSetQuantity = (num: number) => {
    setQuantity(num);
  };

  const handleAddToCart = (num: number) => {
    const cartItem: any = {
      ...currentProduct,
      quantity: num,
      size,
      color,
      price: 84,
    };
    dispatch(addNewProduct(cartItem));
    dispatch(toggleShowModal(false));
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-0 md:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 }}
    >
      <div className="bg-white overflow-y-auto md:rounded-3xl pt-6 md:pt-3 md:p-6 relative w-full md:w-3/4 h-screen md:h-auto min-h-[70vh]">
        <MdClose
          size={25}
          color="gray"
          className="absolute right-2 md:right-4 top-3 md:top-4 hoverUpEffect"
          onClick={() => {
            dispatch(toggleShowModal(false));
          }}
        />
        <div className="w-full h-full flex space-y-3 md:space-y-2 flex-col md:flex-row  p-6">
          <div className="w-full md:w-1/2 bg-[#f2f4f5] rounded-2xl flex justify-center">
            <img className="w-full" src={currentProduct?.photo} />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0  md:pl-8 ">
            <span className="font-extrabold text-3xl">
              {currentProduct?.title} {quantity}
            </span>

            <div className="flex items-center mt-4">
              <span className="text-[#26c661] border-[#26c661] border-2 rounded-xl text-base w-[60px] font-bold p-[3px] flex items-center justify-center">
                ${currentProduct?.price || "84"}
              </span>
              <span className="w-[1px] h-[25px] bg-slate-300 ml-5 mr-5"></span>
              <span className="flex items-center">
                <MdStar color="#facc15" size={22} className="mr-1" />
                <span className="text-sm">
                  {currentProduct?.rating || "4.9"}
                </span>
              </span>
              <BsDot size={10} className="mx-2" />
              <span className="flex items-center  text-sm text-[#556275] underline">
                {currentProduct?.reviews || "135"} reviews
              </span>
              <BsDot size={10} className="mx-2" />
              <span className="flex items-center text-sm text-[#556275]">
                <BsStars className="mr-1" /> New in
              </span>
            </div>

            <ColorSelector setColor={handleSetColor} />
            <SizeSelector setSize={handleSetSize} />
            <AddToCartBtn
              setQuantity={handleSetQuantity}
              addToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
