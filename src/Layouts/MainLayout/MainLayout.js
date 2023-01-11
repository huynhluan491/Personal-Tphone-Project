import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'
import { FreeShipNotification } from '~/components/Freeship'
import Header from '../components/Header'
import Menu_Nav from '../components/Menu_nav'

const cx = classNames.bind(styles)

function MainLayout( { children } ) {
    return ( 
        <div className={cx('wrapper')}>
            <FreeShipNotification />
            <Header />
            <Menu_Nav />
            <div className={cx('content')}>
                { children }
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout;