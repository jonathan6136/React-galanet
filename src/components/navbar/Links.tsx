interface Props {
    text : string,
    href : string,
}

export const Links = ({text, href} : Props) => {
    return (
       
        <li className="w-30">
       <a href = {href}>{text}</a>
       </li>
       
    )
}