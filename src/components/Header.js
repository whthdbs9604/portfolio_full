import { Link } from "react-router-dom";


export default function Header() {
      return (
                <header>
                    <h1><Link to="/" className="header_link"><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고이미지" /></Link></h1>
                    <div>
                        <a href="#home">홈</a>
                        <a href="#project1">플레이스테이션</a>
                        <a href="#project2">블랑네이쳐</a>
                        <a href="#project3">아식스</a>
                        <a href="#project5">대학로티켓</a>
                        <a href="#project4">강의</a>
                    </div>
                </header>
      )
}