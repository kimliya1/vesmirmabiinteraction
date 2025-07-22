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
        "기본/리레보다 어둡고 다크브라운레드보다는 밝은 레드는 없는걸까...",
        "기본/월석도 치워야하는데, 귀찮지. 재료도 비싸고."
    ];

    let keyRumor = [
        "먼눈/소문이라, 그런 쪽에는 어두워서 떠오르는게 없네."
    ];

    let keySkill = [
        "기본/격투술은 어렵지.<br>정해진대로 움직여야하니까, 별로 좋아하진 않아.",
        "기본/역시 제일 좋아하는 건 검술이나 ",
    ];

    let keyParttime = [
        "기본/잡화점 아르바이트로 쌓아둔 낚시통이 많아.<br>언제쯤 다 쓸 수 있으려나."
    ];

    let keyClass=[
        "기본/하나는 숙달한다는 건 어려운 일이지."
    ];

    /* 중급 회화 */
    let keySchool = [
        "기본/학교를 다녀보고 싶다는 생각은 해본 적은 있어./책을 보거나 직접 배우기만 했으니까."
    ];

    /* 고급 회화 */
    let keyTirNaNog=[
        "기본/낙원... 듣기 좋은 말이야."
    ];

    /* 정보 메모 */
    let keyPresentforNao = [
        "기본/나오에게 옷을 많이 줬는데 늘 같은 옷만 입더라고./역시 죽어봐야하나..."
    ];

    let keyAlltur = [
        "미소/귀여운 애지./쿠키를 주길래 아껴놨는데 저번에 식겁하더니 새로 만들어준다더라고."
    ];

    /* 리스트 미지정 */
    let defaultList = [
        "기본/잘 모르겠네.",
        "먼눈/관심 없는 주제야.",
        "눈감/..."
    ];

    switch(loglist){
        /* 초급 회화 */
        case 'keyTalk': return keyTalk; // 개인적인 이야기
        case 'keyRumor': return keyRumor; // 근처의 소문
        case 'keySkill': return keySkill; // 스킬에 대하여
        case 'keyParttime': return keyParttime; // 아르바이트에 대하여
        case 'keyClass': return keyClass; // 수업과 수련에 대하여
        /* 중급 회화 */
        case 'keySchool': return keySchool; // 학교
        /* 고급 회화 */
        case 'keyTirNaNog': return keyTirNaNog; // 티르 나 노이
        /* 정보 메모 */
        case 'keyPresentforNao': return keyPresentforNao; // 나오에게 선물
        case 'keyAlltur': return keyAlltur; // 알터
        /* 리스트 미지정 */
        default: return defaultList; // 그 외 (없는 키워드)
    }
}