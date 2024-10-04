/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Textarea } from "./textarea";

type InputWithLabelProps = {
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  register: UseFormRegisterReturn;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | Merge<FieldError, (FieldError | undefined)[]>
    | undefined;
  value?: string;
  readonly?: boolean;
};

export function InputWithLabel(props: InputWithLabelProps) {
  const { label, type, register, error, value = "", readonly = false } = props;

  return (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor={label}>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          id={label}
          {...register}
          className={`textarea ${error ? "border-red-500" : ""}`}
          defaultValue={value}
          readOnly={readonly}
        />
      ) : (
        <Input
          type={type}
          id={label}
          {...register}
          className={`input ${error ? "input-error" : ""}`}
          defaultValue={value}
          readOnly={readonly}
        />
      )}
      {error && <p className="text-red-500">{String(error.message)}</p>}
    </div>
  );
}
