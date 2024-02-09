import select0 from '../img/select0.png';
import select1 from '../img/select1.png';

const selectionList = [
    {
        // E인지 판별
        text: "동아리 소울 설명회에 참여했다. 시작이 지연된다고 하는데...",
        imageURL: select0,
        optText1: "(옆자리분께) 혹시 몇학번이신가요?",
        optText2: "(조용히 설명회가 시작될 때까지 기다린다)",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // N인지 판별
        text: "동아리 소울에서 MT, 세미나, 강의 등이 진행된다는데?",
        imageURL: select1,
        optText1: "(벌써부터 기대된다! MT에서 선배님과 친해지고 세미나에서 발표하고 강의도 듣고...)",
        optText2: "(동아리 강의로 미리 배우면 수업에서 이해하기 수월하겠네)",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // N인지 판별
        text: "동아리 소울에서 MT, 세미나, 강의 등이 진행된다는데?",
        imageURL: select1,
        optText1: "(벌써부터 기대된다! MT에서 선배님과 친해지고 세미나에서 발표하고 강의도 듣고...)",
        optText2: "(동아리 강의로 미리 배우면 수업에서 이해하기 수월하겠네)",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
];

export default selectionList;