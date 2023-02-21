import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button/Button';
import { CloseIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('login-content')}>
                <div className={cx('close-btn')}>
                    <Button whiteNoborder>
                        <CloseIcon />
                    </Button>
                </div>
                <div className={cx('page-header')}>
                    <h1 className={cx('title')}>Đăng nhập</h1>
                    <p className={cx('option-text')}>
                        Chưa có tài khoản?
                        <Link className={cx('text-right')} to={config.routes.register}>
                            Đăng ký tại đây
                        </Link>
                    </p>
                </div>
                <div className={cx('google-login')}>
                    <button className={cx('login-btn')}>
                        <img src={require('~/assets/images/googlelogo.png')} />
                        <p className={cx('btn-text')}>Đăng nhập bằng google</p>
                    </button>
                </div>
                <div className={cx('separation')}>
                    <span>HOẶC</span>
                </div>
                <form className={cx('login-form')}>
                    <div className={cx('email-input')}>
                        <input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className={cx('password-input')}>
                        <input type="password" name="password" placeholder="******" />
                    </div>
                    <button className={cx('submit-btn')}>Đăng nhập</button>
                    <Link to={'#'}>Quên mật khẩu</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
