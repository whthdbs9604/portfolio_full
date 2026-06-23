import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project1.css';
import 'swiper/css/pagination';

export default function Project1({ fullpageApi }) {

    const pro1_slide = ['개요', '개발 스펙', '기능 시연'];


    return(
        <div className="section">

            <div className='slide'>
                <div id="device_body">
                    <div id="story_box">
                        <div className="title">
                            <h2>MOBILE RENEWAL PROJECT</h2>
                            <img src="img/logo_blue.svg" alt="로고" />
                            <h3>플레이스테이션 모바일 웹 프로젝트 작업 (진행중)</h3>
                            <p>프로젝트 진행자 : 조소윤</p>
                        </div>

                        <div className="concept">
                            <h3>CONCEPT</h3>
                            <p>플레이스테이션은 게임 기기를 주력으로 독점 게임을 함께 제공하는 플랫폼으로 한 홈페이지에 여러 컨텐츠가 있어 깔끔하고 간편한 이용감으로 사용자가 유용하게 사용하는 것에 집중하여 디자인했습니다.</p>
                        </div>

                        <div className="skill">
                            <h3>SKILL</h3>
                            <div>
                                <img src="img/ps.png" alt="photoshop"/>
                                <img src="img/ai.png" alt="illust"/>
                                <img src="img/figma.png" alt="figma"/>
                                <img src="img/html.png" alt="html"/>
                                <img src="img/css.png" alt="css"/>
                                <img src="img/js.png" alt="js"/>
                                <img src="img/jq.png" alt="jquery"/>
                            </div>
                        </div>

                        <div className="link_in">
                            <a href="https://www.playstation.com/ko-kr/"><i className="xi-external-link"></i>기존 홈페이지</a>
                        </div>

                    </div>

                    <div id="device_box">
                        <div className="device">
                            <iframe src="https://whthdbs9604.dothome.co.kr/mobile_jsy/mobile_jsy.html?mode=mobile" frameBorder="0" title="모바일"></iframe>
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
                    <div className="project1_pagenation"></div>
                    <Swiper modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        el: '.project1_pagenation',
                        renderBullet: function (index, className) {
                            return `<button class="${className} nested-sub-btn">${pro1_slide[index]}</button>`;
                        },
                        }}
                        className="pro1_slide"
                        style={{ width: '100%', height: '100%' }}>
                        <SwiperSlide>
                            <div className='project_page1'>
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