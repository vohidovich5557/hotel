import { Park } from '../../../components/svgs/svg'
import HotelService from '../../../static/images/hotelService.jpg'
import { ServiceCard } from './components/ServiceCard'

const serviceData = [
    {
        id: 1,
        title: 'CAR PARKING PLACE',
        icon: Park
    },
    {
        id: 2,
        title: 'GYM',
        icon: Park
    },
    {
        id: 3,
        title: 'SOUNA',
        icon: Park,
    },
    {
        id: 4,
        title: 'POOL',
        icon: Park
    },
    {
        id: 5,
        title: 'MEETING HALL & EVENTS',
        icon: Park
    },
    {
        id: 6,
        title: 'RESTAURANT & BAR',
        icon: Park
    },
    {
        id: 7,
        title: 'SPA',
        icon: Park
    },
    {
        id: 8,
        title: 'CITY TOUR',
        icon: Park
    }
]

export const Service = () => {
    return (
        <>
            <div className="lg:max-w-[1440px] lg:m-auto">
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[336px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HotelService}
                                alt="img of the hotel outer"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center sm:gap-[20px] lg:gap-[25px] justify-center w-[100%]'>
                            <span className='lg:text-[56px] px-[30px] py-[10px] border-4 border-white rounded-bl-[15px] rounded-tr-[15px] sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>SERVICES WE HAVE</span>
                            <span className='text-[14px] font-normal text-white text-center sm:w-[80%] lg:w-[40%]'>Best Facilities</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] flex flex-col items-center justify-center py-[80px] gap-[50px] px-[24px] bg-mainColorTwo'>
                        <div className='flex flex-col gap-[30px] items-center justify-center'>
                            <span className='text-qaymoqColor font-serif sm:text-[25px] lg:text-[35px]'>OUR SERVICES</span>
                            <span className='text-[14px] font-normal text-white text-center sm:w-[100%] lg:w-[40%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit esse soluta eveniet voluptas rerum blanditiis, incidunt, inventore harum officiis id laboriosam
                                corporis corrupti possimus, explicabo fuga accusamus aspernatur vel.</span>
                        </div>
                        <div className='grid w-[100%] sm:grid-cols-2 lg:grid-cols-4 gap-[14px]'>
                            {serviceData?.map((item) => (
                                <ServiceCard id={item.id} title={item.title} icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}