import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Menu_nav.module.scss'
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles)

function MenuItem( {title, to}) {
    return (  
        <NavLink className={(nav) => cx('nav-item', {active: nav.isActive})} to={to}>
            <span>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default MenuItem;