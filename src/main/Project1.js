import '../css/project1.css';

export default function Project1({ fullpageApi }) {
    return(
        <div className="section">
            
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

                    <div className="style_guide">

                        <h3>STYLE GUIDE</h3>

                        <div className="color">
                            <h4>COLOR</h4>
                            <p>Primary<br />color <span>#0070CC</span></p>
                            <p>Secondary<br />color <span>#404040</span></p>
                        </div>

                        <div className="font">
                            <h4>FONT</h4>

                            <div className="pretendard">
                                <h4>프리텐다드 Pretendard</h4>
                                <div>
                                    <p>Aa<span>Normal</span></p>
                                    <p>Aa<span>Medium</span></p>
                                    <p>Aa<span>Bold</span></p>
                                </div>
                                
                            </div>

                            
                        </div>
                        
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
                        <a href="https://www.playstation.com/ko-kr/"><i className="fa-solid fa-arrow-up-right-from-square"></i>기존 홈페이지</a>
                    </div>

                </div>

                <div id="device_box">
                    <div className="device">
                        <iframe src="https://whthdbs9604.dothome.co.kr/mobile_jsy/mobile_jsy.html?mode=mobile" frameBorder="0" title="모바일"></iframe>
                        <div><p>9 : 24</p></div>
                        <div>
                            <i className="fa-solid fa-signal"></i>
                            <i className="fa-solid fa-wifi"></i>
                            <i className="fa-solid fa-battery-full"></i>
                        </div>
                        <div className="l_button"></div>
                        <div className="l_button"></div>
                        <div className="l_button"></div>
                        <div className="r_button"></div>
                    </div>
                    
                    
                    
                </div>
            </div>
            

        </div>
    )
}