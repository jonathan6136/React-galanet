import { Rocket } from 'lucide-react';
export const Header = () => {
    return (
        <div className="W-30">
        <img  className = "w-300 px-50 py-10" src="Header.png" alt="" />
        <h1 className='text-amber-50'>Ecoulez votre stock. Sans laisser de traces</h1>
        <p className='text-amber-50'>Décrivez votre cargaison, fixez votre prix et attendez que les acheteurs mordent à l'hameçon.</p>
        <Rocket className='fill-white'/>
        <input type="text" placeholder="lancer la transaction" className="text-amber-50 bg-purple-600" />
        </div>
    )
}