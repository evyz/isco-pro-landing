"use client"

import Image from "next/image";
import Typography from "../../components/Typography";
import LapTop from '@/shared/assets/imgs/laptop.png'
import Button from "../../components/Button";
import { useState } from "react";
import clsx from "clsx";

export default function HeadOurServices(){
    const btns = [
        "WEB",
        "MOBILE",
        "IT",
        "PROMO",
        "PRINT",
        "MEDIA"
    ]
    const [active, setActive] = useState(btns[0])

    return (
        <div className="w-full flex flex-col items-center bg-bg mb-[200px]">
            <Typography className="mb-[66px]" variant="header-sm">Наши услуги и стоимость</Typography>
            <Image alt={LapTop.src} src={LapTop} objectFit="cover" height={468} />
            <div className="w-full flex flex-row items-center gap-[20px] justify-center mt-[60px]">
                {btns.map(btn =>
                    <Button className={clsx('w-[250px]',active !== btn && 'opacity-50 hover:opacity-70 transition-all')} key={btn} onClick={() => setActive(btn)} variant={active === btn ? 'main' : 'second'}>{btn}</Button>
                )}
            </div>
            <Typography className="mt-[20px]" variant="text-sm">При наличии собственного сайта вы сможете не только ярко и неповторимо заявить о своем продукте в интернет-пространстве, но также привлечь новых клиентов и увеличить продажи</Typography>
        </div>
    )
}