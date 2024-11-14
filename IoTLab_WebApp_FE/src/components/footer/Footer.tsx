import React, { Fragment } from "react";

type FooterItemProps = {
  title: string;
  content: string | JSX.Element;
};

const FooterItem = ({ title, content }: FooterItemProps) => (
  <div className="w-1/4 px-4 sm:w-full md:w-1/4 mb-4">
    <aside className="widget widget_text">
      <div className="textwidget">
        <span className="text-[15px] text-white">
          <strong>{title}</strong>
          <br />
          {content}
        </span>
      </div>
    </aside>
  </div>
);

type FooterLinksProps = {
  links: { href: string; text: string }[];
};

const FooterLinks = ({ links }: FooterLinksProps) => (
  <div className="w-1/4 px-4 sm:w-full md:w-1/4 mb-4">
    <aside className="widget widget_text">
      <div className="textwidget">
        <ul className="list-inside list-square">
          {links.map((link, index) => (
            <li key={index} className="text-white">
              <a
                className="text-decoration-none text-dark hover:underline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
);

const Footer = () => {
  const links = [
    { href: "http://tracuuvanbang.ptit.edu.vn/", text: "Tra cứu bằng tốt nghiệp" },
    { href: "#", text: "Các đơn vị thành viên" },
    { href: "http://jstic.ptit.edu.vn/index.php/jstic/index", text: "Tạp chí Khoa học Công nghệ" },
    { href: "http://portal.ptit.edu.vn/ba-cong-khai/", text: "Ba công khai" },
  ];

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      <div className="w-full pt-2">
        <div className="bg-[#bc2626] pt-0">
          <div className="px-5 py-4">
            <a href="https://www.facebook.com/HocvienPTIT" target="_blank" aria-label="Học viện Công nghệ Bưu Chính Viễn Thông">
              <img
                src="https://ptit.edu.vn/wp-content/uploads/2023/06/logo-footer-svg.svg"
                alt="Học viện Công nghệ Bưu Chính Viễn Thông – PTIT"
                className="logo_desktop"
                style={{ width: "auto", height: "60px" }}
              />
            </a>
          </div>
          <div className="h-[2px] bg-red-500"></div>
        </div>
        <div className="bg-[#bc2626]">
          <div className="px-5 py-4 flex flex-wrap justify-between">
            <FooterItem
              title="Trụ sở chính:"
              content={
                <>
                  122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.
                  <br />
                  <br />
                  Cơ sở đào tạo tại Hà Nội:
                  <br />
                  Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội
                </>
              }
            />
            <FooterItem
              title="Học viện cơ sở tại TP. Hồ Chí Minh:"
              content={
                <>
                  11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh
                  <br />
                  <br />
                  Cơ sở đào tạo tại TP Hồ Chí Minh:
                  <br />
                  Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh
                </>
              }
            />
            <FooterLinks links={links} />
            <div className="w-1/4 px-4 sm:w-full md:w-1/4 mb-4">
              <aside className="widget widget_text">
                <div className="textwidget">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.156035754973!2d105.78456683308819!3d20.980514790166218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdcf7b0bd1%3A0xc1cf5dd00247628a!2zSOG7jWMgVmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5n!5e0!3m2!1svi!2s!4v1491884697566"
                    className="w-full h-[200px] border-none"
                    title="Google Maps"
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="bg-[#941A1A] py-4">
          <div className="text-center text-[#FFB6B6] text-[15px]">
            © Copyright 2024 HocVienCongNgheBuuChinhVienThong, All rights reserved.
            <br />
            Học viện Công nghệ Bưu chính Viễn thông giữ bản quyền nội dung trên website này.
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <button
            onClick={scrollToTop}
            className="bg-[#bc2626] text-white p-3 rounded-full shadow-md hover:bg-[#051A53] focus:outline-none"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
