import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Services.module.scss'

const cx = classNames.bind(styles)


function ServiceItem({ title, description, imgUrl}) {
    return (  
        <div className={cx('service-container')}>
            <img className={cx('service-img')} src={imgUrl} alt=''/>
            <div className={cx('service-content')}>
                <h3 className={cx('title')}>{title}</h3>
                <p className={cx('description')}>{description}</p>
            </div>
        </div>
    );
}

export default ServiceItem;