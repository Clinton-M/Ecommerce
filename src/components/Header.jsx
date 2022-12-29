import React,{useState} from 'react'
import '../styles/Header.scss'
import icon_menu from '../assets/icons/icon_menu.svg'
import logo_yard_sale from '../assets/logos/logo_yard_sale.svg'
// import logoEmpr from '../assets/img/logoEmpr.png'
import icon_shopping_cart from '../assets/icons/icon_shopping_cart.svg'
import Menu from './Menu'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav>
            <img src={icon_menu} alt="menu" className="menu" />

            <div className="navbar-left">
                <img src={logo_yard_sale} alt="logo" className="nav_logo" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleMenu}>Clinton@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={icon_shopping_cart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {isMenuOpen? <Menu /> : null}
        </nav>
    )
}

export default Header;