import { Link } from "react-router-dom";

export default function Menu(){
    return (

        <nav>
        <ul>
           <li>
              <Link to={'/'}>Historia de vida</Link>
           </li>
           <li>
              <Link to={'/about'}>Logros</Link>
           </li>
           <li>
              <Link to={'/contact'}>Premios</Link>
           </li>
           <li>
              <Link to={'/actualidad'}>Actualidad</Link>
           </li>
        </ul>
     </nav>


    );
  
    
}