import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project1.css';
import 'swiper/css/pagination';

export default function Project1({ fullpageApi }) {

    const pro1_slide = ['UX/기획', '핵심 기능', 'UIUX'];


    return(
        <div className="section">

            <div className='slide'>
                <div id="device_body">
                    <div id="story_box">
                        <div className="title">
                            <h2>MOBILE RENEWAL PROJECT</h2>
                            <img src="img/logo_blue.svg" alt="로고" />
                            <h3>플레이스테이션 모바일 웹 프로젝트 작업 (진행중)</h3>
                        </div>

                        <div className="concept">
                            <h3>CONCEPT</h3>
                            <p>플레이스테이션은 게임 기기를 주력으로 독점 게임을 함께 제공하는 플랫폼으로 한 홈페이지에 여러 컨텐츠가 있어 깔끔하고 간편한 이용감으로 사용자가 유용하게 사용하는 것에 집중하여 디자인했습니다.</p>
                        </div>

                        <div className="skill">
                            <h3>TOOL</h3>
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
                                <div>
                                    <div className='play_pic'>
                                        <img src="img/playstation.png" alt="playstation"/>
                                    </div>
                                    <div className='play_ex'>
                                        <div>
                                            <h3>UX / 기획</h3>
                                            <p> 왼쪽의 기존 플레이스테이션 사이트는 반응형 사이트로 PC버젼에서는 크게 문제가 없어보이나 모바일 화면으로 크기를 줄이면 PC버젼에서 쓰이는 레이아웃을 가감없이 사이즈만 줄여 모바일에서 특히 사용하기 불편한 단점이 있습니다.</p>
                                            <p>
                                                플레이스토어는 게임기기 제작에 특화된 브랜드로 독점 게임, 멤버십, 게임 스토어 등 한 사이트에 많은 컨텐츠를 가졌으나 그 순서가 고르지 못하고 중복된 글이 많아 복잡함이 늘어 모바일을 가장 많이 사용하는 최근의 소비자의 입장에서 바라는 빠르고 직관적인 UXUI에 많이 뒤쳐진다고 생각했습니다.
                                            </p>
                                            <p>
                                                그러므로 브랜드의 색채는 죽이지 않으면서 여러 콘텐츠를 소비자가 이용하기 간단하고 직관적으로 확인하기 쉬운 모바일 디자인으로 사이트를 개편하고자 했습니다. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
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