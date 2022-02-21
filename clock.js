const clock = document.querySelector("h2#clock")
const h2 = document.querySelector("h2")
const qouto = document.querySelector("#qouto span:first-child");

function sayHello() {
    console.log("hello");
}


setInterval(getClock, 1000)

function getClock(){
const date = new Date();

const sec = String(date.getSeconds()).padStart(2,"0")
const hours = String(date.getHours()).padStart(2,"0")
const min = String(date.getMinutes()).padStart(2,"0")
clock.innerText = `시간 ${hours}시${min}분${sec}초`

}
//console.log(new Date().getSeconds)

const API_URL = "https://api.adviceslip.com/advice";

init()

function init(){ //api 연동 코드
    const res = fetch(API_URL)
        .then(res => res.json())
        .then((data) => {
            const advice = document.createElement("div");
            advice.textContent = data.slip.advice;
            //console.dir(data)
            qouto.appendChild(advice);
            //console.log(qouto.appendChild(advice));
        })

        .catch(error => console.log("fetch 에러"));
};




























// function init(){
//     const res = fetch(API_URL)
//         .then(res => {return res.json() })
//         .then((data) => 
//         console.log(data))
        

// };

    //인자가 한개인 경우 중괄호를 생략할 수 있다.

    
    // let getQuoto = () => {
    //     fetch(API_URL) //Api 사용
    //     .then((data) => data.json()) //응답을 넘겨 받고 그 응답을 제이슨을 변환한갑을 넘겨온 값을 아이템으로 넘겨받고 
    //     .then((item) => {
    //         console.log(item)
    //     });
        
    // };
    
    // console.log(getQuoto());