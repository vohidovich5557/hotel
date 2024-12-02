import HotelRoom from '../../../static/images/roomPage.jpg'
import { RoomCard } from './components/RoomCard'
import FirstRoom from '../../../static/images/firstRoom.jpg'
import SecondRoom from '../../../static/images/secondRoom.png'
import ThirdRoom from '../../../static/images/thirdRoom.jpg'
import StandardRoom1 from '../../../static/images/standardRoom1.webp'
import StandardRoom2 from '../../../static/images/standardRoom2.webp'
import StandardRoom3 from '../../../static/images/standardRoom3.webp'
import StandardRoom4 from '../../../static/images/standardRoom4.webp'

const dataRoom = [
    {
        id: 1,
        title: 'Standard Room',
        guests: '2 Guests',
        size: '16m2',
        bed: '1 Double Bed',
        amenities: [
            {
                id: 1,
                title: 'FREE WIFI'
            },
            {
                id: 2,
                title: 'ROOM SERVICE'
            },
            {
                id: 3,
                title: 'IN-ROOM SAFE'
            },
            {
                id: 4,
                title: 'ORGANIC COTTON'
            },
            {
                id: 5,
                title: 'BALCONY'
            }
        ],
        text: 'Our Standard Room offers a spacious and stylish design, complete with all the amenities you need for a comfortable stay. The room features a comfortable double bed, as well as a luxurious bathroom.',
        textMini1: 'Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum. Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.',
        textMini2: 'Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Diam dui euismod eget donec. Pharetra leo sed felis urna. At a viverra urna elementum tristique ac integer pretium. Vel tincidunt sed mi nulla lectus sagittis.',
        photos: [
            {
                id: 1,
                img: StandardRoom1
            },
            {
                id: 2,
                img: StandardRoom2
            },
            {
                id: 3,
                img: StandardRoom3
            },
            {
                id: 4,
                img: StandardRoom4
            }
        ]
    },
    {
        id: 2,
        title: 'Deluxe Room',

    }
]


export const Rooms = () => {
    return (
        <>
            <div className="lg:max-w-[1440px] lg:m-auto">
                <section>
                    <div className='flex relative flex-col items-center justify-center'>
                        <div className="w-[100%] sm:h-[336px] md:h-[450px] lg:h-[600px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <img
                                src={HotelRoom}
                                alt="img of the hotel outer"
                                className="w-[100%] h-[100%] object-cover animate-grow-shrink"
                            />
                        </div>
                        <div className='absolute inset-0 flex flex-col items-center sm:gap-[20px] lg:gap-[25px] justify-center w-[100%]'>
                            <div className='px-[25px] flex flex-col items-center justify-center gap-[10px] py-[10px] border-4 border-white rounded-bl-[15px] rounded-tr-[15px]'>
                                <span className='lg:text-[56px]  sm:text-[24px] lg:pr-[100px] sm:pr-0 text-center font-[700] font-serif text-qaymoqColor'>Home Away</span>
                                <span className='lg:text-[56px] lg:pl-[100px] sm:pl-0 sm:text-[24px] text-center font-[700] font-serif text-qaymoqColor'>From Home</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='w-[100%] flex flex-col items-center gap-[80px] bg-mainColor sm:py-[50px] lg:py-[70px]'>
                        <div className='bg-mainColorTwo'>
                            <RoomCard img={FirstRoom} title="Standard" id={1} />
                        </div>
                        <div className='bg-mainColor'>
                            <RoomCard img={SecondRoom} title="Deluxe" id={2} />
                        </div>
                        <div className='bg-mainColorTwo'>
                            <RoomCard img={ThirdRoom} title="Premium" id={3} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}