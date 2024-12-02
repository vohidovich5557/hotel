import HotelContact from '../../../static/images/hotelContact.jpg'
import { ContactCard } from './components/contactCard'
import { Address, Email, Phone } from '../../../components/svgs/svg'
import { useForm } from 'react-hook-form'
import { Input } from './components/input'

export const Contact = () => {
    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        console.log(data);

    }
    return (
        <>
            <div className="lg:max-w-[1440px] lg:m-auto">
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[336px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HotelContact}
                                alt="img of the hotel outer"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center sm:gap-[20px] lg:gap-[25px] justify-center w-[100%]'>
                            <span className='lg:text-[56px] py-[10px] px-[30px] rounded-bl-[15px] rounded-tr-[15px] border-4 border-white sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>CONTACT US</span>
                            <span className='text-[14px] font-normal text-white text-center sm:w-[80%] lg:w-[40%]'>Best Facilities</span>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='sm:py-[50px] flex flex-col items-center justify-center gap-[70px] lg:py-[70px] bg-mainColorTwo'>
                        <span className='text-[35px] font-[500] font-serif text-qaymoqColor'>Get in touch with us!</span>
                        <div className='grid w-[100%] sm:grid-cols-1 lg:grid-cols-3'>
                            <a href="tel:+998933315557">
                                <ContactCard icon={Phone} title="PHONE" text="Phone: +998933315557" on />
                            </a>
                            <ContactCard icon={Address} title="ADDRESS" text="Tepamasjid 26-uy" on />
                            <a href="mailto:shokhuk006@gmail.com">
                                <ContactCard icon={Email} title="EMAIL" text="shokhuk006@gmail.com" />
                            </a>
                        </div>
                    </div>

                </section>
                <section>
                    <div className='px-[24px] flex flex-col items-center justify-center gap-[60px] sm:py-[50px] lg:py-[70px] bg-mainColor'>
                        <div className='flex flex-col items-center justify-center gap-[5px]'>
                            <span className='text-white font-[500] font-serif sm:text-[14px] lg:text-[16px]'>IF YOU HAVE ANY QUESTIONS</span>
                            <span className='text-white font-[500] text-center font-serif sm:text-[14px] lg:text-[16px]'>PLEASE DO NOT HESITATE TO SEND US MESSAGE OR TO CALL US</span>
                        </div>
                        <form className='lg:w-[50%] sm:w-[100%] h-auto flex flex-col items-center gap-[25px]' onSubmit={handleSubmit(submit)}>
                            <Input type="text" placeholder="Yor name" />
                            <Input type="email" placeholder="Yor email" />
                            <Input type="number" placeholder="Your number" />
                            <textarea placeholder='Message' className='w-[100%] outline-none py-[10px] h-[180px] text-white px-[20px] placeholder:text-white bg-[#272727]'></textarea>
                            <button className='py-[10px] px-[15px] font-[700] bg-qaymoqColor text-mainColor'>SEND MESSAGE</button>
                        </form>
                    </div>
                </section>
                <section>
                    <div className='px-[24px] flex flex-col items-center justify-center gap-[60px] bg-mainColorTwo sm:py-[50px] lg:py-[70px]'>
                        <div className='flex flex-col items-center justify-center gap-[20px]'>
                            <span className='text-qaymoqColor font-[500] font-serif sm:text-[16px] lg:text-[35px]'>Connect with us!</span>
                            <div className='flex items-center justify-center gap-[20px]'>
                                <div className='py-[20px] px-[20px] bg-qaymoqColor rounded-[10px]'>
                                </div>
                                <div className='py-[20px] px-[20px] bg-qaymoqColor rounded-[10px]'>
                                </div>
                                <div className='py-[20px] px-[20px] bg-qaymoqColor rounded-[10px]'>
                                </div>
                                <div className='py-[20px] px-[20px] bg-qaymoqColor rounded-[10px]'>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-[100%] lg:w-[90%] rounded-[10px] overflow-hidden opacity-70 sm:h-[400px] lg:h-[600px]'>
                            <iframe
                                style={{ border: 0 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11983.165889725986!2d69.26688968715818!3d41.33514760000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef472f00fffff%3A0x94f216634adc75d8!2sHayot%20Plaza%20Hotel!5e0!3m2!1sen!2s!4v1732708687200!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}