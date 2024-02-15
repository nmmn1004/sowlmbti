import select0 from '../img/selectionImg/select0.png';
import select1 from '../img/selectionImg/select1.png';
import select2 from '../img/selectionImg/select2.png';
import select3 from '../img/selectionImg/select3.png';
import select4 from '../img/selectionImg/select4.png';
import select5 from '../img/selectionImg/select5.png';
import select6 from '../img/selectionImg/select6.png';
import select7 from '../img/selectionImg/select7.png';
import select8 from '../img/selectionImg/select8.png';
import select9 from '../img/selectionImg/select9.png';
import select10 from '../img/selectionImg/select10.png';
import select11 from '../img/selectionImg/select11.png';

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
        text: "동아리에서 진행한 프로젝트가 우수한 성적을 거두었다!",
        imageURL: select2,
        optText1: "기획도 잘하고 개발도 잘한 것 같아요!",
        optText2: "사업 아이템으로 확장시킬 수 있지 않을까요?",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // P인지 판별
        text: "프로젝트를 하는 도중 팀원이 아이디어를 제시했다.",
        imageURL: select3,
        optText1: "오 그럼 그거 한 번 해볼까요?",
        optText2: "그래도 지금 하고 있는 게 있으니까 마무리 하고 얘기 나눠봐요.",
        // 선택지 1번을 택하면 true값
        isPos: true
    },

    {
        // E인지 판별
        text: "듣고 싶은 인프런 강의를 발견했다! 운영진에게 말해야 하는데...",
        imageURL: select4,
        optText1: "(운영진에게 강의 링크를 보내며) 이거 사주세요!",
        optText2: "(친해진 사람에게 보내며) 이 강의 사달라고 하는 거 어떨까..?",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // N인지 판별
        text: "동아리에서 진행하는 세미나에 참석했다. 선배님이 프로젝트를 설명하고 있는데",
        imageURL: select5,
        optText1: "나도 저런 프로젝트 만들 수 있겠지?!",
        optText2: "잘 만든 것 같다. 기능이 마음에 들어.",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // F인지 판별
        text: "세미나가 끝나고 회식을 갔다. 유독 많이 취해보이는 사람이 있는데",
        imageURL: select6,
        optText1: "괜찮으세요? 힘드시면 쉬어도 돼요.",
        optText2: "이거 물 마시고 바람 쐬고 오세요.",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // P인지 판별
        text: "회식이 끝나고 예정에 없던 2차를 간다고 한다...",
        imageURL: select7,
        optText1: "저도 갈래요~! 다음엔 뭐 먹으러 갈까요?",
        optText2: "앗 저는 일정이 있어서 가볼게요!",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    
    {
        // E인지 판별
        text: "동아리에서 MT를 갔다. 숙소에 노래방 기계가 있는데...",
        imageURL: select8,
        optText1: "(마이크를 치켜들며)한 곡 뽑겠습니다!",
        optText2: "(시끄러울 수 있으니 그냥 둬야지..)",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // N인지 판별
        text: "부원 끼리 숙소에서 수다를 나누다 밸런스 게임을 하기 시작했다.",
        imageURL: select9,
        optText1: "(상황에 몰입하며) 저라면 이렇게 할 것 같아요!",
        optText2: "(애초에 일어날 일이 없는데..) 저는 이쪽...?",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // F인지 판별
        text: "저녁을 먹으며 술을 마시는데 부원이 자신의 슬픈 이야기를 꺼냈다.",
        imageURL: select10,
        optText1: "너무 슬퍼요 다음엔 그런 일 없었으면 좋겠네요 ㅠㅠ",
        optText2: "아 그럴 땐 이렇게 했으면 좋았을 텐데 아쉽네요 ㅠㅠ",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    {
        // P인지 판별
        text: "저녁을 먹다가 배가 차자 사람들이 숙소 근처를 둘러보러 간다고 한다.",
        imageURL: select11,
        optText1: "여름에 담력시험으로 시원해지고 좋겠네요! 소화 시킬 겸 같이 가요!",
        optText2: "저는 마저 먹고 숙소에 들어가 있을게요!",
        // 선택지 1번을 택하면 true값
        isPos: true
    },
    
];

export default selectionList;