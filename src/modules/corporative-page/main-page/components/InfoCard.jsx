


export const InfoCard = ({ second }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className={`flex flex-col items-center ${!second ? 'gap-[10px]' : 'gap-[20px]'}`}>
                    <div className="w-[50px] h-[50px] bg-white rounded-[50%] border">

                    </div>
                    <span className="text-[14px] font-normal font-serif text-white">{!second ? 'Quality Food' : 'QUALITY FOOD'}</span>
                </div>
                <span className="text-[14px] font-normal font-serif text-white text-center sm:w-[60%] lg:w-[60%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fugiat illum</span>
            </div>
        </>
    )
}