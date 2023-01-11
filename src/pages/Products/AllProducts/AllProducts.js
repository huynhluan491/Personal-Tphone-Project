import classNames from 'classnames/bind';
import styles from './AllProducts.module.scss';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';
import data from '~/data/data.json';

const cx = classNames.bind(styles);

function AllProducts() {
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Tất cả sản phẩm" />
            <ProductsGrid>
                {data?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default AllProducts;
