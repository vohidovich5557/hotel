import { useNavigate } from "react-router-dom"

export const RoomCard = ({ img, title, id }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-[100%] px-[24px] h-[100%] flex sm:gap-[40px] sm:flex-col sm:py-[30px] lg:py-[5rem] lg:flex-row items-start sm:justify-center lg:justify-between">
                <div className="flex sm:w-[100%] lg:w-[50%] flex-col sm:h-auto lg:h-[200px] items-start gap-[20px]">
                    <div className='flex flex-col items-start gap-[7px]'>
                        <div className='flex flex-col items-start'>
                            <div className='lg:text-[4rem] sm:text-[2rem] italic font-normal font-serif text-qaymoqColor'>{title}</div>
                            <div className='lg:text-[4rem] sm:text-[2rem] font-normal text-qaymoqColor'>Room</div>
                        </div>
                        <span className='text-white font-normal lg:w-[60%] text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis maxime adipisci blanditiis quisquam doloremque eveniet eaque nostrum, soluta, minima alias veniam.</span>
                    </div>
                    <div className='grid grid-cols-2 w-[100%] gap-[10px]'>
                        <div className='px-[10px] flex flex-col items-start gap-[5px] sm:pr-0 lg:pr-[100px] py-[10px] w-[100%]'>
                            <span className='text-white font-[300] text-[12px]'>SIZE</span>
                            <span className='text-white font-normal text-[16px] italic font-serif'>162 sm</span>
                        </div>
                        <div className='px-[10px] flex flex-col items-start gap-[5px] py-[10px] w-[100%]'>
                            <span className='text-white font-[300] text-[12px]'>GUESTES</span>
                            <span className='text-white font-normal text-[16px] italic font-serif'>2 Guests</span>
                        </div>
                        <div className='px-[10px] flex flex-col items-start gap-[5px] py-[10px] w-[100%]'>
                            <span className='text-white font-[300] text-[12px]'>GUESTES</span>
                            <span className='text-white font-normal text-[16px] italic font-serif'>2 Guests</span>
                        </div>
                    </div>
                    <div className='w-auto flex items-center justify-start gap-[50px]'>
                        <div onClick={() => navigate(`/room/${id}`)} className='flex cursor-pointer py-[10px] px-[30px] border border-white items-center justify-center gap-[10px]'>
                            <span className='text-white sm:hidden lg:block'>---</span>
                            <span className='text-white font-normal'>DETAILS</span>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[100%] overflow-hidden rounded-tl-[25px] rounded-br-[25px] sm:h-[300px] lg:h-[540px] lg:w-[70%]">
                    <img src={img} alt="img of the room" className='w-[100%] object-cover h-[100%]' />
                </div>
            </div>
        </>
    )
}