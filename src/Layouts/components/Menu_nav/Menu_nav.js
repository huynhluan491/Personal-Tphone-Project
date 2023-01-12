import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu_nav.module.scss';
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';
import config from '~/config';

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

function Menu_Nav() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav-item-list')}>
                {navItems.map((item, index) => (
                    <MenuItem key={index} title={item.title} to={item.to} />
                ))}
            </nav>
        </div>
    );
}

Menu_Nav.propTypes = {};

export default Menu_Nav;
