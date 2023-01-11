import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { NextIcon, PreviousIcon } from '../../../components/Icons';
import { Sliders } from './index';

const cx = classNames.bind(styles);
const delay = 5000;

function HomeSlider() {
    const [sliderData, setSliderData] = useState(Sliders);
    const [currentIdx, setCurrentIdx] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    const lastIdx = currentIdx * pageSize;
    const firstIdx = lastIdx - pageSize;
    const slider = sliderData.slice(firstIdx, lastIdx);

    const paginate = (num) => {
        setCurrentIdx(num);
        if (num <= 0) {
            setCurrentIdx(sliderData.length);
        }
        if (num > sliderData.length) {
            setCurrentIdx(1);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentIdx((prevIdx) => prevIdx + 1);
            if (currentIdx <= 0) {
                setCurrentIdx(sliderData.length);
            }
            if (currentIdx >= sliderData.length) {
                setCurrentIdx(1);
            }
        }, delay);
        return () => clearInterval(timerId);
    }, [currentIdx]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-container')}>
                <div className={cx('slider-images')}>
                    {slider.map((item, index) => (
                        <div className={cx('mySlides')} key={index}>
                            <img src={item} alt={item} />
                        </div>
                    ))}
                </div>
                <div className={cx('slider-btn')}>
                    <button className={cx('prev-item')} onClick={() => paginate(currentIdx - 1)}>
                        <PreviousIcon className={cx('btn-icon')} />
                    </button>
                    <button className={cx('next-item')} onClick={() => paginate(currentIdx + 1)}>
                        <NextIcon className={cx('btn-icon')} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
