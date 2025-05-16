import clsx from "clsx";
import Pic from '@/shared/assets/imgs/our_services/print.png'
import Image from "next/image";
import { useObserver } from "@/shared/lib/use-observer";
import { baseSlideStyles, baseStyle } from "./consts";
import { SlideProps } from "./types";

export default function Print({isActiveSlide}:SlideProps){

    const {ref, isActive} = useObserver()

    return (
        <div ref={ref} className={baseStyle}>
            <Image width={497} height={487} src={Pic.src} alt={Pic.src} className={clsx(baseSlideStyles,'desktop:h-[487px]', isActive && isActiveSlide && "scale-90 opacity-100")} />
        </div>
    )
}