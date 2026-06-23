import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project2.css';
import 'swiper/css/pagination';

export default function Project2({ fullpageApi }) {

    const pro2_slide = ['1', '2', '3'];


    return(
        <div className="section">
            <div className='slide'>
                <div id="device_body2">
                    <div id="story_box2">
                        <div className="title">
                            <h2>SITE RENEWAL PROJECT</h2>
                            <img src="img/blanc_logo.png" alt="로고" />
                            <div>
                                <h3>블랑네이처 웹 반응형 프로젝트 작업 (진행중)</h3>
                            </div>
                        </div>

                        <div className="concept">
                            <h3>CONCEPT</h3>
                            <p>블랑네이쳐는 여드름 피부에 특화된 화장품을 판매하는 회사로 피부 회복을 위한 치유감, 신뢰감 그리고 자연이 주는 안정감을 표현하고자 고급스러운 그린 컬러와 깨끗한 느낌을 위해 충분한 여백과 정돈된 레이아웃을 사용했습니다. </p>
                        </div>

                        <div className="skill">
                            <h3>SKILL</h3>
                            <div>
                                <img src="img/ps.png" alt="photoshop"/>
                                <img src="img/ai.png" alt="illust"/>
                                <img src="img/figma.png" alt="figma"/>
                                <img src="img/html.png" alt="html"/>
                                <img src="img/php.png" alt="php"/>
                                <img src="img/css.png" alt="css"/>
                                <img src="img/js.png" alt="js"/>
                                <img src="img/jq.png" alt="jquery"/>
                            </div>
                        </div>
                        <button className='pro2_next' onClick={() => fullpageApi?.moveSlideRight()}><i className='xi-angle-right-thin'></i>기획서 보기</button>
                    </div>

                    <div id="device_box2">
                        <span><i className='xi-touch'></i>홈페이지 바로가기</span>
                        <p>*아래는 미리보기 이미지 입니다.</p>
                        <div className="device2">
                            <a href="https://whthdbs9604.dothome.co.kr/responsive_jsy/responsive_jsy.html"><img src="img/blanc_pic.png" alt='블랑네이처디자인' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='slide'>
                
                <div className="swiper-container">
                    <button onClick={() => fullpageApi?.moveSlideLeft()} className='back_pro1'><i className='xi-angle-left-thin'></i>표지로<br/>돌아가기</button>
                    <div className="project2_pagenation"></div>
                    <Swiper modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        el: '.project2_pagenation',
                        renderBullet: function (index, className) {
                            return `<button class="${className} nested-sub-btn">${pro2_slide[index]}</button>`;
                        },
                        }}
                        className="pro2_slide"
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