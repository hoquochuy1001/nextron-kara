'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function MenuBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"blue !important"}}>
      <Container>
        <Navbar.Brand href="/home">KARAOKE NICE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Nhân Viên" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nhan-vien/cap-nhat-nhan-vien">
                Cập nhật nhân viên
              </NavDropdown.Item>
              <NavDropdown.Item href="/nhan-vien/tai-khoan">
                Tài khoản
              </NavDropdown.Item>
              <NavDropdown.Item href="/nhan-vien/chuc-vu">
                Chức vụ
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Khách Hàng" id="basic-nav-dropdown">
              <NavDropdown.Item href="/khach-hang/cap-nhat-khach-hang">
                Cập nhật khách hàng
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dịch Vụ" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                Cập nhật dịch vụ
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Loại dịch vụ
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Đặt dịch vụ
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Phòng" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                Cập nhật phòng
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Loại phòng
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Đặt phòng
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hóa Đơn" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                Cập nhật hóa đơn
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Chi tiết hóa đơn
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Thanh toán
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Thống kê" id="basic-nav-dropdown">
              <NavDropdown.Item href="">
                Thống kê doanh thu
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary" href="/man-hinh-thu-ngan">Màn hình thu ngân</Button>
            <Button variant="primary" href="/nhan-vien-order" className="ms-2">Nhân viên order</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MenuBar;