import { Telescope } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
export const Icone = () => {
    return (
        <>
          <nav className='flex justify-center items-center'>
            <Telescope className='fill-white flex justify-center items-center'/>
        <input type="text" placeholder="Fouiller dans les archives des contrebandiers" className="w-120 text-amber-50 bg-gray-600"/>
          <ArrowRight className='fill-white bg-purple-600'/>
         </nav>
        </>
    )
}