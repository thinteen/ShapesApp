import { RefObject, useEffect } from "react";

export function useSelectColor(
  color: string | null,
  colorPicker: RefObject<HTMLInputElement>,
  setColorShape: (color: string) => void,
  inputColorShape: (color: string) => void) {

  useEffect(() => {

    const inputColor: HTMLInputElement | null = colorPicker.current;

    if(inputColor) {
      inputColor.value = color ? color : "#000000";
    }
    
    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      inputColorShape(target.value);
    }
  
    function handleChange(event: Event) {
      const target = event.target as HTMLInputElement;
      setColorShape(target.value);
    }
    
    function handleClick(event: Event) {
      event.stopImmediatePropagation();
    }

    if(inputColor){
      inputColor.addEventListener("input", handleInput);
    }

    if(inputColor){
      inputColor.addEventListener("change", handleChange);
    }

    if(inputColor) {
      inputColor.addEventListener("click", handleClick);
    }

    return () => {
      if (inputColor) {
        inputColor.removeEventListener("input", handleInput);
        inputColor.removeEventListener("change", handleChange);
        inputColor.removeEventListener("click", handleClick);
      }
    };
  }, [color, colorPicker, setColorShape, inputColorShape]);
}