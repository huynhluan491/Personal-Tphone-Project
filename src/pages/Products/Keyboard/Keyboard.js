import classNames from 'classnames/bind';
import styles from './Keyboard.module.scss';
import { keyboard } from '~/function';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';

const cx = classNames.bind(styles);

function Keyboard() {
    const keyboardProducts = keyboard();
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Bàn Phím" />
            <ProductsGrid>
                {keyboardProducts?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default Keyboard;
