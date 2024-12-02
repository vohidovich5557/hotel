import { ArrowRight, Location } from '../../../components/svgs/svg'
import HeroBg from '../../../static/images/hotelHeroBg.jpg'
import { InfoCard } from './components/InfoCard'
import HotelCafe from '../../../static/images/hotelCafe.jpg'
import HotelRoom from '../../../static/images/hotelRoom.jpg'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="lg:max-w-[1440px] lg:m-auto">
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[336px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HeroBg}
                                alt="img of the hotel interior"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center sm:gap-[20px] lg:gap-[25px] justify-center w-[100%]'>
                            <span className='lg:text-[56px] sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>Welcome hotel Bringten Bridge</span>
                            <span className='text-[14px] font-normal text-white text-center sm:w-[80%] lg:w-[40%]'>Looking for comfortable and convienent place to rent. Our hotel can give you chance to start
                                feel the relaxtion of the country from this place.
                            </span>
                            <div className='py-[10px] w-auto gap-[40px] flex items-center justify-between px-[15px] bg-mainColor rounded-[25px]'>
                                <div className='w-[80%]'>
                                    <span className='text-white whitespace-nowrap font-[500] text-[14px]'>Start moving</span>
                                </div>
                                <div className='w-[40%] bg-whitemainColor p-[10px] rounded-[50px] flex items-center justify-center'>
                                    <div>
                                        <Location />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* card for the showing the user info */}
                <section>
                    <div className='w-[100%] bg-mainColor sm:py-[50px] lg:py-[70px] pb-[20px] flex flex-col items-center justify-center sm:gap-[45px] lg:gap-[100px]'>
                        <div className='flex flex-col items-center sm:gap-[15px] lg:gap-[45px]'>
                            <span className='sm:text-[16px] lg:text-[34px] text-qaymoqColor font-normal font-serif'>LUXURY BEACHFRONT RESORT</span>
                            <span className='text-[14px] font-normal text-center sm:w-[80%] lg:w-[70%] text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint deserunt facere quas ratione.</span>
                        </div>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-[45px]'>
                            <InfoCard />
                            <InfoCard />
                            <InfoCard />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] bg-[#0E1316] flex flex-col items-center  sm:gap-[40px] lg:gap-[70px] sm:py-[50px] lg:py-[70px]'>
                        <div className='flex sm:flex-col w-[100%] px-[24px] lg:flex-row  items-center sm:justify-center lg:gap-[200px] sm:gap-[25px]'>
                            <span className='sm:text-[16px] lg:text-[35px] font-[500] font-serif text-qaymoqColor'>GET PLACE TO LAY BACK</span>
                            <span className='text-[14px] font-normal sm:w-[80%] lg:w-[40%] text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloribus placeat laborum asperiores sint fugit, cumque ullam deserunt et temporibus</span>
                        </div>
                        <div className='w-[100%] flex sm:flex-col sm:px-[24px] lg:px-0 lg:flex-row items-center sm:justify-center lg:justify-start sm:gap-[20px] lg:gap-[80px]'>
                            <div className='sm:w-[100%] lg:w-[50%] sm:rounded-[10px] lg:rounded-none lg:rounded-tr-[10px] lg:rounded-br-[10px] sm:h-[200px] lg:h-[400px] overflow-hidden'>
                                <img src={HotelRoom} alt="img of the hotel room" className='w-[100%] h-[100%] object-cover animate-grow-shrink' />
                            </div>
                            <div className='flex flex-col items-start gap-[40px]'>
                                <div className='flex flex-col items-start gap-[6px]'>
                                    <span className='text-white font-[500] sm:text-[20px] lg:text-[35px]'>Deluxe Double Room</span>
                                    <span className='text-white font-[300] sm:text-[14px] lg:text-[16px]'>Lorem implus dorem dum dum tut esit</span>
                                </div>
                                <span className='text-white font-400 lg:w-[80%] sm:text-[14px] lg:text-[16px]'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat debitis porro</span>
                                <div className='grid sm:grid-cols-2 lg:grid-cols-3 items-center sm:gap-[40px] lg:gap-[60px]'>
                                    <div className='flex flex-col items-start gap-[10px]'>
                                        <span className='text-white font-normal sm:text-[14px] lg:text-[16px]'>Company 4 people</span>
                                        <span className='sm:text-[12px] lg:text-[14px] font-[300] text-white'>Save 40% money</span>
                                    </div>
                                    <div className='flex flex-col items-start gap-[10px]'>
                                        <span className='text-white font-normal sm:text-[14px] lg:text-[16px]'>Company 4 people</span>
                                        <span className='sm:text-[12px] lg:text-[14px] font-[300] text-white'>Save 40% money</span>
                                    </div>
                                    <div className='flex flex-col items-start gap-[10px]'>
                                        <span className='text-white font-normal sm:text-[14px] lg:text-[16px]'>Company 4 people</span>
                                        <span className='sm:text-[12px] lg:text-[14px] font-[300] text-white'>Save 40% money</span>
                                    </div>
                                </div>
                                <div className='flex w-[100%] sm:items-start lg:items-center sm:justify-between lg:justify-start lg:gap-[150px]'>
                                    <span className='sm:text-[16px] lg:text-[20px] font-[500] text-white'>$26.00 day</span>
                                    <div className='flex items-center gap-[5px]'>
                                        <button className='text-blue-800'>More Details </button>
                                        <span className='text-blue-800'>{<ArrowRight />}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => navigate('/rooms')} className='flex cursor-pointer py-[10px] px-[20px] border border-white rounded-[15px] items-center gap-[10px]'>
                            <span className='text-white font-[300]'>View All Rooms</span>
                            <span className='text-white'>{<ArrowRight />}</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] bg-mainColor sm:py-[50px] lg:py-[150px] flex sm:flex-col lg:flex-row lg:justify-center items-center gap-[60px] '>
                        <div className='sm:border-b sm:pb-[40px] lg:pb-0 lg:border-b-0 lg:border-r border-white'>
                            <InfoCard second />
                        </div>
                        <div className='sm:border-b sm:pb-[40px] lg:pb-0 lg:border-b-0 lg:border-r border-white'>
                            <InfoCard second />
                        </div>
                        <div>
                            <InfoCard second />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] flex sm:flex-col bg-[#0E1316] sm:py-[50px] lg:py-0 items-center justify-center lg:flex-row lg:justify-start'>
                        <div className='sm:py-[50px] w-[100%] px-[24px] flex flex-col items-start sm:gap-[20px] lg:gap-[40px] lg:py-[70px]'>
                            <span className='text-[14px] font-normal text-qaymoqColor'>RESTUORANT & SPA</span>
                            <div className='flex flex-col items-start gap-[15px]'>
                                <span className='sm:text-[16px] lg:text-[35px] lg:w-[70%] sm:w-[80%] font-[600] text-white'>Delicious Food Awaken your Taste Buds</span>
                                <span className='sm:text-[14px] lg:w-[80%] font-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt molestias nihil! Quos temporibus totam, distinctio exercitationem veniam odio</span>
                            </div>
                            <div onClick={() => navigate('/about')} className='flex cursor-pointer py-[10px] px-[15px] border border-white rounded-[14px] items-center gap-[10px]'>
                                <span className='text-white font-normal text-[14px]'>Read More</span>
                                <span className='text-white'>{<ArrowRight />}</span>
                            </div>
                        </div>
                        <div className='sm:w-[100%] sm:px-[24px] rounded-[10px] lg:rounded-none lg:px-0 sm:h-[200px] overflow-hidden lg:h-[100%]'>
                            <img src={HotelCafe} alt="img of the hotel cafe" className='w-[100%] h-[100%] object-cover animate-grow-shrink' />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}