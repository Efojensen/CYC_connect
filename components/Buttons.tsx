interface ButtonProps {
    label: string
    className?: string
    onClick?: () => void
}

export const OutlinedButton:React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={`flex ${className ?? ''} bg-white text-black border border-black hover:cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

interface FilledButtonProps {
    label: string
    className: string
    textColor?: string
    onClick?: () => void
    backgroundClr?: string
}

export const FilledButton:React.FC<FilledButtonProps> = ({ label, onClick, className, backgroundClr, textColor }) => {
    return (
        <button
            className={`
                flex ${className} ${backgroundClr ? `bg-${backgroundClr}` : 'bg-black'}
                ${textColor ? `text-${textColor}` : 'text-white'} hover:cursor-pointer
            `}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export const WhiteFilledRoundedButton:React.FC<ButtonProps> = ({ label, onClick, className,}) => {
    return (
        <button
            className={`${className} rounded-[.4375rem] text-footerBackgroundColor text-[1.25rem] lato-font border-white bg-white px-4.5`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}