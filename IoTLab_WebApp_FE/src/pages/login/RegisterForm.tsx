import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/UserReducer";
import { DispatchType } from "../../redux/configStore";
import { notification } from "antd";

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  onUsernameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onToggleLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  username,
  email,
  password,
  confirmPassword,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onToggleLogin,
}) => {
  const dispatch: DispatchType = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Hàm để toggle chế độ hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Hàm để toggle chế độ hiển thị xác nhận mật khẩu
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      notification.error({
        message: "Lỗi",
        description: "Mật khẩu không khớp!",
        duration: 1,
      });
      return;
    }

    const registerData = { name: username, email, password, role: "customer" };
    dispatch(registerUser(registerData))
      .then((action: any) => {
        if (action.payload && action.payload.status === 200) {
          notification.success({
            message: "Thành công",
            description: "Đăng ký thành công!",
            duration: 1,
          });
        } else {
          notification.error({
            message: "Lỗi",
            description: "Đăng ký thất bại!",
            duration: 1,
          });
        }
      })
      .catch(() => {
        notification.error({
          message: "Lỗi",
          description: "Đăng ký thất bại!",
          duration: 1,
        });
      });
    onToggleLogin();
  };

  return (
    <form
      onSubmit={handleRegisterSubmit}
      className="relative bg-white p-5 rounded-xl shadow-lg z-10 w-full max-w-[400px]  ring-1 ring-gray-200"
    >
      <div className="w-full text-center mb-4">
        <p className="text-2xl font-bold text-gray-800">Register</p>
      </div>
      <div className="w-full mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Họ và tên:
        </label>
        <input
          className="w-full h-10 px-4 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          type="text"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Mã sinh viên:
        </label>
        <input
          className="w-full h-10 px-4 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          type="text"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Mật khẩu:
        </label>
        <div className="relative">
          <input
            className="w-full h-10 px-4 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            type={showPassword ? "text" : "password"} // Đổi kiểu input giữa text và password
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {/* Biểu tượng mắt và khóa mắt */}
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } text-gray-500 w-5 h-5`}
            ></i>
          </button>
        </div>
      </div>

      <div className="w-full mb-4">
        <label className="block font-semibold text-gray-700 mb-2">
          Xác nhận mật khẩu:
        </label>
        <div className="relative">
          <input
            className="w-full h-10 px-4 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            type={showPassword ? "text" : "password"} // Đổi kiểu input giữa text và password
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {/* Biểu tượng mắt và khóa mắt */}
            <i
              className={`fa-solid ${
                showConfirmPassword ? "fa-eye" : "fa-eye-slash"
              } text-gray-500 w-5 h-5`}
            ></i>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between mt-4">
        <button
          className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          type="submit"
        >
          Đăng ký
        </button>
        <button
          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors ml-2"
          type="button"
          onClick={onToggleLogin}
        >
          Hủy
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
