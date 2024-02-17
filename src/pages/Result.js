import React from "react";
import { useLocation } from "react-router";
import { useParams } from 'react-router-dom';

export default function Result() {
    const { state } = useLocation();
    const mbti = useParams().mbti;
    const selectionList = state && state.selectionList;
    console.log(mbti)
    return (
        <div>
            <img
                className="resultImage"
                src={require(`../img/resultImg/${mbti}.png`)}
                alt={mbti}
            />
        </div>
    );
}