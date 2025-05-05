import { PropsType } from '@/shared/types/props'
import clsx from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

const variants: Record<string, string> = {
    'main': "bg-accent-color text-white drop-shadow-none hover:drop-shadow-custom-pink",
    'second': "bg-dark-color text-white",
    'none': ""
}

type ButtonProps = PropsWithChildren & {
    variant?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children,variant = 'main', className, ...props}: ButtonProps & PropsType){
    return (
        <button {...props} className={clsx(
            "px-[32px] py-[17.5px] rounded-[12px] text-[12px] select-none",
            "active:scale-99 transition-all",
            variants[variant], 
            className
        )}>{children}</button>
    )
    
}