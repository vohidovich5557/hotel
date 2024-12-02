

export const Input = ({ type, placeholder }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className="w-[100%] px-[20px] outline-none h-auto py-[15px] bg-[#272727] placeholder:text-white text-white font-normal text-[16px]" />
        </>
    )
}