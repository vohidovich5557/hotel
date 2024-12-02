import React from 'react'
import { useNavigate } from 'react-router-dom'


function BurgerMenu({ open, close }) {
    const navigate = useNavigate()
    const handleNavigate = (path) => {
        navigate(path)
        close() // Close the modal after navigation
    }
    return (
        <div
            className={`fixed top-[56px] left-0 w-full h-auto bg-mainColor  overflow-y-auto
            transform transition-transform duration-300 ease-in-out ${open
                    ? 'translate-y-0 z-40' : 'translate-y-[-500px] -z-40'
                }`}
        >
            <nav className="flex flex-col items-center w-full text-center">
                <div
                    onClick={() => handleNavigate('/about')}
                    className="py-[20px] px-[23px] cursor-pointer w-[100%] border-[#D7D7D7]
                     border-y flex items-center justify-start"
                >
                    <span className="text-white text-lg">
                        ABOUT
                    </span>
                </div>
                <div
                    onClick={() => handleNavigate('/rooms')}
                    className="py-[20px] px-[23px] cursor-pointer w-[100%] border-[#D7D7D7]
                     border-b flex items-center justify-start"
                >
                    <span className="text-white text-lg">
                        ROOMS
                    </span>
                </div>
                <div
                    onClick={() => handleNavigate('/service')}
                    className="py-[20px] px-[23px] cursor-pointer w-[100%] border-[#D7D7D7]
                     border-b flex items-center justify-start"
                >
                    <span className="text-white text-lg">
                        SERVICES
                    </span>
                </div>
                <div
                    onClick={() => handleNavigate('/contact')}
                    className="py-[20px] px-[23px] cursor-pointer w-[100%] border-[#D7D7D7]
                    border-b flex items-center justify-start"
                >
                    <span className="text-white text-lg">
                        CONTACTS
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default BurgerMenu
