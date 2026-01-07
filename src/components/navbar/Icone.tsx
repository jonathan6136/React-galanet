import { Telescope } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
export const Icone = () => {
    return (
        <>
          <div className='flex justify-center items-center'>
            <Telescope className='bg-gray-600 fill-white '/>
        <input type="text" placeholder="Fouiller dans les archives des contrebandiers" className="w-120 text-amber-50 bg-gray-600 text-center"/>
          <ArrowRight className='fill-white bg-purple-600'/>
          </div>
        </>
    )
}