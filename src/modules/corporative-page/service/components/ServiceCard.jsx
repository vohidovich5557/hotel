import { useNavigate } from "react-router-dom"

export const ServiceCard = ({ id, title, icon: IconComponent }) => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate(`/service/${id}`)} className="w-auto h-auto flex flex-col hover:shadow-lg transition-all duration-500 ease-in-out hover:shadow-qaymoqColor items-center gap-[20px] justify-center sm:py-[40px] lg:py-[100px] px-[10px] border border-gray-400/50">
                <span className="text-qaymoqColor">{IconComponent && <IconComponent />}</span>
                <span className="text-qaymoqColor text-center cursor-pointer sm:text-[15px] lg:text-[20px] font-normal font-serif">{title}</span>
            </div>
        </>
    )
}