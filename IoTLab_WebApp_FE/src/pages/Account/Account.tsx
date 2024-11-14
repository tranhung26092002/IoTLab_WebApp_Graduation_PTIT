import React, { useState, useEffect, Fragment } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './Account.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { getUser } from '../../redux/UserReducer';

const Account = () => {
    const dispatch: DispatchType = useDispatch();
    const userId = useSelector((state: RootState) => state.UserReducer.userId);
    const user = useSelector((state: RootState) => state.UserReducer.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await dispatch(getUser(userId));
                setLoading(false);
            } catch (err) {
                setError('Không thể tải thông tin người dùng.');
                setLoading(false);
            }
        };

        fetchUser();
    }, [dispatch, userId]);

    const handleEdit = () => {
        // Redirect to edit page or show a modal for editing
        alert('Chức năng chỉnh sửa chưa được triển khai.');
    };

    if (loading) {
        return <div className={styles.loading}>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <h1 className={styles.title}>Thông Tin Người Dùng</h1>
                    <div className={styles.infoGroup}>
                        <label htmlFor="username">Tên người dùng:</label>
                        <p id="username" className={styles.infoText}>{user?.name || 'Chưa có thông tin'}</p>
                    </div>
                    <div className={styles.infoGroup}>
                        <label htmlFor="email">Email:</label>
                        <p id="email" className={styles.infoText}>{user?.email || 'Chưa có thông tin'}</p>
                    </div>
                    <div className={styles.infoGroup}>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <p id="phone" className={styles.infoText}>{user?.phone || 'Chưa có thông tin'}</p>
                    </div>
                    <div className={styles.infoGroup}>
                        <label htmlFor="address">Địa chỉ:</label>
                        <p id="address" className={styles.infoText}>{ 'Chưa có thông tin'}</p>
                    </div>
                    <button onClick={handleEdit} className={styles.editButton}>Chỉnh sửa thông tin</button>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Account;
