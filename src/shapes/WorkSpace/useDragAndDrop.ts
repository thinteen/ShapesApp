import { useEffect, RefObject } from "react";
import { Position } from "../../store/types";

export function useDragAndDrop(
  block: RefObject<HTMLElement>,
  defPos: Position,
  setPosition: (x: number, y: number) => void
): void {


  useEffect(() => {

    const currentBlock: HTMLElement | null = block.current;

    let startPos: Position;

    function handleMousedown(event: MouseEvent): void {
      startPos = {
        x: event.pageX,
        y: event.pageY,
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    let newPos: Position;

    function handleMouseMove(event: MouseEvent): void {
      if (!event.defaultPrevented) {
        event.preventDefault();
        const delta: Position = {
          x: event.pageX - startPos.x,
          y: event.pageY - startPos.y
        }
        newPos = {
          x: defPos.x + delta.x,
          y: defPos.y + delta.y
        }
        if(currentBlock)
        currentBlock.style.left = `${newPos.x}px`;
        if(currentBlock)
        currentBlock.style.top = `${newPos.y}px`;
      }
    }

    function handleMouseUp(): void {
      if (newPos) {
        setPosition(newPos.x, newPos.y);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }


    if (currentBlock) currentBlock.addEventListener("mousedown", handleMousedown);
    return () => {
      if (currentBlock) currentBlock.removeEventListener("mousedown", handleMousedown);
    };
  }, [block, defPos, setPosition]);
}