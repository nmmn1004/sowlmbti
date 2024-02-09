import React from "react";
import { useLocation } from "react-router";

export default function Result() {
    const { state } = useLocation();

    // Check if state exists and log it for debugging
    console.log("State:", state);

    // Access selectionList from the state object
    const selectionList = state && state.selectionList;

    let e = 0;
    let n = 0;
    if(selectionList[0].isPos){
        e++;
    }
    if(selectionList[1].isPos){
        n++;
    }
    return (
        <div>
            <h1>Result Page</h1>
        </div>
    );
}