import { useEffect, DependencyList } from "react";

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps: DependencyList = []
) {
  useEffect(() => {
    // const t = setTimeout(() => {
    //   // fn.apply(undefined, deps);

    //   // fn.apply(undefined, [...deps]);
    //   fn(...deps);
    // }, waitTime);
    const t = setTimeout(fn, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
}
