import React, {Fragment} from 'react'
import headerImg from '../../assets/main-site-pic.png'
import CartButton from './CartButton'
import styling from './Header.module.css'
const Header = (props) => {
    return (
        <Fragment>
            <header className={styling.header}>
                <h1>OrderIt</h1>
                <CartButton onClick = {props.onShowCart} />
            </header>
            <div className={styling['main-image']}>
                <img src = {headerImg} alt = 'Main page logo'/>
            </div>
        </Fragment>
    )
}

export default Header