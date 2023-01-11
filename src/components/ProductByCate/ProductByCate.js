import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductByCate.module.scss';
import ProductItem from '../ProductItem';
import HomeProducts from '~/pages/Home/HomeProducts';

const cx = classNames.bind(styles);

function ProductByCate({ categoryFunction }) {
    return (
        <div className={cx('products-container')}>
            <HomeProducts headerCate="Laptop" products={categoryFunction} />
        </div>
    );
}

export default ProductByCate;
