import clsx from "clsx";
import Pic from '@/shared/assets/imgs/our_services/it.png'
import Image from "next/image";
import { useObserver } from "@/shared/lib/use-observer";
import { baseSlideStyles, baseStyle } from "./consts";
import { SlideProps } from "./types";

export default function It({isActiveSlide}:SlideProps){

    const {ref, isActive} = useObserver()

    return (
        <div ref={ref} className={baseStyle}>
            <Image width={620} height={515} src={Pic.src} alt={Pic.src} className={clsx(baseSlideStyles, 'desktop:h-[515px]', isActive && isActiveSlide && "scale-100 opacity-100")} />
        </div>
    )
}