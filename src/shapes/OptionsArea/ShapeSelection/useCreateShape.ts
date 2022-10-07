import { RefObject, useEffect } from "react";

export function useCreateShape(button: RefObject<HTMLDivElement>, createShape: () => void,) {

  useEffect(() => {

    function handleClickButton() {
      createShape();
    }

    if (button.current)
    {
      button.current.addEventListener("click", handleClickButton);
    }
    return () => {
      if (button.current) button.current.removeEventListener("click", handleClickButton);
    };
  }, [button, createShape]);
}