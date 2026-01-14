import styles from "../styles/navbar.module.css"
import { Link } from "react-router-dom";

function navbar(){
    return(
        <>
        <nav className={styles.navbar}>
             <Link to='/'> <p className="display"> Our Blooms </p> </Link> 
            <ul className={styles.ul}>  
                 <Link to='/gallery'> <li className="caption1"> GALLERY </li> </Link> 
                 <Link to='/about'> <li className="caption1"> ABOUT </li> </Link>
                 <Link to='/mailto:merques.682563@nps.k12.nj.us'> <li className="caption1"> CONTACT </li> </Link> 
            </ul>
        </nav>
        <hr className="divider"/>
        </>
    )
}

export default navbar;