import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';
import { MinusIcon, PlusIcon, PreviousIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ProductCart() {
    const { products, totalPrice, totalQuantities } = useSelector((state) => state.CartReducer);

    useEffect(() => {
        console.log(products);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-container')}>
                <div className={cx('cart-header')}>
                    <button className={cx('back-btn')}>
                        <PreviousIcon />
                        <p className={cx('btn-mean')}>Trở về</p>
                    </button>
                    <h3 className={cx('your-cart')}>Giỏ hàng của bạn</h3>
                </div>
                <div className={cx('gift-text')}>Quà tặng cá nhân với giá trị lên đến 600.000đ</div>
                {products.length > 0 ? (
                    <div className={cx('product-wrapper')}>
                        {products.map((item) => (
                            <div key={item.id} className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className={cx('product-detail')}>
                                    <span className={cx('product-name')}>{item.name}</span>
                                    <div className={cx('product-quantity')}>
                                        <div className={cx('quatity-controller')}>
                                            <button>
                                                <MinusIcon />
                                            </button>
                                            <p className={cx('quatity-text')}>{item.quantity}</p>
                                            <button>
                                                <PlusIcon />
                                            </button>
                                        </div>
                                        <div className={cx('product-price')}>
                                            <span className={cx('price')}>
                                                {(item?.price * item.quantity).toLocaleString('it-IT', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={cx('cart-empty')}>
                        <div className={cx('empty-img')}>
                            <img src={require('~/assets/images/cartempty.png')} alt="" />
                        </div>
                        <div className={cx('cart-empty-footer')}>
                            <h3 className={cx('empty-notification')}>
                                <strong>Ôi!!!</strong>
                                Bạn chưa thêm sản phẩm nào.
                            </h3>
                            <Link to={config.routes.allproducts}>
                                <button onClick={() => window.scrollTo(0, 0)} className={cx('see-product-btn')}>
                                    Xem sản phẩm
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCart;
