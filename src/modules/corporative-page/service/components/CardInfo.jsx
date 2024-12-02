import { useParams } from "react-router-dom"

const infoData = [
    {
        id: 1,
        title: 'Car Parking Place',
        img: []
    },
    {
        id: 2,
        title: 'GYM',
        img: []
    },
    {
        id: 3,
        title: 'SOUNA',
        img: []
    },
    {
        id: 4,
        title: 'POOL',
        img: []
    },
    {
        id: 5,
        title: 'MEETING HALL & EVENTS',
        img: []
    },
    {
        id: 6,
        title: 'RESTAURANT & BAR',
        img: []
    },
    {
        id: 7,
        title: 'SPA',
        img: []
    },
    {
        id: 8,
        title: 'CITY TOUR',
        img: []
    }
]


export const CardInfo = () => {
    const { id } = useParams()

    const findInfo = infoData.find((item) => item.id === Number(id))

    console.log(findInfo);

    return (
        <>
            <div className="lg:max-w-[1440px] flex flex-col gap-[60px] items-center justify-start pt-[60px] h-auto sm:pb-[40px] lg:pb-[60px] bg-mainColor lg:m-auto">
                <span className="text-qaymoqColor text-center sm:text-[35px] font-serif">{findInfo.title}</span>
                <div className="w-[90%] flex flex-col items-center gap-[20px]">
                    <div className="w-[100%] sm:h-[300px] lg:h-[400px] border border-white">

                    </div>
                    <div className="flex w-[100%] sm:flex-col lg:flex-row items-center gap-[20px]">
                        <div className=" sm:w-[100%] lg:w-[50%] sm:h-[200px] lg:h-[300px] border border-white"></div>
                        <div className=" sm:w-[100%] lg:w-[50%] sm:h-[200px] lg:h-[300px] border border-white"></div>
                    </div>
                    <div className="w-[100%] grid grid-cols-3 sm:gap-[10px] lg:gap-[15px]">
                        <div className="w-[100%] border sm:h-[150px] lg:h-[300px] border-white"></div>
                        <div className="w-[100%] border sm:h-[150px] lg:h-[300px] border-white"></div>
                        <div className="w-[100%] border sm:h-[150px] lg:h-[300px] border-white"></div>
                    </div>
                </div>
            </div>
        </>
    )
}