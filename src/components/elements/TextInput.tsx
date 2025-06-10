import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div>
      {props.label && <Label>{props.label}</Label>}
      <Input ref={ref} {...props} />
    </div>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
