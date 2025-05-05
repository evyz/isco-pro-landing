"use client"
import { useState } from "react";
import Typography from "../../components/Typography";
import clsx from "clsx";

export default function Advantages(){
    
    const items = [
        "Создание проектов в короткие сроки",
        "Разработка по индивидуальному проекту «с нуля»",
        "Актуальный, интересный, качественный контент",
        "Оперативная техническая поддержка",
        "Дальнейшее продвижение и реклама"
    ]
    const [active, setActive] = useState(items[0])

    return(
        <div className="w-full bg-bg py-[200px] ">
            <div className="w-[1600px] mx-auto flex flex-col items-center">
                <Typography variant="header-lg">Наши приемущества</Typography>
                <div className="w-full flex flex-row items-center justify-between h-[450px] mt-[25px]">
                    <div className="w-[880px] h-full flex flex-col justify-between">
                        {items.map((item, idx) =>
                            <div onClick={() => setActive(item)} className={clsx("flex flex-row h-[70px] w-full bg-dark-color items-center gap-[20px] rounded-[12px] overflow-hidden transition-all", active === item && 'bg-second-bg')} key={item}>
                                <div className="w-[70px] h-[70px] relative flex items-center justify-center">
                                    <Typography className="!text-accent-color" variant="header-lg">{idx + 1}</Typography>
                                    <div className="w-full h-full bg-white opacity-3 absolute top-0 left-0"></div>
                                </div>
                                <Typography variant="text-md">{item}</Typography>
                            </div>
                        )}
                    </div>
                    <div className="w-[700px] h-[450px] rounded-[12px] bg-second-bg"></div>
                </div>
            </div>
        </div>
    )
}