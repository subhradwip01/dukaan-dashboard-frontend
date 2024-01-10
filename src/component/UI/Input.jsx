import { cn } from "../../utils";
import { cva } from "class-variance-authority";

const inputVariants = cva("w-full px-4 py-2.5 block", {
  variants: {
    variant: {
      outlined: "border border-black-85 placeholder-black-60",
      primary: "placeholder-black-60 bg-black-95",
    },
    inputSize: {
      lg: "rounded rounded-1.5",
      sm: "rounded h-[40px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    inputSize: "lg",
  },
});

const Input = ({ variant, inputSize, className, leadingIcon, ...props }) => {
  return (
    <div className="relative">
      {leadingIcon && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src={leadingIcon} alt="icon"/>
        </div>
      )}
      <input
        className={cn(
          inputVariants({
            variant,
            inputSize,
            className,
          }),
          leadingIcon && inputSize==='lg' ? 'ps-10' :'ps-8'
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
