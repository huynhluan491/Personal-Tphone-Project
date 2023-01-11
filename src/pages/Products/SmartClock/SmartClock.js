import classNames from 'classnames/bind';
import styles from './SmartClock.module.scss';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';
import { smartClock } from '~/function';
const cx = classNames.bind(styles);

function SmartClock() {
    const watch = smartClock();
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Điện Thoại" />
            <ProductsGrid>
                {watch?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default SmartClock;
