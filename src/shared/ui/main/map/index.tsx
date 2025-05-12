import Image from "next/image";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import Map from '@/shared/assets/imgs/map.png'

export default function MainMap(){
    return (
        <div className="w-full h-[186px] relative oveflow-hidden flex items-center justify-center z-1">
            <div className="w-full h-full bg-bg-half -z-1 absolute top-0 left-0"></div>
            <Image alt={Map.src} src={Map.src} layout="fill" objectFit="cover" className="w-full absolute top-0 left-0 -z-2" />
            <Button variant="with-opacity" className="rounded-[56px]"><Typography className="text-white" variant="header-lg">Мы на карте</Typography></Button>
        </div>
    )
}