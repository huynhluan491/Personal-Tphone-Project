import classNames from 'classnames/bind';
import styles from './Keyboard.module.scss';
import { keyboard } from '~/function';
import ProductByCate from '~/components/ProductByCate';

const cx = classNames.bind(styles);

function Keyboard() {
    return (
        <div>
            <ProductByCate categoryFunction={keyboard} titleCate="Bàn Phím" />
        </div>
    );
}

export default Keyboard;
