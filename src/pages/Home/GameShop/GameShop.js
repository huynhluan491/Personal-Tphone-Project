import classNames from 'classnames/bind';
import styles from './GameShop.module.scss';
import { gamingPhone } from '~/function';
import ProductItem from '~/components/ProductItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function GameShop() {
    const gamePhone = gamingPhone();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-container')}>
                <div className={cx('banner-title')}>
                    <h3 className={cx('title-text')}>R O G P H O N E</h3>
                </div>
                <div className={cx('banner-img')}>
                    <img src={require('~/assets/images/rogasus.png')} alt="rogasus" />
                </div>
                <div className={cx('gamingPhone-list')}>
                    <div className={cx('list-layout')}>
                        {gamePhone?.map((item, index) => (
                            <div className={cx('item-wrapper')}>
                                <ProductItem key={index} data={item} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('introduction')}>
                        <p className={cx('text-container')}>
                            <span className={cx('brand-name')}>rog phone</span> thế giới của mọi game thủ mang đến các
                            sản cực kì chất lượng với cấu hình cực khủng
                        </p>
                    </div>
                    <div className={cx('seemore-btn')}>
                        <Button whiteBorder>Xem thêm</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameShop;
