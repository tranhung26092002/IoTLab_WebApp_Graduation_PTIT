import React, { Fragment } from "react";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { Dropdown, Menu, Space, message } from "antd";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { history } from "../../utils/config";
import { logout } from "../../redux/UserReducer";

const Header: React.FC = () => {
  const role = useSelector((state: RootState) => state.UserReducer.role);
  const email = useSelector((state: RootState) => state.UserReducer.email);
  const dispatch: DispatchType = useDispatch();

  const handlAdminClick = () => {
    if (role !== "admin") {
      message.error("Bạn không có quyền truy cập trang Admin");
      return;
    }

    history.push("/admin");
  };

  const handLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu>
      <Menu.Item key="admin">
        <span className="text-decoration-none" onClick={handlAdminClick}>
          Trang Admin
        </span>
      </Menu.Item>
      <Menu.Item key="chat">
        <a href="/boxchat" target="_blank" className="text-decoration-none">
          Trợ giảng lab
        </a>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handLogout}>
        <span className="text-decoration-none">Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      <div className={styles.headerContainer}>
        <div className={styles.topRow}>
          <div className={styles.logoLeft}>
            <img
              src={require("../../assets/img/logo120.png")}
              alt="logo_left"
            />
            <div className={styles.logoText}>
              <div className={styles.textDanger}>
                HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG
              </div>
              <div>Posts and Telecommunications Institute of Technology</div>
            </div>
          </div>
          <div className={styles.logoRight}>
            <div
              className="lang"
              style={{ textAlign: "center", padding: "5px 12px 0 0" }}
            >
              <a className="mr-2 mb-4" href="https://portal.ptit.edu.vn">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-viet-nam.jpg"
                  title="Tiếng Việt"
                  style={{ textAlign: "right" }}
                  alt=""
                />
              </a>
              <a href="https://portal.ptit.edu.vn/eng/">
                <img
                  src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-anh.jpg"
                  title="Tiếng Anh"
                  style={{ textAlign: "right" }}
                  alt=""
                />
              </a>
            </div>

            <Dropdown overlay={menu}>
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  {email}
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className={styles.navigation}>
          <NavLink to="/home" className={styles.link}>
            HOME
          </NavLink>
          <br />
          <NavLink to="/about" className={styles.link}>
            ABOUT
          </NavLink>
          <br />
          <NavLink to="/" className={styles.link}>
            DOCUMENT
          </NavLink>
          <br />
          <NavLink to="/open-kit" className={styles.link}>
            OPEN-KIT
          </NavLink>
          <br />
          <NavLink to="/contact" className={styles.link}>
            CONTACT
          </NavLink>
          <br />
        </div>
        <div className={styles.redLine}></div>
      </div>
    </Fragment>
  );
};

export default Header;
