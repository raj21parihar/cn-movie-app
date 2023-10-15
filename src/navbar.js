import navbarStyle from './navbar.module.css';
export default function Navbar(props) {
    let { cartCount } = props;
    return (
        <div className={navbarStyle.nav}>
            <div className={navbarStyle.heading}>MovieCart</div>
            <div>
                <img
                    alt="cart"
                    className={navbarStyle.cartImage}
                    src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
                />
                <span className={navbarStyle.cartCount}>{cartCount}</span>
            </div>
        </div>
    );
}
