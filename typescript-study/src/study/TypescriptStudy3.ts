//call signature
// type Add = (a:number, b:number) => number

// const add:Add = (a, b) => a + b

//overloading
//함수가 서로 다른 여러개의 call signatures를 가지고 있을때 발생
//파라미터만 달라지고, 비슷한 로직이 반복되는 경우에 사용할 수 있다.
// 코드의 중복을 줄이고 재사용성을 높이려면 어떻게 해야 할까?
// ⇒ Overloading

// type Add = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number
//   }

//   const add:Add = (a, b) => {
//     if(typeof b === "string") return a
//     return a + b
//   }

// type Config = {
//     path: string,
//     state: object
//   }

//   type Push = {
//     (path:string):void
//     (config:Config):void
//   }

//   const push: Push =(config)=>{
//     if(typeof config === "string"){
//       console.log(config)
//     }else{
//       console.log(config.path)
//     }
//   }

//파라미터의 개수가 다를때
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
