export default function Home({ fullpageApi }) {
    return(
        <div className="section">
            <div className="circle_wrap">
                <div className="circle"><p>Portfolio</p></div>
                <p><span>퍼즐</span>을 풀어나가는 즐거움을 <span>코딩</span>으로</p>

                <div className="icon_img">
                    <img src="img/ps.png" alt="photoshop"/>
                    <img src="img/ai.png" alt="illust"/>
                    <img src="img/figma.png" alt="figma"/>
                    <img src="img/html.png" alt="html"/>
                    <img src="img/css.png" alt="css"/>
                    <img src="img/js.png" alt="js"/>
                    <img src="img/jq.png" alt="jquery"/>
                    <img src="img/php.png" alt="php"/>
                    <img src="img/react.png" alt="html"/>
                    <img src="img/github.png" alt="vercel"/>
                    <img src="img/vercel.png" alt="vercel"/>
                    <img src="img/firebase.png" alt="vercel"/>
                </div>
            </div>
            <div className="home_scroll">
                <p>SCROLL</p>
                <i className="xi-angle-down-thin"></i>
            </div>
        </div>
    )
}