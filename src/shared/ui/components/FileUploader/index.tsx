import { ChangeEvent, useRef, useState } from "react"
import Button from "../Button"
import Typography from "../Typography"
import Icon from "./icon"

type FileProps = {
    file: File
    onRemove: (file: File) => void;
}
function File({file, onRemove}:FileProps){

    const LIMIT_LETTERS = 11
    const name = file.name.length > LIMIT_LETTERS ? file.name.substring(0, LIMIT_LETTERS) + "..." : file.name

    return (
        <div className="w-[160px] h-[50px] flex flex-row items-center justify-between px-[8px] drop-shadow-uploaded-file-block">
            <Icon />
            <Typography className="text-bold text-uploaded-filename text-[10px] w-[60px] break-all" variant="link">{name ?? "Название файла..."}</Typography>
            <Button onClick={() => onRemove(file)} className="!px-0 !py-0 !w-[24px] !h-[24px] rounded-[24px] flex items-center justify-center" variant="main"><div className="bg-white w-[14px] h-[2px]"></div></Button>
        </div>
    )
}

const LIMIT_FILE_SIZE = 2 * 1024 * 1024

export default function FileUploader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [inputKey, setInputKey] = useState(Date.now()); 

    const onRemove = (file: File) => {
        setFiles(prev => prev.filter(check => check.name !== file.name));
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            setFiles(prev => {
                const newFiles = Array.from(selectedFiles).map(file => {
                    return file
                }).filter(file => file.size < LIMIT_FILE_SIZE);
                return [...prev, ...newFiles];
            });
            setInputKey(Date.now());
        }
    };

    return (
        <div className="px-[25px] w-full bg-dark-color rounded-[12px] min-h-[60px] flex flex-row items-center justify-start flex-wrap">
            {files.map((file) =>
                <File key={file.name} onRemove={onRemove} file={file} />
            )}
            <input
                key={inputKey} 
                onChange={onChange}
                type="file"
                className="hidden"
                ref={inputRef}
                multiple
            />
            <Button
                className="flex flex-row items-center justify-center gap-[14px]"
                variant="none"
                onClick={() => inputRef.current?.click()}
            >
                <Typography className="text-bold text-accent-color" variant="link">Добавить файл</Typography>
                <div className="bg-accent-color text-white rounded-[24px] !px-0 !py-0 !w-[24px] !h-[24px] relative flex items-center justify-center">
                    <div className="absolute bg-white w-[14px] h-[2px]"></div>
                    <div className="absolute bg-white w-[2px] h-[14px]"></div>
                </div>
            </Button>
        </div>
    );
}