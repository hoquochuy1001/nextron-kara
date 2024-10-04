import React, { useState } from 'react';

export default function TongQuanPage({ menuUrl, isRestaurant }) {
    const [orderCount, setOrderCount] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [cancelCount, setCancelCount] = useState(0);
    const [returnValue, setReturnValue] = useState(0);
    const [cash, setCash] = useState(0);
    const [otherAccounts, setOtherAccounts] = useState(0);
    const [debt, setDebt] = useState(0);
    const [usedTables, setUsedTables] = useState('0 / 30');
    const [expiryWarning, setExpiryWarning] = useState(0);

    const goTo = (url) => {
        // Implement navigation logic here
        console.log(`Navigating to ${url}`);
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="main-box">
                    <div className="clearfix">
                        <div className="infographic-box merged merged-top pull-left has-pointer" onClick={() => goTo(menuUrl.order)}>
                            <i className="fa fa-tags emerald-bg"></i>
                            <span className="value emerald">{orderCount}</span>
                            <span className="headline">ĐƠN HÀNG</span>
                        </div>
                        <div className="infographic-box merged merged-top merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.order)}>
                            <i className="fa fa-cart-arrow-down emerald-bg"></i>
                            <span className="value emerald">{revenue}</span>
                            <span className="headline">DOANH THU</span>
                        </div>
                    </div>
                    {isRestaurant && (
                        <div className="clearfix">
                            <div className="infographic-box merged pull-left has-pointer" onClick={() => goTo(menuUrl.roomhistory)}>
                                <i className="fa fa-reply emerald-bg"></i>
                                <span className="value emerald">{cancelCount}</span>
                                <span className="headline">HỦY/TRẢ ĐỒ</span>
                            </div>
                            <div className="infographic-box merged merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.roomhistory)}>
                                <i className="fa fa-reply-all emerald-bg"></i>
                                <span className="value emerald">{returnValue}</span>
                                <span className="headline">GIÁ TRỊ TRẢ LẠI</span>
                            </div>
                        </div>
                    )}
                    {!isRestaurant && (
                        <div className="clearfix">
                            <div className="infographic-box merged pull-left has-pointer" onClick={() => goTo(menuUrl.returns)}>
                                <i className="fa fa-reply emerald-bg"></i>
                                <span className="value emerald">{cancelCount}</span>
                                <span className="headline">TRẢ HÀNG</span>
                            </div>
                            <div className="infographic-box merged merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.returns)}>
                                <i className="fa fa-reply-all emerald-bg"></i>
                                <span className="value emerald">{returnValue}</span>
                                <span className="headline">GIÁ TRỊ TRẢ LẠI</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-md-6">
                <div className="main-box">
                    <div className="clearfix">
                        <div className="infographic-box merged merged-top pull-left has-pointer" onClick={() => goTo(menuUrl.cashflow)}>
                            <i className="fa fa-money emerald-bg"></i>
                            <span className="value emerald">{cash}</span>
                            <span className="headline">TIỀN MẶT</span>
                        </div>
                        <div className="infographic-box merged merged-top merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.cashflow)}>
                            <i className="fa fa-cc-visa emerald-bg"></i>
                            <span className="value emerald">{otherAccounts}</span>
                            <span className="headline">Tài khoản khác</span>
                        </div>
                    </div>
                    <div className="clearfix">
                        <div className="infographic-box merged pull-left has-pointer" onClick={() => goTo(menuUrl.customer)}>
                            <i className="fa fa-address-card emerald-bg"></i>
                            <span className="value emerald">{debt}</span>
                            <span className="headline">Ghi nợ</span>
                        </div>
                        {isRestaurant ? (
                            <div className="infographic-box merged merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.room)}>
                                <i className="fa fa-crosshairs emerald-bg"></i>
                                <span className="value emerald">{usedTables}</span>
                                <span className="headline">BÀN SỬ DỤNG</span>
                            </div>
                        ) : (
                            <div className="infographic-box merged merged-right pull-left has-pointer" onClick={() => goTo(menuUrl.expirywarning)}>
                                <i className="fa fa-bomb emerald-bg"></i>
                                <span className="value emerald">{expiryWarning}</span>
                                <span className="headline">HẾT HẠN SỬ DỤNG</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}