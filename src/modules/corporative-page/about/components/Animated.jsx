import React from "react";
import HotelSpa from '../../../../static/images/hotelSpa.webp'
import { useNavigate } from "react-router-dom";

const AnimatedCard = ({ title, img, bioTitle, bioText }) => {
    const navigate = useNavigate()
    return (
        <div className="w-[100%] h-[400px] group relative overflow-hidden  rounded-[10px]">
            <div className="w-[100%] overflow-hidden h-[100%]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover animate-grow-shrink" />
            </div>
            <div className="absolute flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-y-[100px] w-[95%] bottom-[15px] left-0 rounded-[15px] right-0  m-auto py-[20px] px-[20px] bg-white">
                <span className="text-black font-serif text-[30px]">{title}</span>
            </div>
            <div className="absolute top-[6px] flex flex-col items-center justify-center gap-[20px] rounded-[15px] transition-all duration-500 ease-in-out group-hover:translate-y-0 translate-y-[-400px] inset-1 left-[20px] right-[20px] px-[24px] bg-white">
                <span className="text-mainColor font-serif text-[25px]">{bioTitle}</span>
                <span className="text-[15px] font-serif text-mainColor/50 text-center">{bioText}</span>
                <button onClick={() => navigate('/service')} className="border-b border-mainColor pb-[6px] hover:pb-[10px] hover:text-qaymoqColor hover:border-qaymoqColor transition-all duration-300 ease-in-out">Read More</button>
            </div>
        </div>
    );
};

export default AnimatedCard;