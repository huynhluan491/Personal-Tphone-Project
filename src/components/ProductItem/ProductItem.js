import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import Button from '~/components/Button';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { product: data, quantity: 1 } });
    };

    return (
        <div className={cx('wrap-product')}>
            <div className={cx('item-product')}>
                <div className={cx('add-btn')}>
                    <Button addToCart smallTango onClick={() => addToCart()} />
                </div>
                <Link to={`/product/${data.name}`} onClick={() => window.scrollTo(0, 0)}>
                    <div className={cx('product-img')}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={cx('product-detail')}>
                        <p className={cx('product-name')}>{data.name}</p>
                        <h2 className={cx('product-price')}>
                            {data.price.toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </h2>
                        <p className={cx('sale-price')}>
                            {(data.price - (data.price * 6) / 100).toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProductItem;
