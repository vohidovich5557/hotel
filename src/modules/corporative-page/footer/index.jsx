import { useNavigate } from "react-router-dom"


export const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="lg:max-w-[1440px] bg-mainColor flex sm:flex-col lg:flex-row sm:items-start lg:items-start sm:gap-[30px] lg:gap-[70px] lg:m-auto sm:py-[50px] lg:py-[40px] px-[24px]">
                <div onClick={() => navigate('/')}>
                    <span className="text-white font-[300] text-[30px]">HOTEL</span>
                </div>
                <div className="w-[100%] flex flex-col items-start gap-[14px]">
                    <span className="sm:text-[16px] lg:text-[25px] font-[500] text-white">Navigation</span>
                    <span className="text-[14px] font-normal text-white ">About</span>
                    <span className="text-[14px] font-normal text-white ">Service</span>
                    <span className="text-[14px] font-normal text-white ">Contact</span>
                    <span className="text-[14px] font-normal text-white ">Rooms</span>
                </div>
            </div>
        </>
    )
}