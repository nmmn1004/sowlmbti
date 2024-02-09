import '../style/home.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='homeContainer'>
            {/* <div className='homeTitle'>
                부엉이 성격유형검사
            </div> */}
            <div className="homeRandomImage">
            </div>
            <Link className='homeLink' to="/selection">시작하기</Link>
        </div>
    );
}