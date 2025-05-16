"use client"

import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Web from "./slides/web";
import Mobile from "./slides/mobile";
import It from "./slides/it";
import Promo from "./slides/promo";
import Print from "./slides/print";
import Media from "./slides/media";

const wrapStyles = clsx('w-xs mx-auto', 'ipads:w-md', 'laptop:w-lg', 'desktop:w-xl')

const checkDistance = (prev:number, current:number, check = 1) => {
    return prev - current === check || prev - current === -check
}

export default function HeadOurServices(){
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const btns = [
        "WEB",
        "MOBILE",
        "IT",
        "PROMO",
        "PRINT",
        "MEDIA"
    ]

    const [prevIdx, setPrevIdx] = useState<number | null>(null)
    const [width, setWidth] = useState(window.innerWidth)
    const [active, setActive] = useState(btns[0])
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const idx = btns.findIndex(btn => btn === active)
        ref.current?.scrollTo({left: ref.current.clientWidth * idx, behavior: (!prevIdx || (prevIdx && checkDistance(prevIdx, idx))) ? 'smooth' : 'instant'})
    }, [active, btns, width])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
                window.scrollBy({ top: e.deltaX, behavior: "smooth" });
            }
        };

        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => el.removeEventListener("wheel", handleWheel);
    }, []);
    const slides = [Web,Mobile, It, Promo, Print, Media]

    const updateActiveKey = (value: string) => {
        const idx = btns.findIndex(btn => btn === active)
        setPrevIdx(idx)
        setActive(value)
    }

    return (
        <div className={clsx("w-full flex flex-col items-center bg-bg mb-[200px]")}>
            <Typography className="mb-[66px]" variant="header-sm">Наши услуги и стоимость</Typography>
            <div ref={ref} className={clsx(wrapStyles, "w-full flex flex-row overflow-x-scroll scrollbar-hide h-[166px]", "desktop:h-[550px]", "laptop:h-[480px]", "ipads:h-[360px]")}>
                {slides.map((Slide, idx) => <Slide key={btns[idx]} isActiveSlide={btns[idx] === active} />)}
            </div>
            <div className="w-full flex flex-row items-center gap-[20px] justify-center mt-[20px] desktop:mt-[60px] mobile:flex-wrap ipads:flex-wrap laptop:flex-wrap">
                {btns.map(btn =>
                    <Button className={clsx('w-[250px]',active !== btn && 'opacity-50 hover:opacity-70 transition-all')} key={btn} onClick={() => updateActiveKey(btn)} variant={active === btn ? 'main' : 'second'}>{btn}</Button>
                )}
            </div>
            <Typography className="mt-[20px]" variant="text-sm">При наличии собственного сайта вы сможете не только ярко и неповторимо заявить о своем продукте в интернет-пространстве, но также привлечь новых клиентов и увеличить продажи</Typography>
        </div>
    )
}