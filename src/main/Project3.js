import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project3.css';
import 'swiper/css/pagination';

export default function Project3({ fullpageApi }) {

    const pro3_slide = ['1', '2', '3'];


    return(
        <div className="section">

            <div className='slide'>
                <div id="device_body3">
                    <div id="story_box3">
                        <div className="title">
                            <h2>SITE RENEWAL PROJECT</h2>
                            <img src="img/asics_logo.svg" alt="로고" />
                            <div>
                                <h3>아식스 웹 프로젝트 작업 (진행중)</h3>
                                <p>프로젝트 진행자 : 조소윤</p>
                            </div>
                        </div>

                        <div className="concept">
                            <h3>CONCEPT</h3>
                            <p>아식스는 스포츠 브랜드임에도 불구하고 같은 슬라이드의 반복 사용으로 지루한 느낌이 드는 기존 사이트를 감성을 살린 리액트 사이트로 리뉴얼했습니다.</p>
                        </div>

                        <div className="skill">
                            <h3>SKILL</h3>
                            <div>
                                <img src="img/ps.png" alt="photoshop"/>
                                <img src="img/ai.png" alt="illust"/>
                                <img src="img/figma.png" alt="figma"/>
                                <img src="img/react.png" alt="html"/>
                                <img src="img/js.png" alt="js"/>
                                <img src="img/github.png" alt="vercel"/>
                                <img src="img/vercel.png" alt="vercel"/>
                            </div>
                        </div>
                        <button className='pro3_next' onClick={() => fullpageApi?.moveSlideRight()}><i className='xi-angle-right-thin'></i>기획서 보기</button>
                    </div>

                    <div id="device_box3">
                        <span><i className='xi-touch'></i>홈페이지 바로가기</span>
                        <p>*아래는 예시 이미지 입니다.</p>
                        <div className="device3">
                            <a href="https://react-asics.vercel.app/"><img src="img/asics_pic.png" alt='아식스디자인' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='slide'>
                
                <div className="swiper-container">
                    <button onClick={() => fullpageApi?.moveSlideLeft()} className='back_pro1'><i className='xi-angle-left-thin'></i>표지로<br/>돌아가기</button>
                    <div className="project3_pagenation"></div>
                    <Swiper modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        el: '.project3_pagenation',
                        renderBullet: function (index, className) {
                            return `<button class="${className} nested-sub-btn">${pro3_slide[index]}</button>`;
                        },
                        }}
                        className="pro3_slide"
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