import clsx from "clsx";
import Pic from '@/shared/assets/imgs/our_services/promo.png'
import Image from "next/image";
import { useObserver } from "@/shared/lib/use-observer";
import { baseSlideStyles, baseStyle } from "./consts";
import { SlideProps } from "./types";

export default function Promo({isActiveSlide}:SlideProps){

    const {ref, isActive} = useObserver()

    return (
        <div ref={ref} className={baseStyle}>
            <Image width={747} height={330} src={Pic.src} alt={Pic.src} className={clsx(baseSlideStyles, 'w-[140px]','desktop:h-[330px]', isActive && isActiveSlide && "scale-100 opacity-100")} />
        </div>
    )
}