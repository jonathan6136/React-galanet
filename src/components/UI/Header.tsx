import { Rocket } from 'lucide-react';
export const Header = () => {
    return (
        <div className="">
        <img  className = "flex justify-center items-center w-300 py-5 px-9" src="Header.png" alt="" />
        <h1 className='flex justify-center items center text-amber-50'>Ecoulez votre stock. Sans laisser de traces</h1>
        <p className='flex justify-center items center text-amber-50'>Décrivez votre cargaison, fixez votre prix et attendez que les acheteurs mordent à l'hameçon.</p>
        <Rocket className=' flex justify-center items-center fill-white'/>
        <input type="text" placeholder="lancer la transaction" className="text-center text-amber-50 bg-purple-600" />
        </div>
    )
}