import React, { useState } from "react";
import '../style/selection.css';
import selectionData from '../component/seletionData';
import { useNavigate } from 'react-router-dom';

export default function Selection() {
    const navigate = useNavigate();
    const [phase, setPhase] = useState(0);
    const [selectionList, setSelectList] = useState(selectionData);

    function clickOption(answer) {
        if(phase >= 1)
        navigate('/result', { state: { selectionList } });
        else{
            selectionList[phase] = { ...selectionList[phase], isPos: answer };
            setPhase(phase => phase + 1);
        }
    }
    // console.log(selectList[0]);
    // selectList[0] = {...selectList[0], isPos: true};
    // 이렇게는 왜 안됨?????
    // setSelectList((prev[0]) => {...prev[0], isPos: true});
    // console.log(selectList[0]);
    console.log(selectionList);
    console.log(phase)
    return (
        <div className="selectionContainer">
            <header className="selectionText">
                {selectionList[phase].text}
            </header>
            <main className="selectionMain">
                <img className="selectionImg" src={selectionList[phase].imageURL} alt=""/>
                <button className="optionButton" onClick={() => clickOption(true)}>{selectionList[phase].optText1}</button>
                <button className="optionButton" onClick={() => clickOption(false)}>{selectionList[phase].optText2}</button>
            </main>
        </div>
    );
}