import { ItemData } from "../types";
import Button from "../../../components/Button";
import Service from "../service";
import clsx from "clsx";

type ServicesProps = {
    data: ItemData[];
}

export default function Services({data}:ServicesProps){
    return (
        <div className={clsx("w-full flex flex-col justify-center bg-bg relative", "desktop:flex-row desktop:hg-[686px]")}>
            {data.map((item,idx) => 
                <Service
                    key={item.title} 
                    className={clsx("bg-[#070707]", idx === 0 ? clsx("flex flex-col desktop:items-end desktop:pr-[80px]", "w-full") : clsx("items-start desktop:pl-[80px] bg-[#121212]", "w-full"))}
                    {...item}
                />

            )}
            <Button className={clsx("absolute bottom-[35px] px-[44px] opacity-0 hidden", "desktop:opacity-100 desktop:block")}>Подробнее</Button>
        </div>
    )
}