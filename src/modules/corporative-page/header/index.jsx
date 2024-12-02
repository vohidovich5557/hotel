import { useEffect, useState } from "react"
import { Burger, CloseBurger, Earth } from "../../../components/svgs/svg"
import BurgerMenu from "./components/BurgerMenu"
import { useLocation, useNavigate } from "react-router-dom"
import LangSelector from "./components/LangSelector"


export const Header = ({ open, setOpen }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)

    const isActive = (path) => location.pathname === path

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div>
                {/* logos part of the code */}
                <div className={`w-full lg:max-w-[1440px] lg:m-auto py-[10px] px-[24px] relative z-50 flex items-center 
            justify-between h-auto bg-mainColor transition-shadow ${isScrolled
                        ? 'fixed top-0 left-0 right-0 shadow-md' : ''
                    }`}>
                    <div onClick={() => navigate('/')} className="w-[200px] cursor-pointer flex items-center justify-center sm:hidden lg:block h-[50px] rounded-[20px]">
                        <span className="text-white font-[300] text-[30px]">HOTEL</span>
                    </div>
                    {/* logo sm */}
                    <div onClick={() => navigate('/')} className="lg:hidden sm:block w-[60px] h-[30px] rounded-[20px]">
                        <span className="text-white font-normal text-[20px]">HOTEL</span>
                    </div>

                    <div className=" md:hidden sm:hidden lg:flex items-center gap-[30px]">
                        <span onClick={() => navigate('/about')} className={`${isActive('/about') ? 'text-whitemainColor' : 'text-white'} cursor-pointer font-normal text-[16px]`}>About</span>
                        <span onClick={() => navigate('/service')} className={`${isActive('/service') ? 'text-whitemainColor' : 'text-white'} cursor-pointer font-normal text-[16px]`}>Service</span>
                        <span onClick={() => navigate('/contact')} className={`${isActive('/contact') ? 'text-whitemainColor' : 'text-white'} cursor-pointer font-normal text-[16px]`}>Contact</span>
                        <span onClick={() => navigate('/rooms')} className={`${isActive('/rooms') ? 'text-whitemainColor' : 'text-white'} cursor-pointer font-normal text-[16px]`}>Rooms</span>
                    </div>
                    <div className="md:hidden sm:hidden lg:block">
                        <LangSelector />
                    </div>

                    <div className="flex lg:hidden items-center gap-[20px]">
                        {/* lang selector sm */}
                        <div className="py-[10px] sm:block lg:hidden px-[10px] rounded-[50px] bg-whitemainColor">
                            <Earth />
                        </div>

                        {/* navigation part of the code */}
                        <div className="py-[10px] sm:block lg:hidden px-[10px] rounded-[50px] bg-whitemainColor" onClick={() => setOpen(!open)} >
                            {!open ? (
                                <Burger />
                            ) : (
                                <CloseBurger />
                            )}
                        </div>
                    </div>
                </div>
                <div className="sm:block lg:hidden">
                    <BurgerMenu open={open} close={() => setOpen(false)} />
                </div>
            </div>
        </>
    )
}