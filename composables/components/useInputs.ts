import type { TInputs } from "~/types";

export default function () {
  const inputType = (props: TInputs) => {
    switch(props.type) {
      case 'number':
        return 'number';
      default:
        return 'text'
    }
  }

  return {
    inputType
  }
}