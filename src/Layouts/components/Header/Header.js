import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../../components/Button';
import { CartIcon, MenuIcon, SearchIcon } from '../../../components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
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
                        <Button className={cx('cart-icon')} whiteNoborder mediumTango>
                            <CartIcon />
                        </Button>
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
