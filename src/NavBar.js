import Cart from './CartWidget'
import "./style.css"

const Nav = () => {
    return (
        <nav>
            <h1>Mi tienda</h1>
            <a href="./NavBar.js">Accesorios</a>
            <a href="./NavBar.js">Remeras</a>
            <a href="./NavBar.js">Zapatillas</a>
            <a href="./NavBar.js">Buzos</a>
            <Cart/>
        </nav>
    )
}

export default Nav
