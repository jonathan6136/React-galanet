import { Logo } from "../Logo"
import { Icone } from "../navbar/Icone"
import { Nav } from "../navbar/Nav"
import Soute from "../navbar/Soute"
import { Header } from "./Header"
import { Liaison } from "../navbar/Liaison"
import { Fuite } from "../Section/Fuite"
import { Cargaison } from "../Section/Cargaison"


export const Navbar = () => {

return (
    <div className="gap-4 bg-slate-800">
      <Logo/>
      <Icone/>
      <Liaison/>
      <Soute/>
      <Nav/>
      <Header/>
      <Cargaison/>
      <Fuite/>
    </div>
  )
}