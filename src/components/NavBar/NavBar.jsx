import Logo from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <h1>Bienvenidos a BurgerArg!</h1>

        <nav>
            <ul>
                <li>burgerarg</li>
                <li>kitburger</li>
                <li>medallonburger</li>
            </ul>
        </nav>

        <Logo />

    
    </header>
  )
}

export default NavBar