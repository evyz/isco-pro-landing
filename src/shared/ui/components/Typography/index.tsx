"use client"

import { PropsType } from "@/shared/types/props"
import clsx from "clsx"
import { Fragment, HTMLAttributes, PropsWithChildren, useState } from "react"

type Variants = "header-sm" | "header-md" | "header-lg" | 'text-lg' | 'text-md' | 'text-sm' | 'text-xl' | 'text-2xl' | 'link' | 'input'
type TypographyProps = PropsType & PropsWithChildren & {
    variant?: Variants;
    hasUnderline?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const headerStyle = 'font-bold text-header'
const mediumStyle = 'font-medium text-header'
const linkStyle = 'font-regular text-header'

const variants: Record<Variants, string> = {
    'header-sm':  `${headerStyle} text-[28px]`,
    'header-md':  `${headerStyle} text-[26px]`,
    'header-lg':  `${headerStyle} text-[24px]`,
    'text-2xl':  `${mediumStyle} text-[22px] `,
    'text-xl':  `${mediumStyle} text-[20px] `,
    'text-lg':  `${mediumStyle} text-[18px] `,
    'text-md':  `${mediumStyle} text-[16px] `,
    'text-sm':  `${mediumStyle} text-[14px] `,
    'link': `${linkStyle} text-[14px]`,
    'input': `text-[12px]`
}

export default function Typography({children, variant = 'header-sm',className,hasUnderline = false, ...props}:TypographyProps ){

    const ParentNode = hasUnderline ?  'div' : Fragment
    const [isHovering, setIsHovering] = useState(false)

    return (
        <ParentNode onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className={clsx(hasUnderline && "relative")}>
            <span {...props} className={clsx(variants[variant], className)} >{children}</span>
            {hasUnderline && <div className={clsx("bg-white w-0 h-[2px] transition-all duration-150", isHovering && 'w-full')}></div>}
        </ParentNode>
    )
}