import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


const TongQuanPage = () => {
  const data = [
    { title: 'ĐƠN HÀNG', value: '0', icon: 'fa fa-tags emerald-bg' },
    { title: 'DOANH THU', value: '0', icon: 'fa fa-cart-arrow-down emerald-bg' },
    { title: 'HUỶ/TRẢ ĐỒ', value: '0', icon: 'fa fa-reply emerald-bg' },
    { title: 'GIÁ TRỊ TRẢ LẠI', value: '0', icon: 'fa fa-reply-all emerald-bg' },
    { title: 'GHI NỢ', value: '0', icon: 'fa fa-address-card emerald-bg' },
    { title: 'BẢN SỬ DỤNG', value: '0 / 30', icon: 'fa fa-crosshairs emerald-bg' },
  ];

  return (
    <Row>
      {data.map((item, index) => (
        <Col key={index} xs={12} md={4} lg={2}>
          <Card className="custom-card">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="icon-container">
                <i className={`${item.icon} icon`}></i>
              </div>
              <div className="text-container">
                <h3>{item.value}</h3>
                <p>{item.title}</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TongQuanPage;
