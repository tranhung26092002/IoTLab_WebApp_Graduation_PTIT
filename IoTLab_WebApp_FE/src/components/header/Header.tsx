import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { logout } from "../../redux/UserReducer";
import { message } from "antd";
import { history } from "../../config/config";

const Header = () => {
  const role = useSelector((state: RootState) => state.UserReducer.role);
  const email = "B20DCVT199";
  const dispatch: DispatchType = useDispatch();

  const handleAdminClick = () => {
    if (role !== "admin") {
      message.error("Bạn không có quyền truy cập trang Admin");
      return;
    }
    history.push("/admin");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <div className="bg-white border border-gray-200 rounded-md shadow-md p-2">
      <div className="border-t border-gray-200 mt-2">
        <span
          className="block py-1 px-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleAdminClick}
        >
          Admin
        </span>
        <a href="/profile" className="block py-1 px-2 hover:bg-gray-100">
          Thông tin cá nhân
        </a>
        <a
          href="/boxchat"
          target="_blank"
          className="block py-1 px-2 hover:bg-gray-100"
        >
          Trợ giảng lab
        </a>
        <span
          className="block py-1 px-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleLogout}
        >
          Đăng xuất
        </span>
      </div>
    </div>
  );

  return (
    <Fragment>
      {/* Top Row */}
      <div className="flex flex-col w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex justify-between items-center p-4 space-x-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 flex-grow">
            <img
              src="https://ptit.edu.vn/wp-content/uploads/2024/05/logo-ptit-1.svg"
              alt="Học viện Công nghệ Bưu Chính Viễn Thông – PTIT"
              className="logo_desktop"
              style={{ width: "347px", height: "40px" }}
            />
          </div>

          {/* Language Switcher and Dropdown */}
          <div className="flex items-center space-x-2 text-xs">
          <a href="https://portal.ptit.edu.vn" className="mr-2">
              <span className="text-lg font-medium text-gray-800">VN</span>
            </a>
            <a href="https://portal.ptit.edu.vn/eng/">
              <span className="text-lg font-medium text-gray-800">EN</span>
            </a>
          </div>

          <div>
            <Dropdown overlay={menu}>
              <div className="flex items-center cursor-pointer">
                <Space>
                  {email}
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-6 py-1">
          {["Trang chủ", "Giới thiệu", "Tài liệu", "Open-Kit", "Liên hệ"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm text-black py-1 px-2 relative hover:after:w-full after:content-[''] after:block after:w-0 after:h-1 after:bg-red-600 after:absolute after:bottom-[-3px] after:left-1/2 after:transform after:translate-x-[-50%]"
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Red Line */}
        <div className="h-[3.5px] bg-red-600 w-full mt-2"></div>
      </div>

      {/* Extra space to prevent content from hiding under the fixed header */}
      <div className="mt-[120px]"></div>
    </Fragment>
  );
};

export default Header;
