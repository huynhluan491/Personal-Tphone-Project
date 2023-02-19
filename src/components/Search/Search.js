import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import data from '../../data/data.json';
import { useState } from 'react';
import { CloseIcon, SearchIcon } from '../Icons';
import Button from '../Button/Button';
import ProductItem from '../ProductItem/ProductItem';
import { useEffect } from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const hotProducts = data.slice(20, 44);
const Search = ({ setSearchToggle }) => {
    const [productSearched, setProductSearched] = useState(hotProducts);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        console.log(hotProducts);
    });

    return (
        <div className={cx('search-container')}>
            <div className={cx('search-input-container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('search-input')}>
                    <input input="text" placeholder="Nhập tên sản phẩm.." />
                    <Button whiteNoborder className={cx('search-icon')}>
                        <SearchIcon />
                    </Button>
                </div>
                <Button className={cx('close-icon')} whiteNoborder onClick={() => setSearchToggle(false)}>
                    <CloseIcon />
                </Button>
            </div>
            <div className={cx('content-wrapper')}>
                <h1 className={cx('title')}>Được tìm kiếm nhiều nhất</h1>
                <div className={cx('products-wrapper')}>
                    {productSearched.map((item, index) => (
                        <ProductItem key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
