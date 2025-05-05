"use client"

import FileUploader from "../../components/FileUploader";
import Input from "../../components/Input";
import Typography from "../../components/Typography";

export default function ConnectWithUs(){
    return(
        <div className="w-full bg-bg py-[200px]">
            <div className="w-full h-[600px] bg-second-bg flex flex-col items-center">
                <Typography variant="header-lg">Связаться с нами</Typography>
                <div className="w-[1600px] mx-auto flex flex-row justify-center flex-wrap items-center gap-[20px]">
                    <div className="w-[520px]">
                        <Input label="Фамилия и Имя" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Телефон" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Название компании" subLabel="(не обязательно)" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Название проекта" subLabel="(не обязательно)" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Email" subLabel="(не обязательно)" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Описание проекта" subLabel="(не обязательно)" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Удобное время для связи" subLabel="(не обязательно)" />
                    </div>
                    <div className="w-[520px]">
                        <Input label="Планируемый бюджет проекта" subLabel="(не обязательно)" />
                    </div>
                    <FileUploader />
                    {/* ChECKBOX + BUTTON */}
                </div>
            </div>
        </div>
    )
}