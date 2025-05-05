import { PropsType } from "@/shared/types/props"
import Typography from "@/shared/ui/components/Typography";
import clsx from "clsx"
import { JSX } from "react"

type ServiceProps = {
    title: string,
    subTitle: JSX.Element,
    slogan: JSX.Element;
    list: string[];
    tags: string[];
} & PropsType

export default function Service({className, title, subTitle, list, slogan, tags}:ServiceProps){
    return (
        <div className={clsx("w-[50%] h-full flex flex-col justify-center py-[50px]", className)}>
            <div className="flex flex-col gap-0 mb-[25px] w-[650px]">
                <Typography variant="header-lg" className="text-[54px] m-0 p-0">{title}</Typography>
                <Typography variant='header-md' className="m-0 p-0">{subTitle}</Typography>
            </div>
            <Typography className="mb-[15px] w-[650px]">{slogan}</Typography>
            <div className="flex flex-col gap-[15px] w-[650px]">
                {list.map(item =>
                    <Typography  key={item} variant="text-sm">{item}</Typography>
                )}
            </div>
            <div className="mt-[15px] flex flex-row gap-1 flex-wrap w-[650px]">
                {tags.map(tag => 
                    <Typography variant='text-sm' key={tag}><b className="text-accent-color">#</b>{tag}</Typography>
                )}
            </div>
        </div>
    )
}