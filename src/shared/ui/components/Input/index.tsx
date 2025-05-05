import { PropsType } from "@/shared/types/props"
import { JSX, useEffect, useRef, useState } from "react"
import Typography from "../Typography";
import clsx from "clsx";

type InputProps = PropsType & {
    label?: JSX.Element | string;
    subLabel?: string;
    value?: string;
    onChange?: (value: string) => void;
    wrapperClassName?: string;
}

export default function Input({label,subLabel, value: initialValue = '', onChange, className, wrapperClassName}:InputProps){

    const inputRef = useRef<HTMLInputElement>(null)
    const [ value ,setValue ] = useState(initialValue)
    const [ isActive, setIsActive ] = useState(false)

    useEffect(() => {
        onChange?.(value)
    }, [onChange, value])

    return (
        <div className={clsx("w-full bg-dark-color flex flex-row items-center rounded-[12px] relative transition-all duration-150 hover:bg-input-active",isActive && "bg-input-active", wrapperClassName)}>
            {label &&
                <Typography onClick={() => inputRef.current?.focus()} className={clsx("text-white absolute left-[17.5px] select-none pointer-events-none transition-all duration-150", isActive && !value.length && 'opacity-30', value.length && 'opacity-0')} variant='input'>
                    {label}
                    {subLabel && <Typography className="text-sub-label select-none pointer-events-none" variant='input'>{" "}{subLabel}</Typography>}
                </Typography>
            }
            <input ref={inputRef} onBlur={() => setIsActive(false)} onFocus={() => setIsActive(true)} className={clsx('text-[12px] text-white w-full px-[20px] py-[17.5px] h-full outline-none', className)} value={value} onChange={(event) => setValue?.(event.target.value)} />
        </div>
    )
}