import classNames from 'classnames/bind';
import styles from './Tablet.module.scss';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';
import { tablet } from '~/function';
const cx = classNames.bind(styles);

function Tablet() {
    const tabletProducts = tablet();
    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Điện Thoại" />
            <ProductsGrid>
                {tabletProducts?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>
        </div>
    );
}

export default Tablet;
