import { Location } from '../../../components/svgs/svg'
import CenterMode from '../../../shared/components/Slider'
import HeroBg from '../../../static/images/hotelHeroBg.jpg'
import { InfoCard } from './components/InfoCard'

export  const MainPage = () => {
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
              <div className='w-[100%] bg-mainColor sm:pt-[50px] lg:pt-[70px] pb-[20px] flex flex-col items-center justify-center sm:gap-[45px] lg:gap-[100px]'>
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
            <div className='w-[100%] bg-white py-[20px] px-[24px]'>
                <CenterMode />
            </div>
           </section>
        </div>
        </>
    )
}