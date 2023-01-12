


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// 네비게이션에게 이벤트를 건다.
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.



const navigation = getNode('.navigation');
// const list = getNodes('.navigation > li');


function makeArray(arrayLike){
  return Array.from(arrayLike)
}


// 내가 선택한 li에게 is-active 클래스를 넣어주세요

// 내가 선택하지 않은(모든 li) li에게 is-active 클래스를 제거해주세요

function handler(e){

  let target = e.target.closest('li');
  let list = makeArray(navigation.children);

  if(!target) return;

  // Array.from(list)
  // let arr = [...list]
  // Arraty.prototype.slice.call(list)
  
  
  list.forEach(item=>removeClass(item,'is-active'))

  // for(let i = 0; i < navigation.children.length)

  addClass(target,'is-active');

}


navigation.addEventListener('click',handler);
















