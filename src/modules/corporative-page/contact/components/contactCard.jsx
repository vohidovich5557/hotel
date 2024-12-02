

export const ContactCard = ({ icon: IconComponent, title, text, on }) => {
    return (
        <>
            <div className={`flex flex-col sm:pt-[30px] lg:pt-0  ${on ? 'lg:border-r sm:border-b lg:border-b-0' : 'border-r-0'}  sm:pb-[20px] lg:pb-0 lg:pr-[20px] border-qaymoqColor items-center justify-center gap-[20px]`}>
                <div className="flex flex-col items-center justify-center gap-[10px]">
                    <span className="text-qaymoqColor">{IconComponent && <IconComponent />}</span>
                    <span className="text-qaymoqColor font-serif font-[500] sm:text-[16px] lg:text-[18px]">{title}</span>
                </div>
                <span className="text-white sm:text-[14px] font-[300] lg:text-[16px]">{text}</span>
            </div>
        </>
    )
}