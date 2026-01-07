import { Cargaison } from "../Section/Cargaison"
import { Fuite } from "../Section/Fuite"

export const ImageContainer = () => {
    return (
      <div className="flex justify-center items-center gap-4 py-5 px-5">
      <Cargaison/>
      <Fuite/>
      </div>
     
    )
}