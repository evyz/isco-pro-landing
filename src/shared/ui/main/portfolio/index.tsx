import Button from "../../components/Button";
import Typography from "../../components/Typography";
import PortfolioArrow from "./portfolio-arrow";

export default function PortfolioSlider(){
    return (
        <div className="w-full h-[707px] bg-second-bg flex flex-col items-center py-[74px]">
            <Typography variant="header-lg">Портфолио</Typography>
            <div className="w-[1600px] flex flex-row items-center justify-between mt-[25px]">
                <div className="w-[700px] h-[500px] bg-bg rounded-[12px] overflow-hidden"></div>
                <div className="flex flex-col gap-[20px] h-full w-[880px] justify-start">
                    <Typography className="!text-accent-color" variant="header-sm">АИС «Молодежь России»</Typography>
                    <Typography className="text-text" variant="text-lg">Информационная площадка (портал и мобильное приложение) с различными кабинетами нескольких типов пользователей представляющая собой единую платформу для регистрации на форумы, региональные, окружные и федеральные мероприятия, способствующие вовлечению молодежи в реализацию государственной молодежной политики</Typography>
                    <div className="mt-auto flex flex-row gap-[20px]">
                        <Button><PortfolioArrow /></Button>
                        <Button><PortfolioArrow inverted /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}