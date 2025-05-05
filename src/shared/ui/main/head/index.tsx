import clsx from "clsx";
import HeadShadow from "./head-shadow";
import HeadLogo from "./head-logo";
import Typography from "../../components/Typography";

export default function MainHead(){
    return (
        <div className={clsx(
            'w-full bg-bg flex flex-col items-center justify-center relative',
            'h-[635px]'
        )}>
            <HeadLogo className="z-2" />
            <Typography variant='text-2xl' className="text-white z-2">
                Используем все необходимые возможности digital технологий для вашего бизнеса
            </Typography>
            <HeadShadow className="absolute bottom-0" />
        </div>
    )
}