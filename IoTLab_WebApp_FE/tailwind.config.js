/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tìm tất cả các tệp JavaScript, TypeScript trong thư mục src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#081140',
        secondary: '#dc3545',
        'text-primary': '#77838f',
        'theme-heading': '#081140',
        'theme-text': '#5e6f81',
        'theme-white': '#fff',
        'theme-border': '#ddd',
      },
      fontFamily: {
        heading: ['Gilroy', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [], // Có thể thêm các plugin Tailwind khác nếu cần
};
