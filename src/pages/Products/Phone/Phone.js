import classNames from 'classnames/bind';
import styles from './Phone.module.scss';
import { phone } from '~/function';
import ProductCate from '~/components/ProductCate';
import ProductItem from '~/components/ProductItem';
import { ProductsGrid } from '~/components/Grid';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Phone() {
    const categoryProducts = phone();
    const [loadMore, setLoadMore] = useState(10);
    const [endLoad, setEndLoad] = useState(false);
    const cateproduct = categoryProducts.slice(0, loadMore);

    const handleSeeMore = () => {
        setLoadMore(loadMore + 10);
    };

    useEffect(() => {
        if (categoryProducts.length - loadMore <= 0) {
            setEndLoad(true);
        }
    }, [loadMore]);

    return (
        <div className={cx('products-mid-layout')}>
            <ProductCate headerCate="Điện Thoại" />
            <ProductsGrid>
                {cateproduct?.map((item, index) => (
                    <ProductItem data={item} key={index} />
                ))}
            </ProductsGrid>

            {!endLoad && (
                <Button seeAll onClick={handleSeeMore}>
                    Xem thêm {categoryProducts.length - loadMore} sản phẩm
                </Button>
            )}
        </div>
    );
}

export default Phone;
