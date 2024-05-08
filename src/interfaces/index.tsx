export interface InputProps{
    name: string,
    id: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>): void,
    placeholder: string,
}

export interface TitleProps {
    text: string;
    htmlFor: string;
}

export interface ResultsProps {
    amount: number, 
    htmlFor: string, 
    text: string
}
