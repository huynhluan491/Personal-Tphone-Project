import classNames from 'classnames/bind';
import styles from './Laptop.module.scss';
import { laptop } from '~/function';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';

const cx = classNames.bind(styles);

function Laptop() {
    const laptopProduct = laptop();
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Laptop" />
            <ProductsGrid>
                {laptopProduct?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default Laptop;
