interface SectionTitleProps {
    title: string;
    className?: string
}
const SectionTitle:React.FC<SectionTitleProps> = ({title, className}) => {
    return (
        <div className={`flex gap-1.5 items-center mb-9.25 ${className}`}>
            <div  className='flex w-1 h-2.5 bg-[#F81539] rounded-xl'/>
            <h2 className='text-[1.25rem] capitalize font-medium lora-font text-sectionTitleColor'>{title}</h2>
        </div>
    )
}

export default SectionTitle