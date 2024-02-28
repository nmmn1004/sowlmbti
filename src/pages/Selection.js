import React, { useState } from "react";
import '../style/selection.css';
import selectionData from '../component/seletionData';
import { useNavigate } from 'react-router-dom';
import LogoTitle from '../img/sowlMbti.svg';

export default function Selection() {
    const navigate = useNavigate();
    const [phase, setPhase] = useState(0);
    const [selectionList, setSelectList] = useState(selectionData);
    const [mbtiArr, setMbtiArr] = useState([0, 0, 0, 0])

    function clickOption(answer) {
        if(phase >= selectionList.length - 1){
            mbtiArr[phase % 4] += answer? 1: -1;
            let mbti = "";
            mbti += (mbtiArr[0] > 0)? "e": "i";
            mbti += (mbtiArr[1] > 0)? "n": "s";
            mbti += (mbtiArr[2] > 0)? "f": "t";
            mbti += (mbtiArr[3] > 0)? "p": "j";

            navigate('/result/' + mbti, { state: { selectionList } });
        }
        
        else {
            selectionList[phase] = { ...selectionList[phase], isPos: answer };
            
            mbtiArr[phase % 4] += answer? 1: -1;

            setPhase(phase => phase + 1);
        }
    }
    return (
        <div className="selectionContainer">
            <header>
                <img src={LogoTitle} alt='logoTitle' className='mainHeader'></img>
            </header>
            <div className="selectionText">
                {selectionList[phase].text}
            </div>
            <main className="selectionMain">
                <img className="selectionImg" src={require(`../img/selectionImg/selection${phase}.png`)} alt=""/>
                <button className="optionButton" onClick={() => clickOption(true)}>{selectionList[phase].optText1}</button>
                <button className="optionButton" onClick={() => clickOption(false)}>{selectionList[phase].optText2}</button>
            </main>
        </div>
    );
}