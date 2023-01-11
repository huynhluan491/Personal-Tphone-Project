import classNames from 'classnames/bind';
import styles from './SmartClock.module.scss';
import { smartClock } from '~/function';
import ProductByCate from '~/components/ProductByCate';

const cx = classNames.bind(styles);

function SmartClock() {
    return (
        <div>
            <ProductByCate categoryFunction={smartClock} titleCate="Đồng Hồ" />
        </div>
    );
}

export default SmartClock;
