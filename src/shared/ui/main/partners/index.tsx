'use client'
import clsx from "clsx";
import Button from "../../components/Button";

import Sber from '@/shared/assets/imgs/sber.png'
import Tink from '@/shared/assets/imgs/tink.png'
import GosUslugi from '@/shared/assets/imgs/gosuslugi.png'
import Mos from '@/shared/assets/imgs/mos.png'
import Image from "next/image";

export default function Partners(){

    const imgs = [
        {height: 52, img: Sber},
        {height: 69, img:Tink},
        {height: 61, img:GosUslugi},
        {height: 61, img:Mos}
    ]
    
    
    return (
        <div className="w-full flex flex-col items-center py-[200px]"  >
            <div className="w-[1600px] flex flex-row items-center justify-between relative">
                {imgs.map(({img, height}) =>
                    <Button key={img.src} className={clsx('w-[386px] h-[100px] flex items-center justify-center active:scale-100')} variant="second">
                        <Image src={img} alt={img.src} height={height} />
                    </Button>
                )}
            </div>
        </div>
    )
}