import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomeSlider from '~/pages/Home/Slider';
import Services from '~/Layouts/components/Services';
import { AppleShop } from './index';
import FavoriteShop from './FavoriteShop';
import GameShop from './GameShop';
import React from 'react';
import SellOff from './SellOff';
import ProductSingleModal from '~/components/ProductSingleModal';
import { singlePeatureProduct } from '~/data';
import ProductCollection from './ProductCollection';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-layout')}>
                <HomeSlider />
                <Services />
                <AppleShop />
                <FavoriteShop />
            </div>
            <GameShop />
            <SellOff />
            <div className={cx('content-layout')}>
                <ProductSingleModal product={singlePeatureProduct} />
                {/* <ProductCollection /> */}
            </div>
        </div>
    );
}

export default Home;
