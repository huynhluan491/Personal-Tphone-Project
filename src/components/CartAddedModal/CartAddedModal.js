import classNames from 'classnames/bind';
import styles from './CartAddedModal.module.scss';
import { TickedIcon } from '../Icons';

const cx = classNames.bind(styles);

function CartAddedModal() {
    return (
        <div className={cx('modal-wrapper')}>
            <TickedIcon className={cx('icon')} />
            <p className={cx('notification')}>Thêm vào giỏ hàng thành công</p>
        </div>
    );
}

export default CartAddedModal;
