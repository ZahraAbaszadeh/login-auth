import React from 'react';
import Styles from './NotFoundStyle.module.css';
import { Footer, Header } from 'layouts';
import { Navigation } from 'components';

export const NotFoundPage = (props) => {
    return (
        <div className="contentWithHeaderAndFooter">
            <Header />
                <div className={Styles.text}>
                    <p>صفحه مورد نظر یافت نشد</p>
                    <Navigation text={'بازگشت به صفحه اصلی'} link="/home" intenal/>
                </div>
            <Footer />
        </div>
    );
};
