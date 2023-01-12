import classNames from 'classnames/bind';
import styles from './Laptop.module.scss';
import { laptop } from '~/function';
import ProductByCate from '~/components/ProductByCate';

const cx = classNames.bind(styles);

function Laptop() {
    return (
        <div>
            <ProductByCate categoryFunction={laptop} titleCate="Laptop" />
        </div>
    );
}

export default Laptop;
