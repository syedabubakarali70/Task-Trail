import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";
type InputProps = {
  value: string;
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  readonly?: boolean;
};
export function InputWithLabel(props: InputProps) {
  const { value, label, type, readonly = true } = props;
  return (
    <div className="px-2 w-full">
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} id={label} value={value} readOnly={readonly} />
    </div>
  );
}
