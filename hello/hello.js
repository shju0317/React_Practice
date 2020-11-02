console.log("웅", "안뇽");
console.log("2008 + 525 = ", 2008 + 525);

var num1;
let num2;
const num3 = 525;

num1 = 718;
num2 = 923;
//num3 = 408;

const myfunc = function (num) {
  console.log(num);
};

myfunc(1000);

const callfunc = function (call) {
  call(2000);
};

// facade 패턴
// 함수를 다른 함수의 매개변수로 전달하여
// 함수 내부에서 실행하도록 하는 패턴
callfunc(myfunc);

// 변수: 1개의 값을 저장하는 공간
// 배열, JSON객체: 1개 이상의 값을 저장하고 활용하는 메모리 구조형

// 배열 선언하기
// 배열은 같은 종류의 데이터들을 저장할 때 주로 사용한다.
// 다른 type(숫자, 문자열)의 데이터를 저장할 수 있지만
// 일반적으로 그렇게 사용하지 않는다.
let 이름 = ["홍길동", "이몽룡", "성춘향"];
console.log(이름[0]);

// JSON 객체
// key:value 쌍으로 이루어진 종류가 다른 데이터들을 저장할 때 사용한다
// 다수의 데이터를 저장하는 용도로 아주 많이 사용하는 타입이다.
let car = { 이름: "그랜져", 엔진: "알파" };
console.log(car["이름"]);

// 이름 배열에 '장보고' 데이터를 추가하고 싶으면?
// case1: 전통적인 방법
이름.push("장보고");

// case2
이름 = [...이름, "장영실"];

// JSON객체의 어떤 요소 값을 바꾸고 싶으면?
// case1: 전통적인 방법
car["엔진"] = "베타";

// case2
car = { ...car, 엔진: "베타" };
car = { ...car, 색: "다크그레이" };
console.log(car);
