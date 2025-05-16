import Typography from "../../components/Typography";
import Services from "./services";
import { ItemData } from "./types";


export default function HeadServices(){

    const data: ItemData[] = [
        {
            title: "Идеально",
            subTitle: <><Typography>для</Typography> <Typography className="!text-accent-color">малого бизнеса</Typography></>,
            slogan: <Typography variant="header-lg">ISCO.<Typography variant="header-lg" className="!text-accent-color">LITE</Typography></Typography>,
            list: ["Широкая экспертиза","Высокая скорость работы", "Рост аудитории", "Сертифицированные сотрудники", "Все услуги продвижения бизнеса в одном пакете "],
            tags: ["Разработка сайтов", "Разработка мобильных приложений", 'Продвижение социальных сетей', 'Продвижение сайтов', 'Продвижение мобильных приложений', 'Услуги типографии', 'Создание фото и видео проектов']
        },
        {
            title: "Идеально",
            subTitle: <><Typography>для</Typography> <Typography className="!text-accent-color">малого бизнеса</Typography></>,
            slogan: <Typography variant="header-lg">ISCO.<Typography variant="header-lg" className="!text-accent-color">LITE</Typography></Typography>,
            list: ["Широкая экспертиза","Высокая скорость работы", "Рост аудитории", "Сертифицированные сотрудники", "Все услуги продвижения бизнеса в одном пакете "],
            tags: ["Разработка сайтов", "Разработка мобильных приложений", 'Продвижение социальных сетей', 'Продвижение сайтов', 'Продвижение мобильных приложений', 'Услуги типографии', 'Создание фото и видео проектов']
        },
    ]

    return (
        <div className="w-full bg-bg">
            <Services data={data} />
        </div>
    )
}