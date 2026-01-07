import { NavbarContainer } from "./components/navbar/NavbarContainer"
import { HeaderContainer } from "./components/UI/HeaderContainer"
import { ImageContainer } from "./components/UI/ImageContainer"
import { Navbar } from "./components/UI/Navbar"



function App() {


  return (
   <div className=" bg-slate-800">
    <NavbarContainer/>
   <Navbar/>
   <HeaderContainer/>
   <ImageContainer/>
   </div>
  )
}

export default App
