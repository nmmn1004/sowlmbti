import React from "react";
import { useLocation } from "react-router";
import { useParams } from 'react-router-dom';


export default function Result() {
    const { state } = useLocation();
    const mbti = useParams().mbti;
    const selectionList = state && state.selectionList;
    return (
        <div>
            <h1>Result Page</h1>
            <h4>{mbti}</h4>
        </div>
    );
}