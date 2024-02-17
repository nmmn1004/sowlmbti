import '../style/home.css';
import { Link } from "react-router-dom";
import LogoTitle from '../img/sowlMbti.svg';

export default function Home() {
    const mbti = ((Math.floor(Math.random() * 10 + 1) > 5) ? "e" : "i") + ((Math.floor(Math.random() * 10 + 1) > 5) ? "n" : "s") + ((Math.floor(Math.random() * 10 + 1) > 5) ? "f" : "t") + ((Math.floor(Math.random() * 10 + 1) > 5) ? "p" : "j");
    return (
        <div className='homeContainer'>
            <header>
                <img src={LogoTitle} alt='logoTitle' className='mainHeader'></img>
            </header>
            {/* <div className='homeTitle'>
                부엉이 성격유형검사
            </div> */}
            <picture className="homeRandomImage">
                <img className='homeImage' src={require(`../img/mbtiImg/${mbti}.png`)} alt='homeImage'></img>
            </picture>
            <Link className='homeLink' to="/selection">시작하기</Link>
        </div>
    );
}