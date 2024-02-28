// 간단한것은 타입스크립트가 추론하게 하는 방법이 좋음. 코드가 짧아짐.
const player = {
  name: "kim",
};

// player.name = 1
// player.hello()

// optional parameter (선택적 변수)
// 객체 안에 옵셔널하게 선택해야할 것이 있다면 ?를 붙여주자
// name은 항상 있지만 , age는 있을 수도 없을 수도 있을때.

const player2: {
  name: string;
  age?: number;
} = {
  name: "kim",
};

if (player2.age && player2.age < 10) {
}

//Alias type (별칭 타입)
//타입 재사용

// 첫 글자는 대문자로
type Player = {
  name: string;
  age?: number;
};

const Kim: Player = {
  name: "Kim",
};

const Lee: Player = {
  name: "Lee",
  age: 12,
};

//이런 방법도 있음
//너무 많은 사용은 좋지않음. 코드가 깔끔해질 때 까지만
//   type Name = string
//   type Age = number
//   type Player ={
//     name : Name,
//     age? : Age
//   }

//   const Kim : Player = {
//     name : "Kim"
//   }

//   const Lee :Player = {
//     name :"Lee",
//     age : 12
//   }

//함수가 return하는 타입 지정해주기

type Name = string;
type Age = number;
type Player3 = {
  name: Name;
  age?: Age;
};

//string 타입으로 name을 받고 Player 타입을 return하는 함수
// function playerMaker(name:string) : Player3 {
//   return {
//     // name:name
//     name
//   }
// }

//화살표 함수
const playerMaker = (name: string): Player3 => ({ name });
const kim = playerMaker("kim");
kim.age = 12;

//readonly 속성 추가 - 수정 불가

// type Name = string
// type Age = number
// type Player ={
//   readonly name : Name,
//   age? : Age
// }

// const playerMaker = (name:string) : Player =>({name})
// const kim = playerMaker("kim")
// kim.age = 12
// kim.name ="lee" -> readonly 속성때문에 에러 남

// const numbers :readonly number[] = [1, 2, 3, 4]
// numbers.push(1) -> readonly 속성때문에 에러 남

// const names : readonly string[] =["1","2"]
// names.push("3") -> readonly 속성때문에 에러 남

//map, filter가능 - array를 바꾸지 않음(immutability-불변성)

//Tuple - array를 생성할 수 있게해줌, 최소한의 길이를 가져야하고, 특정 위치에 특정 타입이 있어야함.

// ["kim" , 12 , false]

// const player :readonly[string, number, boolean] = ["kim" , 12 , false]
//(readonly는 원하면 같이 사용가능)
// player[0] =1 -> string이 와야하기 때문에 에러남.
// player[0] = "hi" -> readonly 속성때문에 에러 남

// let a: undefined = undefined;
// let b :null =null

//any - TypeScript의 보호장치들로부터 빠져나오고 싶을때 , 모든 타입 비활성화

// const a : any[] =[1, 2, 3, 4]
// const b : any = true

// a + b // TypeScrip를 빠져나와서 정상작동함.

//unknown - 변수의 타입을 미리 알지 못할때 사용

// let a:unknown;

// let b = a + 1 -> type이 아직 unknown이라서 에러남

//타입을 먼저 확인해야함!!

// if(typeof a === 'number'){
//   let b = a + 1
// }

// a.toUpperCase();

// if(typeof a === 'string'){
//   let b = a.toUpperCase();
// }

//void - 아무것도 return하지 않는 함수를 대상으로 사용함. 보통 void를 따로 지정해줄 필요는 없음 -타입스크립트가 자동으로 인식함, void=비어있는것

// function hello(){  //-> function hello() :void
//     console.log("x")
//   }
//   const a = hello()
//   a.toUpperCase()

//never - 함수가 절.대.로 return하지 않을때. 예를들어 함수에서 exception(예외)이 발생할 때.

//return하지 않고 오류를 발생시키는 함수
// function hello():never{
//   throw new Error("xxx")
// }

//또한 never는 타입이 두가지 일 수도 있는 상황에 발생할 수 있음.
//   function hello(name: string | number) {
//     if (typeof name === "string") {
//       name; //name:string
//     } else if (typeof name === "number") {
//       name; //name:number
//     } else {
//       name; //name:never - 이 코드는 절대 실행되지 않아야 한다는 것.
//     }
//   }
