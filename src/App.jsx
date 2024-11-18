import { Route, Routes } from "react-router-dom"
import {Layout} from './modules/corporative-page'
import {MainPage} from './modules/corporative-page/main-page'
import {About} from './modules/corporative-page/about'
import {Service} from './modules/corporative-page/service'
import {Contact} from './modules/corporative-page/contact'
import {Rooms} from './modules/corporative-page/rooms'

function App() {

  return (
   <>
    <Routes>
       <Route path="/" element={<Layout />} >
       <Route index element={<MainPage />} />
       <Route path="about" element={<About />}/>
       <Route path="service" element={<Service />}/>
       <Route path="contact" element={<Contact />}/>
       <Route path="rooms" element={<Rooms />}/>
       </Route>
    </Routes>
   </>
  )
}

export default App
