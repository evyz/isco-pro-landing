"use client"

import clsx from "clsx";
import Typography from "../Typography";
import Vk from '@/shared/assets/svgs/vk.svg'
import Telegram from '@/shared/assets/svgs/telegram.svg'
import Ws from '@/shared/assets/svgs/whatsapp.svg'
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ListItem = string | {payload: string | any, type: "text" | "img", link: string}

type FooterItem = {
    title: string,
    list: ListItem[]
}

export default function Footer(){

    const data: FooterItem[] = [
        { 
            title: "О компании",
            list: ['О нас', 'Наши проекты', 'О Наши клиенты', 'Наши партнеры', 'Открытые вакансии', 'Наши реквизиты']
        },
        { 
            title: "Услуги и стоимость",
            list: ['Web', 'Mobile', 'IT', 'Promo', 'Media', 'Print']
        },
        { 
            title: "Контакты",
            list: ['Телефон', 'Почта', 'Адрес']
        },
        { 
            title: "Вы также можете связаться с нами",
            list: [
                {payload: Vk, type: 'img', link: 'vk.com'}, 
                {payload: Telegram, type: 'img', link: 'telegram.com'}, 
                {payload: Ws, type: 'img', link: 'whatsapp.com'}, 
            ]
        }
    ]

    const linkClassName = clsx('text-subLabel hover:text-white transition-all py-[2px]')

    return (
        <div className="w-full bg-bg py-[78px]">
            <div className="w-[1600px] mx-auto flex flex-row justify-between items-start">
                {data.map(col =>
                    <div key={col.title} className="w-[340px] flex flex-col items-start gap-[46px]">
                        <Typography className={clsx("!font-bold !text-accent-color h-[24px]")}  variant="text-xl">{col.title}</Typography>
                        <div className="w-full flex flex-col items-start gap-[28px]">
                            {col.list.map(item =>
                                <Link key={JSON.stringify(item)} href='#' target="_blank"> 
                                    {typeof item === 'string' ? <Typography hasUnderline className={linkClassName} key={item} variant="text-lg">{item}</Typography> 
                                    : item?.type === 'img' 
                                    ? <Image key={item.payload} width={35} height={35} src={item.payload.src} alt={item.payload.src} objectFit="cover" /> :
                                    <Typography hasUnderline className={linkClassName} key={item.payload} variant="text-lg">{item.payload}</Typography>}
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}