import classNames from 'classnames/bind';
import styles from './NetworkDevice.module.scss';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';
import { networkDevice } from '~/function';
const cx = classNames.bind(styles);

function NetworkDevice() {
    const networkProducts = networkDevice();
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Điện Thoại" />
            <ProductsGrid>
                {networkProducts?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default NetworkDevice;
