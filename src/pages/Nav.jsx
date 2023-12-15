import { NavLink } from 'react-router-dom'


export default function Nav() {


    return (
        <ul className="header-nav">

            <li>
                <NavLink to={'/'}><span>00</span>  HOME</NavLink>
                
            </li>

            <li>
                <NavLink to={'/destination'}><span>01</span>  DESTINATION</NavLink>
            </li>

            <li>
                <NavLink to={'/crew'}><span>02</span>  CREW</NavLink>
            </li>

            <li>
                <NavLink to={'/technology'}><span>03</span>  TECHNOLOGY</NavLink>
            </li>

        </ul>
    )
}