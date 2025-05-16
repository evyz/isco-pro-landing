"use client"
import clsx from "clsx";
import HeadShadow from "./head-shadow";
import HeadLogo from "./head-logo";
import Typography from "../../components/Typography";
import { useObserver } from "@/shared/lib/use-observer";

export default function MainHead(){
    const { ref, isActive } = useObserver()

    return (
        <div className={clsx(
            'w-full bg-bg flex flex-col items-center justify-center relative',
            'h-[635px]'
        )}>
            <HeadLogo className="z-2" />
            <Typography variant='text-2xl' className={clsx("text-white z-2 text-center select-none", 'xl:w-auto' ,'lg:w-auto', 'md:w-[562px]' ,'xs:w-[286px]')}>
                Используем все необходимые возможности digital технологий для вашего бизнеса
            </Typography>
            <div ref={ref} className="w-4 h-4 absolute"></div>
            <HeadShadow className={clsx("absolute bottom-0 transition-all duration-300 opacity-50", isActive && "opacity-100")} />
        </div>
    )
}