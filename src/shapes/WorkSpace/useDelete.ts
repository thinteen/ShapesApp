import { useEffect } from "react";

export function useDelete(deleteBlock: () => void): void {

  useEffect(() => {
    function handlerKeydown(event: KeyboardEvent): void {
      if (event.code === "Delete") {
        if (!event.defaultPrevented) {
          deleteBlock();
        }
      }
    }

    document.addEventListener("keydown", handlerKeydown);

    return () => {
      document.removeEventListener("keydown", handlerKeydown);
    };
  }, [deleteBlock]);
}