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
import { useEffect } from 'react';

const cx = classNames.bind(styles);

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
        </div>
    );
}

export default Header;
