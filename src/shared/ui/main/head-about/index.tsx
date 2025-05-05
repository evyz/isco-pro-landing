import clsx from "clsx";
import Typography from "../../components/Typography";
import Image from "next/image";
import Ipad from '@/shared/assets/imgs/ipad.png'
import Button from "../../components/Button";

export default function HeadAbout(){
    return (
        <div className={clsx('w-full h-[1000px] bg-second-bg', 'flex flex-col items-center justify-center gap-[20px]')}>
            <Typography variant="header-lg">О нас</Typography>
            <div className="relative flex flex-col items-center justify-center">
                <Image src={Ipad} alt="ipad" width={Ipad.width} height={Ipad.height} />
                <Button className="w-[250px] absolute -bottom-5">Скачать презентацию</Button>
            </div>
        </div>
    )
}