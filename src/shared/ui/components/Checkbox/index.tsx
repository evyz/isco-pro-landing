import clsx from "clsx";
import Typography from "../Typography";
import { PropsWithChildren, useEffect, useState } from "react";

type CheckboxProps = PropsWithChildren & {
    checked?: boolean;
    onChange?: (value: boolean) => void;
}

export default function Checkbox({children, checked = true, onChange}:CheckboxProps){

    const [value ,setValue] = useState(checked)

    useEffect(() => {
        onChange?.(value)
    }, [onChange, value])

    return (
        <div onClick={() => setValue(prev => !prev)} className="w-full gap-[14px] flex flex-row items-center cursor-pointer">
            <div className={clsx("w-[14px] h-[14px] rounded-[20px] border-2 border-white", value && "bg-accent-color")} />  
            <Typography className="select-none" variant="text-sm">{children}</Typography>
        </div>
    )
}