import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeProducts.module.scss';
import ProductItem from '~/components/ProductItem';
import ProductCate from '~/components/ProductCateHeader';
import Button from '~/components/Button';
import CartAddedModal from '~/components/CartAddedModal/CartAddedModal';

const cx = classNames.bind(styles);

function HomeProducts(props) {
    const { productCate, headerTitle, headerCate } = props;
    const productData = productCate;
    const titleHeader = headerTitle;
    const cateHeader = headerCate;
    const [productLimit, setProductLimit] = useState(15);

    return (
        <div className={cx('wrapper')}>
            <ProductCate headerCate={cateHeader} headerTitle={titleHeader} />
            <div className={cx('products-container')}>
                {productData &&
                    productData
                        .slice(0, productLimit ? productLimit : productData.length)
                        .map((product, index) => <ProductItem key={index} data={product} />)}
            </div>
            <div className={cx('seeAll-btn')}>
                <Button seeAll>Xem tất cả</Button>
            </div>
        </div>
    );
}

export default HomeProducts;
