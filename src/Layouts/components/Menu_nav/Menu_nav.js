import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Menu_nav.module.scss'
import { NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';
import config from '~/config';

const cx = classNames.bind(styles)

function Menu_Nav() {
    return (  
        <div className={cx('wrapper')}>
            <nav className={cx('nav-item-list')}>
                <MenuItem title='Trang chủ' to={config.routes.home} />
                <MenuItem title='Tất cả sản phẩm' to={config.routes.allproducts} />
                <MenuItem title='Điện thoại' to={config.routes.phone} />
                <MenuItem title='Laptop' to={config.routes.laptop} />
                <MenuItem title='Tablet' to={config.routes.tablet} />
                <MenuItem title='Smart watch' to={config.routes.smartclock} />
                <MenuItem title='Thiết bị mạng' to={config.routes.networkdevice} />
                <MenuItem title='Bàn phím' to={config.routes.keyboard} />
                <MenuItem title='Loa' to={config.routes.speaker} />
            </nav>
        </div>
    );
}


Menu_Nav.propTypes = {

}

export default Menu_Nav;