import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Services.module.scss'
import ServiceItem from './ServiceItem';

const cx = classNames.bind(styles)

function Services() {
    return (  
        <div className={cx('wrapper')}>
            <ServiceItem title='Ưu đãi' description='Với ưu đãi khuyến mãi lên đến 69%.' imgUrl='https://tphone-9a576.web.app/static/media/specialoffer.2155ca840f440a4e5ce2.png'/>
            <ServiceItem title='Tiết kiệm' description='Chúng tôi có chương trình tri ân riêng cho khách hàng.' imgUrl={'https://tphone-9a576.web.app/static/media/savingmoney.471098c25a761258f14a.png'}/>
            <ServiceItem title='Tốc độ' description='Tốc độ giao hàng chuẩn quốc tế.' imgUrl='https://tphone-9a576.web.app/static/media/freeship.d747233115c8c8b73643.png'/>
        </div>
    );
}

export default Services;