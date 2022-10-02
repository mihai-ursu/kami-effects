import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface Size {
  width: number;
  height: number;
}

interface Distances {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
  Distances
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const [distances, setDistances] = useState<Distances>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  const handleDistances = useCallback(() => {
    setDistances({
      top: ref?.getBoundingClientRect().top || 0,
      right: ref?.getBoundingClientRect().right || 0,
      bottom: ref?.getBoundingClientRect().bottom || 0,
      left: ref?.getBoundingClientRect().left || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEventListener("resize", handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useIsomorphicLayoutEffect(() => {
    handleDistances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size, distances];
}

export default useElementSize;
