import Button from "../../../components/Button";
import Typography from "../../../components/Typography";
import Service from "../service";

export default function Services(){
    return (
        <div className="w-full flex flex-row justify-center bg-bg hg-[686px] relative">
            <Service 
                className="bg-[#070707] flex flex-col items-end pr-[80px]"
                title={"Идеально"} 
                subTitle={<><Typography>для</Typography> <Typography className="!text-accent-color">малого бизнеса</Typography></>} 
                slogan={<Typography variant="header-lg">ISCO.<Typography variant="header-lg" className="!text-accent-color">LITE</Typography></Typography>} 
                list={["Широкая экспертиза","Высокая скорость работы", "Рост аудитории", "Сертифицированные сотрудники", "Все услуги продвижения бизнеса в одном пакете "]} 
                tags={["Разработка сайтов", "Разработка мобильных приложений", 'Продвижение социальных сетей', 'Продвижение сайтов', 'Продвижение мобильных приложений', 'Услуги типографии', 'Создание фото и видео проектов']}                
            />
            <Service 
                className="bg-[#070707] items-start pl-[80px] bg-[#121212]"
                title={"Идеально"} 
                subTitle={<><Typography>для</Typography> <Typography className="!text-accent-color">малого бизнеса</Typography></>} 
                slogan={<Typography variant="header-lg">ISCO.<Typography variant="header-lg" className="!text-accent-color">LITE</Typography></Typography>} 
                list={["Широкая экспертиза","Высокая скорость работы", "Рост аудитории", "Сертифицированные сотрудники", "Все услуги продвижения бизнеса в одном пакете "]} 
                tags={["Разработка сайтов", "Разработка мобильных приложений", 'Продвижение социальных сетей', 'Продвижение сайтов', 'Продвижение мобильных приложений', 'Услуги типографии', 'Создание фото и видео проектов']}                
            />
            <Button className="absolute bottom-[35px] px-[44px]">Подробнее</Button>
        </div>
    )
}