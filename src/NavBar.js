import {useState} from "react" 
import Cart from './CartWidget'
import "./style.css"

const Nav = () => {

    const [contador, setContador] = useState(0)
    return (
        <nav>
            <h1>Mi tienda</h1>
            <a href="./NavBar.js">Accesorios</a>
            <a href="./NavBar.js">Remeras</a>
            <a href="./NavBar.js">Zapatillas</a>
            <a href="./NavBar.js">Buzos</a>
            <Cart/>
            <button onClick={()=>{setContador(contador-1)}}>-</button>
            <p>{contador}</p>
             <button onClick={()=>{setContador(contador+1)}}>+</button>           
        </nav>
    )
}

export default Nav
