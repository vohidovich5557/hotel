import { Outlet } from "react-router-dom"
import { Header } from './header'
import { Footer } from './footer'
import { useEffect, useState } from "react"


export const Layout = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) {
            document.body.style.overflow = 'unset'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [open])
    return (
        <>
            <div className="flex flex-col justify-between h-[100%] min-h-screen">
                <div className="flex flex-col">
                    <header>
                        <Header open={open} setOpen={setOpen} />
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}