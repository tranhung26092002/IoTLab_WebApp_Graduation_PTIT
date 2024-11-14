import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './About.module.scss';

const About = () => {
    const feedbackData = [
        {
            name: "Phạm Văn Huấn",
            organization: "HỌC VIỆN AN NINH",
            feedback: "OpenLAB là một đối tác tin cậy, tận tâm, luôn luôn trau dồi để mang đến chất lượng sản phẩm tốt nhất tới người dùng.",
            image: require('../../assets/img/home/Chatbot.png'), // Add the appropriate image path
        },
        {
            name: "Đăng Khôi",
            organization: "THÁI BÌNH",
            feedback: "Với những công nghệ hiện đại, nắm bắt xu hướng thị trường, sản phẩm OpenLAB mang lại luôn giải quyết được những bài toán cấp bách trong lĩnh vực Đại học.",
            image: require('../../assets/img/home/Chatbot.png'), // Add the appropriate image path
        },
        {
            name: "Nguyễn Quang Thành",
            organization: "PTIT",
            feedback: "Các khóa học về IoT khá chất lượng, nhờ nó mà mình có 1 nền tảng vững chắc về IoT...",
            image: require('../../assets/img/home/Chatbot.png'), // Add the appropriate image path
        }
    ];
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h1>Giới thiệu công ty</h1>
                </div>

                <div className={styles.intro_detail}>
                    <h1>CÔNG TY CỔ PHẦN CÔNG NGHỆ OPENLAB</h1>
                    <p>Được thành lập năm 2024, OpenLAB là một Start-up với mục tiêu trở thành đơn vị cung cấp các dịch vụ AI/IoT giá rẻ cho chuyển đổi số giáo dục hàng đầu tại Việt Nam, với mong muốn xóa khoảng cách trong giáo dục, nâng cao chất lượng thông qua cá nhân hóa quá trình đào tạo, đào tạo mọi lúc mọi nơi, phục vụv đa dạng nhu cầu đào tạo của mọi người trên môi trường số.</p>
                    <p>OpenLAB đã và đang xây dựng, triển khai những giải pháp/sản phẩm toàn diện và thiết thực nhằm nâng cao chất lượng của công tác thí nghiệm thực hành trong các trường Đại học, bao gồm các thiết bị thực hành thông minh AI/IoT, nền tảng thực hành trực tuyến, các khóa thực hành chuyên sâu, và trợ giảng số AI hỗ trợ thực hành trực tuyến 24/7.</p>
                </div>

                <div className={styles.field_active}>
                    <h2>Lĩnh vực hoạt động</h2>
                    <p>OpenLAB cung cấp các nền tảng thực hành số nhằm đáp ứng mục tiêu cá nhân hoá quá trình đào tạo, đào tạo mọi lúc mọi nơi, đào tạo đồng thời quy mô lớn, phục vụ đa dạng nhu cầu đào tạo (đào tạo lại, đào tạo nâng cao, đào tạo suốt đời…)</p>
                    <ol>
                        <li>Phát triển nền tảng thực hành số</li>
                        <li>Phát triển thiết bị thực hành thông minh</li>
                        <li>Phát triển các khóa học thực hành chuyên sâu</li>
                        <li>Phát triển trợ giảng số AI</li>
                    </ol>
                    <h2>Profile OpenLAB</h2>
                    <p><a href="/" target="_blank">Tham khảo Profile - Công ty Cổ phần OpenLAB</a></p>
                </div>

                <div className={styles.giai_phap}>
                    <div className={styles.content_left}>
                        <h2>Các giải pháp tiên phong</h2>
                        <p>Các gói giải pháp được lựa chọn riêng theo từng nhu cầu, quy mô. <br /> Tiêu chuẩn khẳng định vị thế tiên phong của OpenLAB</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Giải pháp phòng Lab thông minh OpenLab</li>
                            <li><i className="fas fa-check"></i> Hệ thống Kit thực hành thông minh OpenKit</li>
                            <li><i className="fas fa-check"></i> Khóa học thực hành chuyên sâu OpenCourse</li>
                            <li><i className="fas fa-check"></i> Giải pháp trợ giảng số AI OpenChat</li>
                        </ul>
                    </div>
                    <div className={styles.img_right}>
                        <span>
                            <img src={require("../../assets/img/about/1.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/2.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/3.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/4.jpg")} alt="about" />
                        </span>
                    </div>
                </div>

                <div className={styles.so_lieu}>
                    <ul>
                        <li>
                            <h3>10+</h3>
                            <p>Năm kinh nghiệm</p>
                        </li>
                        <li>
                            <h3>50+</h3>
                            <p>Khách hàng</p>
                        </li>
                        <li>
                            <h3>20+</h3>
                            <p>Dự án</p>
                        </li>
                    </ul>
                </div>

                <div className={styles.feedbackSection}>
                    <div className={styles.sectionHeading}>
                        <h2>Thông tin phản ánh</h2>
                        <p>Các khách hàng, đối tác nói gì khi làm việc với chúng tôi</p>
                    </div>
                    <div className={styles.feedbackGrid}>
                        {feedbackData.map((feedback, index) => (
                            <div key={index} className={styles.feedbackItem}>
                                <div className={styles.feedbackText}>
                                    <i className="fas fa-quote-left"></i>
                                    <p>{feedback.feedback}</p>
                                </div>
                                <div className={styles.feedbackAuthor}>
                                    <img src={feedback.image} alt={feedback.name} />
                                    <div>
                                        <h4>{feedback.name}</h4>
                                        <p>{feedback.organization}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default About;
