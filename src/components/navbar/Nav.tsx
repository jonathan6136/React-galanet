import { Links } from "./Links"
export const Nav = () => {
    const links = [
        {
          text : "Vaisseaux & Engins",
          href : "/",
        },
        {
            text : "Armurerie",
            href : "/",
        },
        {
            text : "Apparence",
            href : "/",
        },
        {
            text : "Ferraille & Droides",
            href : "/"
        },
        {
            text : "Ravittaillement & Médic packs",
            href : "/",
        },
        {
            text : "Cyber-matériel & Cryptage",
            href : "/",
        },
        {
            text : "Reliques & Trésors Interdits",
            href : "/",
        },
        {
            text : "Kits de survie & Exploration",
            href : "/",
        },
];
        return (
            <ul className="flex justify-center items-center gap-5 text-amber-50">
              {
                links.map((link, index) => (
                    <Links key={index} text={link.text} href={link.href}/>
                ))
              }
            </ul>
        )
    
};
