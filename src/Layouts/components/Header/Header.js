import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../../components/Button';
import { BackNavigate, CartIcon, MenuIcon, SearchIcon } from '../../../components/Icons';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

const navItems = [
    { title: 'Trang chủ', to: config.routes.home },
    { title: 'Tất cả sản phẩm', to: config.routes.allproducts },
    { title: 'Điện thoại', to: config.routes.phone },
    { title: 'Laptop', to: config.routes.laptop },
    { title: 'Tablet', to: config.routes.tablet },
    { title: 'Smart watch', to: config.routes.smartclock },
    { title: 'Thiết bị mạng', to: config.routes.networkdevice },
    { title: 'Bàn phím', to: config.routes.keyboard },
    { title: 'Loa', to: config.routes.speaker },
];

function Header() {
    const { products, totalQuantities } = useSelector((state) => state.CartReducer);

    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <button onClick={() => navigate(-1)}>
                    <BackNavigate />
                </button>
                <Button whiteNoborder mediumTango>
                    <MenuIcon />
                </Button>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="" />
                </Link>
                <div className={cx('right-header')}>
                    <div className={cx('services-container')}>
                        <Button className={cx('search-icon')} whiteNoborder mediumTango>
                            <SearchIcon />
                        </Button>
                        <Link to={config.routes.productcart}>
                            <Button className={cx('cart-icon')} whiteNoborder mediumTango>
                                <CartIcon />
                                <p className={cx('cart-quantity')}>{totalQuantities}</p>
                            </Button>
                        </Link>
                    </div>
                    <div className={cx('user-login')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className={cx('content')}>Đăng nhập</div>
                    </div>
                </div>
            </div>
            <div className={cx('navigation-container')}>
                <nav className={cx('nav-item-list')}>
                    {navItems.map((item, index) => (
                        <NavLink key={index} className={(nav) => cx('nav-item', { active: nav.isActive })} to={item.to}>
                            <span>{item.title}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Header;
