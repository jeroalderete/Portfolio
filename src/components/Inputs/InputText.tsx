import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  register: UseFormRegisterReturn<string>;
  errors: any;
  label?: string;
  placeholder?: string;
  className?: string;
  type: string;
  defaultValue?: any;
  onChange?: (e: any) => any;
  value?: string;
  name?: string;
}

export const InputText = ({
  register,
  errors,
  label,
  type,
  placeholder,
  className,
  defaultValue,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <div>
      <div className="py-2">
        <Label>{label}</Label>
        <Input
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          className={className}
          {...register}
          aria-invalid={errors ? "true" : "false"}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
      {errors && <span className="text-red-600 mb-4">{errors}</span>}
    </div>
  );
};
