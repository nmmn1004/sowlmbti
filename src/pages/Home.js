import '../style/home.css';
import { Link } from "react-router-dom";
import HomeImg from "../img/homeImage.png";
export default function Home() {
    return (
        <div className='homeContainer'>
            {/* <div className='homeTitle'>
                부엉이 성격유형검사
            </div> */}
            <picture className="homeRandomImage">
                <img className='homeImage' src={HomeImg}></img>
            </picture>
            <Link className='homeLink' to="/selection">시작하기</Link>
        </div>
    );
}