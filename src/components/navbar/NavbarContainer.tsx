import { Logo } from "../Logo"
import { Icone } from "./Icone"
import { Liaison } from "./Liaison"
import Soute from "./Soute"

export const NavbarContainer = () => {
    return (
        <div className="flex justify-center items-center gap-4">
        <Logo/>
        <Icone/>
        <Liaison/>
        <Soute/>
        </div>
    )
}