import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import '../css/project1.css';
import 'swiper/css/pagination';

export default function Project4({ fullpageApi }) {

    const pro4_slide = ['1', '2', '3', '4', '5'];


    return(
        <div className="section">
            <div className='class_wrap'>
                <div className="swiper-container">
                    <div className="project4_pagenation"></div>
                    <Swiper modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                        clickable: true,
                        el: '.project4_pagenation',
                        renderBullet: function (index, className) {
                            return `<button class="${className} nested-sub-btn">${pro4_slide[index]}</button>`;
                        },
                        }}
                        className="pro4_slide"
                        style={{ width: '100%', height: '100%' }}>
                        <SwiperSlide>
                            <div className='project_page1'>
                                <h3>피그마 디자인</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>2</SwiperSlide>
                        <SwiperSlide>3</SwiperSlide>
                        <SwiperSlide>4</SwiperSlide>
                        <SwiperSlide>5</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}