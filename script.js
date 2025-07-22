/* 페이지 넘김 */
let Nowpage = 1;
let MaxPage = 19;

function handlePageClick(event, direction) {
    // 클릭된 요소가 keywordName 버튼인지 확인
    if (event.target.classList.contains('keywordName')) {
        // keywordName 버튼이 클릭된 경우, 이벤트 전파를 중단하고 해당 버튼의 클릭 이벤트를 실행
        event.stopPropagation();
        printdialog(event.target.id);
        return;
    }
    
    // 페이지 버튼이 클릭된 경우
    if (direction === 'prev') {
        Nowpage--;
        if (Nowpage < 1){
            Nowpage = 1;
        }
    } else if (direction === 'next') {
        Nowpage++;
        if (Nowpage > MaxPage){
            Nowpage = MaxPage;
        }
    }
    
    pageMove(Nowpage);
}

function pageReset() {
    var elements = document.getElementsByClassName("keywordPage");

    for(var i = 0; i < elements.length; ++i){
    elements[i].style.display = "none";
    }
}

function pageMove(pageIndex) {
    pageReset();
    document.querySelector('div[data-page="' + pageIndex + '"]').style.display = "block";
}


/* 회화 변경 */
function changeCon(id){
    // 모든 회화 닫기
    pageReset();

    // 누른 회화만 활성화
    if (id == 'changeBasic'){
        var Conversation = document.getElementById('BasicConversation');

    }else if(id == 'changeMedium'){
        var Conversation = document.getElementById('MediumConversation');

    }else if(id == 'changeHigh'){
        var Conversation = document.getElementById('HighConversation');

    }else if(id == 'changeInfo'){
        var Conversation = document.getElementById('InfoConversation');
        
    }

    Conversation.style.display = 'block';
    Nowpage = Conversation.dataset.page;
    pageMove(Nowpage);
}

/* 대사 출력 */
function printdialog(loglist){
    var list = dialogList(loglist); //dialogList 함수에서 매개변수의 이름인 리스트를 list에 반환받음

    var log = list[Math.floor(Math.random() * list.length)]; // 받은 리스트 중에 하나를 랜덤으로 log에 저장
    var logs = log.split('/'); //log에 저장된 대사를 /를 기준으로 나눠 logs에 저장

    /*표정 교체*/
    var face = logs[0];
    changeFace(face);

    document.getElementById('name').style.display = 'block'; // 이름을 보이게
    document.getElementById('dialogue').innerHTML = logs[1]; //나눈 대사중 첫번째를 출력

    if(logs.length === 3){ //만약 대사가 2개로 나뉘어 있을 때
        //여행수첩, 대화 끝내기를 끄고 계속하기를 킴
        document.getElementById('logContinue').style.display = 'inline-block';
        document.getElementById('logEnd').style.display = 'none';
        document.getElementById('keywordBox').style.display = 'none';

        document.getElementById('logContinue').onclick = function () { //계속하기를 누를 경우
            //나눈 대사 중 두번째를 출력
            document.getElementById('dialogue').innerHTML = logs[2];
            
            //여행수첩, 대화 끝내기를 켜고 계속하기를 끔
            document.getElementById('logContinue').style.display = 'none';
            document.getElementById('logEnd').style.display = 'inline-block';
            document.getElementById('keywordBox').style.display = 'block';
        };
    }
    else if(logs.length === 4){ //만약 대사가 3개로 나뉘어 있을 때
        //여행수첩, 대화 끝내기를 끄고 계속하기를 킴
        document.getElementById('logContinue').style.display = 'inline-block';
        document.getElementById('logEnd').style.display = 'none';
        document.getElementById('keywordBox').style.display = 'none';

        //계속하기를 누를 경우
        document.getElementById('logContinue').onclick = function () {
            //나눈 대사 중 두번째를 출력
            document.getElementById('dialogue').innerHTML = logs[2];

            //계속하기를 누를 경우
            document.getElementById('logContinue').onclick = function () { 
                //나눈 대사 중 세번째를 출력
                document.getElementById('dialogue').innerHTML = logs[3];
                
                //여행수첩, 대화 끝내기를 켜고 계속하기를 끔
                document.getElementById('logContinue').style.display = 'none';
                document.getElementById('logEnd').style.display = 'inline-block';
        document.getElementById('keywordBox').style.display = 'block';
            };
        };
    }
}

/* 여행수첩 옮기는 기능 */
const draggable = ($target) => {
    let isPress = false,
        prevPosX = 0,
        prevPosY = 0;
    
    $target.onmousedown = start;
    $target.onmouseup = end;
        
    // 상위 영역
    window.onmousemove = move;
    
    function start(e) {
        if (e.target.classList.contains('keywordName')) {
            return;
        }

        prevPosX = e.clientX;
        prevPosY = e.clientY;

        isPress = true;
    }

    function move(e) {
        if (!isPress) return;

        const posX = prevPosX - e.clientX; 
        const posY = prevPosY - e.clientY; 
        
        prevPosX = e.clientX; 
        prevPosY = e.clientY;
        
        $target.style.left = ($target.offsetLeft - posX) + "px";
        $target.style.top = ($target.offsetTop - posY) + "px";
    }

    function end() {
        isPress = false;
    }
}
window.onload = () => {
    const $target = document.querySelector("#keywordBox");

    draggable($target);
}

/* 눈 깜빡임 시스템 */
class BlinkController {
    constructor() {
        this.isBlinking = false;
        this.blinkInterval = null;
        this.init();
    }
    
    init() {
        this.startBlinking();
    }
    
    startBlinking() {
        if (this.blinkInterval) {
            clearInterval(this.blinkInterval);
        }
        
        // 랜덤한 간격으로 깜빡임 (2-5초 사이)
        this.blinkInterval = setInterval(() => {
            this.doBlink();
        }, this.getRandomBlinkInterval());
    }
    
    getRandomBlinkInterval() {
        return Math.random() * 3000 + 2000; // 2초~5초
    }
    
    doBlink() {
        if (this.isBlinking) return;
        
        this.isBlinking = true;
        const portrait = document.getElementById('portrait');
        const originalSrc = portrait.src;
        
        // 눈 감기
        setTimeout(() => {
            portrait.src = originalSrc.replace('.png', '2.png');
        }, 0);
        
        // 완전히 감기
        setTimeout(() => {
            portrait.src = originalSrc.replace('.png', '3.png');
        }, 100);
        
        // 눈 뜨기
        setTimeout(() => {
            portrait.src = originalSrc.replace('.png', '2.png');
        }, 200);
        
        // 원래대로
        setTimeout(() => {
            portrait.src = originalSrc;
            this.isBlinking = false;
        }, 300);
    }
    
    stop() {
        if (this.blinkInterval) {
            clearInterval(this.blinkInterval);
            this.blinkInterval = null;
        }
    }
}

// 눈 깜빡임 컨트롤러 초기화
const blinkController = new BlinkController();