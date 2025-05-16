"use client"

import { PropsType } from "@/shared/types/props"
import Typography from "@/shared/ui/components/Typography";
import clsx from "clsx"
import { JSX } from "react"
import ServiceAccept from "./service-accept";
import { useObserver } from "@/shared/lib/use-observer";
import Button from "@/shared/ui/components/Button";

type ServiceProps = {
    title: string,
    subTitle: JSX.Element,
    slogan: JSX.Element;
    list: string[];
    tags: string[];
} & PropsType

const stylesMx = clsx(
  "w-[340px]",
  "mobile:w-[340px] mobile:mx-auto",
  "ipads:w-[650px] ipads:mx-auto",
  "laptop:w-[650px] laptop:mx-auto"
);
const stylesTags = clsx("text-[10px]","desktop:text-[14px]", "laptop:text-[14px]", "ipads:text-[14px]")

export default function Service({className, title, subTitle, list, slogan, tags}:ServiceProps){
    const {ref , isActive} = useObserver()

    return (
        <div className={clsx("desktop:w-[50%] h-full flex flex-col justify-center py-[50px]", className)}>
            <div className={clsx("flex flex-col gap-0 mb-[25px] ", stylesMx)}>
                <Typography variant="header-lg" className="text-[54px] m-0 p-0">{title}</Typography>
                <Typography variant='header-md' className="m-0 p-0">{subTitle}</Typography>
            </div>
            <Typography className={clsx("mb-[15px] laptop:mx-auto", stylesMx)}>{slogan}</Typography>
            <div ref={ref} className={clsx("flex flex-col gap-[15px]", stylesMx)}>
                {list.map(item =>
                    <div key={item} className="flex flex-row items-center gap-[18px]">
                        <div className="bg-white w-[24px] h-[24px] rounded-[50%] items-center justify-center flex">
                            <ServiceAccept className={clsx("scale-50 opacity-0 transition-all duration-300", isActive && "scale-100 opacity-100")} />
                        </div>
                        <Typography variant="text-sm">{item}</Typography>
                    </div>
                )}
            </div>
            <div className={clsx("mt-[15px] flex flex-row gap-1 flex-wrap w-[650px]", stylesMx)}>
                {tags.map(tag => 
                    <Typography  className={stylesTags} variant='text-sm' key={tag}><b className="text-accent-color">#</b>{tag}</Typography>
                )}
            </div>
            <Button className={clsx("mt-[44px] px-[44px] opacity-100 mx-auto", "desktop:opacity-0 dekstop:hidden")}>Подробнее</Button>
        </div>
    )
}