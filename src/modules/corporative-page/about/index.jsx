import HotelOuter from '../../../static/images/hotelOuter.jpg'
import AnimatedCard from './components/Animated'
import HotelSpa from '../../../static/images/hotelSpa.webp'
import HotelWedding from '../../../static/images/hotelWedding.jpg'
import HotelBar from '../../../static/images/hotelBar.jpg'
import HotelRes from '../../../static/images/hotelRes.webp'

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
                            <span className='lg:text-[56px] sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>About The Hotel</span>
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
            </div >
        </>
    )
}