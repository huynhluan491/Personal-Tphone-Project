import classNames from 'classnames/bind';
import styles from './Phone.module.scss';
import { phone } from '~/function';
import ProductByCate from '~/components/ProductByCate';

const cx = classNames.bind(styles);

function Phone() {
    return (
        <div>
            <ProductByCate categoryFunction={phone} titleCate="Điện thoại" />
        </div>
    );
}

export default Phone;
