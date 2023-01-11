import classNames from 'classnames/bind';
import styles from './NetworkDevice.module.scss';
import { networkDevice } from '~/function';
import ProductByCate from '~/components/ProductByCate';

const cx = classNames.bind(styles);

function NetworkDevice() {
    return (
        <div>
            <ProductByCate categoryFunction={networkDevice} titleCate="Thiết Bị Mạng" />
        </div>
    );
}

export default NetworkDevice;
