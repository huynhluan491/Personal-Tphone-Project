import classNames from 'classnames/bind';
import styles from './Tablet.module.scss';
import { tablet } from '~/function';
import ProductByCate from '~/components/ProductByCate';
const cx = classNames.bind(styles);

function Tablet() {
    return (
        <div>
            <ProductByCate categoryFunction={tablet} titleCate="Tablet" />
        </div>
    );
}

export default Tablet;
