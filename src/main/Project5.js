import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project5.css';
import 'swiper/css/pagination';

export default function Project5({ fullpageApi }) {

    const pro5_slide = ['개요', '개발 스펙', '기능 시연'];


    return(
        <div className="section">

            <div className='slide'>
                <div id="device_body4">
                    <div id="story_box4">
                        <div className="title">
                            <h2>TEAM PROJECT</h2>
                            <img src="img/ticket_logo.png" alt="로고" />
                            <h3>대학로티켓 모바일 팀 프로젝트 작업 (진행중)</h3>
                            <p>프로젝트 리더 : 조소윤 | 기여도 : 25%</p>
                        </div>

                        <div className="concept">
                            <h3>CONCEPT</h3>
                            <p>대학로 공연 예매 서비스를 모바일 환경에 최적화하여 쉽고 빠른 예매 경험을 제공하는 것을 목표로 하였습니다.</p>
                        </div>

                        <div className="skill">
                            <h3>SKILL</h3>
                            <div>
                                <img src="img/ps.png" alt="photoshop"/>
                                <img src="img/ai.png" alt="illust"/>
                                <img src="img/figma.png" alt="figma"/>
                                <img src="img/react.png" alt="html"/>
                                <img src="img/js.png" alt="js"/>
                                <img src="img/github.png" alt="github"/>
                                <img src="img/vercel.png" alt="vercel"/>
                            </div>
                        </div>

                        <div className="link_in">
                            <a href="https://www.xn--vk1br5hppx9qddtd.com/main.do"><i className="xi-external-link"></i>기존 홈페이지</a>
                        </div>

                    </div>

                    <div id="device_box4">
                        <div className="device4">
                            <iframe src="https://team-third.vercel.app/?mode=mobile" frameBorder="0" title="모바일"></iframe>
                            <div><p>9 : 24</p></div>
                            <div>
                                <i className="xi-signal-4"></i>
                                <i className="xi-wifi"></i>
                                <i className="xi-battery-90"></i>
                            </div>
                            <div className="l_button"></div>
                            <div className="l_button"></div>
                            <div className="l_button"></div>
                            <div className="r_button"></div>

                            <button onClick={() => fullpageApi?.moveSlideRight()}><i className='xi-angle-right-thin'></i>기획서 보기</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='slide'>
                
                <div className="swiper-container">
                    <button onClick={() => fullpageApi?.moveSlideLeft()} className='back_pro1'><i className='xi-angle-left-thin'></i>표지로<br/>돌아가기</button>
                    <div className="project5_pagenation"></div>
                    <Swiper modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        el: '.project5_pagenation',
                        renderBullet: function (index, className) {
                            return `<button class="${className} nested-sub-btn">${pro5_slide[index]}</button>`;
                        },
                        }}
                        className="pro5_slide"
                        style={{ width: '100%', height: '100%' }}>
                        <SwiperSlide>
                            <div className='project_page5'>
                                <h3>피그마 디자인</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                        <SwiperSlide>3</SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}