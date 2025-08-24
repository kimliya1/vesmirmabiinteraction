/*대화 시작 함수*/
function startDialog(){
    document.getElementById('name').style.display = 'block';
    document.getElementById('logStart').style.display = 'none';
    document.getElementById('logContinue').style.display = 'inline-block';
    document.getElementById('logEnd').style.display = 'none';
    document.getElementById('dialogue').innerText = "무슨 볼일이라도?";

    document.getElementById('logContinue').onclick = function () {
        document.getElementById('name').style.display = 'none';
        document.getElementById('keywordBox').style.display = 'block';
        document.getElementById('logEnd').style.display = 'inline-block';
        document.getElementById('logContinue').style.display = 'none';
        document.getElementById('dialogue').innerText = "(밀레시안이 당신을 바라보고 있다.)";
    };
}

function endDialog() {
    location.reload(true);
}


/* 표정 불러오기 */
function changeFace(faceName){
    var faceSrc = "";

    if(faceName == "기본"){
        faceSrc = "./StandingCG/Milletian.png";
    } else if (faceName == "미소"){
        faceSrc = "./StandingCG/Milletian-smile.png";
    } else if (faceName == "분노"){
        faceSrc = "./StandingCG/Milletian-anger.png";
    } else if (faceName == "놀람"){
        faceSrc = "./StandingCG/Milletian-surprise.png";
    } else if (faceName == "눈감"){
        faceSrc = "./StandingCG/Milletian-close.png";
    } else if (faceName == "먼눈"){
        faceSrc = "./StandingCG/Milletian-out.png";
    }

    document.getElementById('portrait').src = faceSrc;
}

/* 대사 저장 밑 불러오기 */
function dialogList(loglist){
    /*  대사 작성법
        첫번째는 무조건 표정이름
        대사는 최대 3번 나눌 수 있음. 그 이상은 잘림.(script.js 파일 내의 printdialog 함수 수정하면 가능)
        <br>로 줄넘김 가능.   

        예시 : 표정/대사1/대사2/대사3
    */

    /* 초급 회화 */
    let keyTalk =[
        "먼눈/리레보다 어둡고 다크브라운레드보다는 밝은 레드는 없는걸까...",
        "기본/월석도 치워야하는데, 귀찮지. 재료도 비싸고."
    ];

    let keyRumor = [
        "먼눈/소문이라, 그런 쪽에는 어두워서 떠오르는게 없네."
    ];

    let keySkill = [
        "기본/격투술은 어렵지.<br>정해진대로 움직여야하니까, 별로 좋아하진 않아.",
        "기본/역시 제일 좋아하는 건 검술이나 창술일까./마법도 편하긴 하지만 직접 움직이는 편이 좋아.",
    ];

    let keyParttime = [
        "기본/아르바이트를 열 수 있다면... 뭘 여는 게 좋을려나. 허브 채집?"
    ];

    let keyClass=[
        "기본/하나는 숙달한다는 건 어려운 일이지."
    ];

    /* 중급 회화 */
    let keyGeneralstore = [
        "기본/잡화점 아르바이트로 쌓아둔 낚시통이 많아.<br>언제쯤 다 쓸 수 있으려나."
    ];

    let keySchool = [
        "기본/학교를 다녀보고 싶다는 생각은 해본 적은 있어./책을 보거나 직접 배우기만 했으니까."
    ];

    let keyFishingSkill = [
        "기본/낚시통이 조금 더 컸으면 좋겠네.",
        "기본/청새치를 낚은지 한참 지나서 마놀린이 괜찮을지 걱정되긴 해.",
    ];

    /* 고급 회화 */
    let keyTirNaNog=[
        "기본/낙원... 듣기 좋은 말이야."
    ];

    /* 정보 메모 */
    let keyTearsoftheSpirit = [
        "기본/진짜 눈물이 아니라는 건 알지만 그래도 미안하다고 생각해.",
        "먼눈/하루에 하나는 좀... 아니야.",
    ];

    let keyspiritEskel = [
        "기본/에스켈은 상냥한 정령이야. 여태 못 챙겨준게 걸리네.", 
        "기본/에스켈은 내 첫번째 정령이라 그런지 여기저기 자주 옮겨다녔지./한손 검이였다가 체인에 들어갔기도 했고... 낫에서 지금은 랜스로 들어왔어.", 
    ];

    let keyspiritBerengar = [
        "기본/가장 친한 정령은 베렌가겠지. 한동안 듀얼건을 엄청 썼으니까./요즘엔 랜스를 쓰니까 잘 못 챙겨주긴 했어."
    ];

    let keyspiritGeralt = [
        "기본/가장 편한 정령하면 역시 게롤트일까./제일 조용하니까, 조금 어색하긴 하지만."
    ];
    
    let keyspiritIrey = [
        "미소/친절하고 귀여운 정령이지./말을 걸 때마다 무언가 알려주려고 해서 꽤 즐겁게 듣고 있고."
    ];

    let keyspiritLeo = [
        "기본/가끔 혼자 너무 동떨어진 이름을 지어준걸까하는 고민이 드네. 별로 신경쓰는 거 같진 않지만./안 쓰는 거 맞겠지?"
    ];

    let keyspiritMilva = [
        "기본/에스켈이랑 같은 보석을 좋아해서 고민이였던 때도 있는데.... 지금은 많이 생겨서 괜찮아졌어."
    ];
    
    let keyDarkknight = [
        "기본/별로 좋은 기억은 없지만... 이해는 해."
    ];

    let keyPresentforNao = [
        "기본/나오에게 옷을 많이 줬는데 늘 같은 옷만 입더라고./역시 죽어봐야하나...",
        "먼눈/나오가 좋아할만한 선물이 없을까..."
    ];

    let keyAlltur = [
        "미소/귀여운 애지./쿠키를 주길래 아껴놨는데 저번에 식겁하더니 새로 만들어준다더라고."
    ];

    let keyAveline = [
        "미소/뭔가... 따르게 된단 말이지. 좋은 사람이야."
    ];

    let keyTorvish = [
        "기본/별로 마음에 드는 사람은 아니야./가끔... 짜증나긴 해."
    ];

    let keyLlywelyn = [
        "기본/아직 어떤 사람인지 잘 모르겠어."
    ];
    
    let keyRuairi = [
        "눈감/...별로 이야기하고 싶지않네.",
        "기본/짜증나는 녀석이야.",
    ];

    /* 리스트 미지정 */
    let defaultList = [
        "기본/잘 모르겠네.",
        "먼눈/관심 없는 주제야.",
        "눈감/..."
    ];

    /*
    let key = [
        ""
    ];
     */

    switch(loglist){
        /* 초급 회화 */
        case 'keyTalk': return keyTalk; // 개인적인 이야기
        case 'keyRumor': return keyRumor; // 근처의 소문
        case 'keySkill': return keySkill; // 스킬에 대하여
        case 'keyParttime': return keyParttime; // 아르바이트에 대하여
        case 'keyClass': return keyClass; // 수업과 수련에 대하여
        /* 중급 회화 */
        case 'keyGeneralstore': return keyGeneralstore; // 잡화점
        case 'keySchool': return keySchool; // 학교
        case 'keyFishingSkill': return keyFishingSkill; // 낚시 스킬
        /* 고급 회화 */
        case 'keyTirNaNog': return keyTirNaNog; // 티르 나 노이
        /* 정보 메모 */
        case 'keyTearsoftheSpirit' : return keyTearsoftheSpirit // 정령의 눈물
        case 'keyspiritEskel' : return keyspiritEskel; // 에스켈
        case 'keyspiritBerengar' : return keyspiritBerengar; // 베렌가
        case 'keyspiritGeralt' : return keyspiritGeralt; // 게롤트
        case 'keyspiritIrey' : return keyspiritIrey; // 아이리
        case 'keyspiritLeo' : return keyspiritLeo; // 레오
        case 'keyspiritMilva' : return keyspiritMilva; // 밀바
        case 'keyDarkknight' : return keyDarkknight; // 다크나이트
        case 'keyPresentforNao': return keyPresentforNao; // 나오에게 선물
        case 'keyAlltur': return keyAlltur; // 알터
        case 'keyAveline': return keyAveline; // 아벨린
        case 'keyTorvish': return keyTorvish; // 톨비쉬
        case 'keyLlywelyn': return keyLlywelyn; // 르웰린
        case 'keyRuairi': return keyRuairi; // 루에리
        /* 리스트 미지정 */
        default: return defaultList; // 그 외 (없는 키워드)
    }
}
