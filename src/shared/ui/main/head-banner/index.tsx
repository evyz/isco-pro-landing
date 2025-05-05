"use client"

import clsx from "clsx";
import Typography from "../../components/Typography";
import Phone from '@/shared/assets/imgs/phone-with-notif.png'
import Image from "next/image";
import { useObserver } from "@/shared/lib/use-observer";

export default function HeadBanner(){
  const { ref, isActive } = useObserver()

    return(
        <div className="w-full py-[45px] bg-bg" >
            <div className={clsx('bg-second-bg w-full h-[220px]')}>
                <div className="m-auto w-[1600px] h-full flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <Typography className="!text-[90px]" variant='text-2xl'>-<Typography className="!text-[90px] !text-accent-color">10</Typography>%</Typography>
                        <Typography className="!text-[45px]" variant='text-2xl'>на MOBILE</Typography>
                    </div>
                    <div className="flex flex-col w-[800px]">
                        <Typography variant="text-md">Но некоторые особенности внутренней политики являются только методом политического участия и функционально разнесены на независимые элементы. Ясность нашей позиции очевидна: повышение уровня гражданского сознания</Typography>
                    </div>
                    <div className="w-[340px] h-full relative flex items-center justify-center">
                        <div ref={ref} className="absolute bg-red w-20 h-[12px] z-10"></div>
                        <Image className={clsx("absolute transition-all duration-300 scale-50", isActive && "scale-100")} alt={Phone.src} src={Phone} width={340} objectFit="cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}