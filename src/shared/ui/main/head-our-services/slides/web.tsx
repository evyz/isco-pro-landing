import clsx from "clsx";
import Pic from '@/shared/assets/imgs/our_services/web.png'
import Image from "next/image";
import { useObserver } from "@/shared/lib/use-observer";
import { baseSlideStyles, baseStyle } from "./consts";
import { SlideProps } from "./types";

export default function Web({isActiveSlide}:SlideProps){

    const {ref, isActive} = useObserver()

    return (
        <div ref={ref} className={baseStyle}>
            <Image width={833} height={468} src={Pic.src} alt={Pic.src} className={clsx(baseSlideStyles, "desktop:w-auto desktop:h-[468px]", "laptop:h-[442px]", "ipads:h-[360px]", isActive && isActiveSlide && "scale-100 opacity-100")} />
        </div>
    )
}