import clsx from "clsx";
import Typography from "../../components/Typography";
import Image from "next/image";
import Ipad from '@/shared/assets/imgs/ipad.png'
import Button from "../../components/Button";

export default function HeadAbout(){
    return (
        <div className={clsx(
            'w-full bg-second-bg flex flex-col items-center justify-center gap-[20px]', 
            'desktop:h-[1000px] desktop:py-0',
            'h-auto py-[78px]',
        )}>
            <Typography variant="header-lg">О нас</Typography>
            <div className="relative flex flex-col items-center justify-center">
                <Image src={Ipad} alt="ipad" className={clsx('desktop:w-[771px]', 'laptop:w-[771px]', 'ipads:w-[771px]', 'mobile:w-[90%]', 'w-[340px]')} />
                <Button className="w-[250px] absolute -bottom-5">Скачать презентацию</Button>
            </div>
        </div>
    )
}