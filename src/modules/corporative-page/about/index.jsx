import HotelOuter from '../../../static/images/hotelOuter.jpg'
import AnimatedCard from './components/Animated'
import HotelSpa from '../../../static/images/hotelSpa.webp'
import HotelWedding from '../../../static/images/hotelWedding.jpg'
import HotelBar from '../../../static/images/hotelBar.jpg'
import HotelRes from '../../../static/images/hotelRes.webp'
import HotelWindow from '../../../static/images/hotelWindows.jpg'
import { useNavigate } from 'react-router-dom'

const cardData = [
    {
        title: 'Relaxing Spa',
        img: HotelSpa,
        bioTitle: 'Relaxing Spa',
        bioText: 'When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and enjoy attentive and effective care.'
    },
    {
        title: 'Wedding & Events',
        img: HotelWedding,
        bioTitle: 'Wedding & Event',
        bioText: 'When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and enjoy attentive and effective care.'
    },
    {
        title: 'Bar Music',
        img: HotelBar,
        bioTitle: 'Bar Music',
        bioText: 'When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and enjoy attentive and effective care.'
    },
    {
        title: 'Restuarant',
        img: HotelRes,
        bioTitle: 'Restuarant',
        bioText: 'When coming to this Spa, we will feel all 5 senses, with peaceful space, melodious sound, faint scent and enjoy attentive and effective care.'
    }
]

export const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="lg:max-w-[1440px] lg:m-auto">
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[336px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HotelOuter}
                                alt="img of the hotel outer"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center sm:gap-[20px] lg:gap-[25px] justify-center w-[100%]'>
                            <span className='lg:text-[56px] px-[25px] py-[10px] border-4 border-white rounded-bl-[15px] rounded-tr-[15px] sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>ABOUT THE HOTEL</span>
                            <span className='text-[14px] font-normal text-white text-center sm:w-[80%] lg:w-[40%]'>Looking for comfortable and convienent place to rent.</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] flex flex-col items-center justify-center sm:gap-[20px] lg:gap-[40px] h-auto sm:py-[50px] lg:py-[70px] bg-mainColorTwo'>
                        <div className='flex items-center gap-[20px]'>
                            <span className='text-[25px] font-[500] text-white'>*</span>
                            <span className='text-[25px] font-[500] text-white'>*</span>
                            <span className='text-[25px] font-[500] text-white'>*</span>
                            <span className='text-[25px] font-[500] text-white'>*</span>
                            <span className='text-[25px] font-[500] text-white'>*</span>
                        </div>
                        <div className='w-[100%] flex items-center justify-center gap-[100px]'>
                            <span className='text-[14px] sm:hidden lg:block font-[300] text-qaymoqColor'>-------------------------------</span>
                            <span className='text-qaymoqColor sm:text-[16px] sm:w-[80%] text-center lg:w-[50%] lg:text-[45px] font-serif'>WE ALWAYS CARE ABOUT YOUR EXPRIENCE</span>
                            <span className='text-[14px] sm:hidden lg:block font-[300] text-qaymoqColor'>-------------------------------</span>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-[25px]'>
                            <span className='text-[14px] text-center sm:w-[90%] lg:w-[70%] text-white font-[300]'>Immerse yourself in luxury and freshness with stunning ocean views and the beach just a few steps away. Enjoy the sweet breath of the sea with elegant and luxurious rooms, opposite the beach voted by Forbes magazine as one of the six most attractive beaches on the planet. Let’s start a journey to discover the deep blue beauty of the vast ocean and the main starting point is Carmelina Beach Hotel</span>
                            <span className='text-[14px] text-center sm:w-[90%] lg:w-[70%] text-white font-[300]'>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor est incidim dunt ut labore et dolore magna ftomi aliquma. Ut enim ad minim veniam, quis nos trud exerc itation ullamco laboris nisi ut aliquip ex ea con modo consequat</span>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <span className='text-white font-[600] sm:text-[14px] lg:text-[16px]'>Uktamov Shohjahon</span>
                            <span className='text-white font-[600] sm:text-[14px] lg:text-[16px]'>-</span>
                            <span className='text-white font-[300] text-[14px]'>General Manager Carmelina Hotel</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] grid px-[24px] sm:grid-cols-1 lg:grid-cols-4 sm:gap-[20px] lg:gap-[50px] bg-mainColor h-auto sm:py-[50px] lg:py-[70px]'>
                        {cardData?.map((item) => (
                            <AnimatedCard title={item.title} img={item.img} bioText={item.bioText} bioTitle={item.bioTitle} />
                        ))}
                    </div>
                </section>
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[800px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HotelWindow}
                                alt="img of the hotel outer"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute flex sm:flex-col px-[24px] lg:flex-row  inset-0 items-center sm:gap-[40px] lg:gap-[45px] justify-center w-[100%]'>
                            <div className='flex flex-col items-start gap-[15px]'>
                                <span className='sm:text-[14px] lg:text-[16px] text-white font-normal font-serif'>____RESERVATION ROOM</span>
                                <span className='sm:text-[25px] lg:text-[35px] sm:w-[100%] lg:w-[70%] font-serif text-white'>Book directly with us today
                                    to enjoy special offers</span>
                                <span className='text-white sm:text-[14px] sm:w-[100%] lg:w-[70%] lg:text-[16px] font-[300] '>Exclusive hotel deals when you book directly on our website. Ut enim ad minim veniam, quis nostrud exercitation</span>
                            </div>
                            <div className='sm:w-[100%] lg:w-[35%] flex flex-col gap-[30px] justify-center sm:py-[30px] lg:py-[50px] sm:px-[15px] lg:px-[40px] bg-white'>
                                <div className='flex flex-col items-start gap-[7px] pb-[15px] border-b border-mainColor/50'>
                                    <span className='text-mainColor sm:text-[20px] font-[500] font-serif lg:text-[20px]'>Best Price Guarantee</span>
                                    <span className='text-mainColor/50 sm:text-[14px]'>Up to 30% off when booking directly</span>
                                </div>
                                <div className='flex flex-col items-start gap-[7px] pb-[15px] border-b border-mainColor/50'>
                                    <span className='text-mainColor sm:text-[20px] font-[500] font-serif lg:text-[20px]'>Priority for Room Upgrade</span>
                                    <span className='text-mainColor/50 sm:text-[14px]'>You will be upgraded and lowered your room for free within 24 hours from the time of booking</span>
                                </div>
                                <div className='flex flex-col items-start gap-[7px]'>
                                    <span className='text-mainColor sm:text-[20px] font-[500] font-serif lg:text-[20px]'>10% Discount on Food</span>
                                    <span className='text-mainColor/50 sm:text-[14px]'>Enjoy dining at special prices for direct bookings room (excluding buffets)</span>
                                </div>
                                <button onClick={() => navigate('/contact')} className='border hover:text-white hover:bg-mainColor transition-all duration-300 ease-in-out border-mainColor py-[10px] px-[20px] text-mainColor text-[14px] font-normal font-serif'>CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}