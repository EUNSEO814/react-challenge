//다형성 (polymorphism)
// polymorphism
// 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.

// any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
// any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.

// 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다

// 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
//generic
// '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'
// 방법 1.
// type SuperPrint = {
//   (arr: number[]): void
//   (arr: boolean[]): void
//   (arr: string[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 2.
// type SuperPrint = {
//   (arr: number[]): void
//   (arr: boolean[]): void
//   (arr: string[]): void
//   (arr: (number|boolean)[]): void // 선호하지 않음. 모든 가능성을 다 조합해서 만들어야함.
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 3-1. -generic 사용하기
// type SuperPrint = {
//   <T>(arr: T[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3])
// superPrint([true, false, true])
// superPrint(["a", "b", "c"])
// superPrint([1, 2, true, false])

// 방법 3-2. -generic 사용하기
// type SuperPrint = {
//     <T>(arr: T[]): T
//   }

//   const superPrint: SuperPrint = (arr) => arr[0]

//   const a = superPrint([1, 2, 3])
//   const b = superPrint([true, false, true])
//   const c = superPrint(["a", "b", "c"])
//   const d = superPrint([1, 2, true, false, "hello"])

// 방법 3-3. -generic 2개 사용하기
// type SuperPrint = {
//     <T, M>(a: T[], b:M): T
//   }

//   const superPrint: SuperPrint = (a) => a[0]

//   const a = superPrint([1, 2, 3],"X")
//   const b = superPrint([true, false, true],1)
//   const c = superPrint(["a", "b", "c"],false)
//   const d = superPrint([1, 2, true, false, "hello"],[])

// 방법 4. -generic
// function superPrint<T>(a:T[]){
//     return a[0]
//   }

//   const a = superPrint([1, 2, 3])
//   const b = superPrint([true, false, true])
//   const c = superPrint(["a", "b", "c"])
//   const d = superPrint([1, 2, true, false, "hello"])

// 방법 5-1. -generic
// type Player<E> = {
//   name: string
//   extraInfo: E
// }

// const kim: Player<{ favFood: string }> = {
//   name: "kim",
//   extraInfo: {
//     favFood: "kimchi"
//   }
// }

// 방법 5-2. -generic
// type Player<E> = {
//   name: string
//   extraInfo: E
// }
// type KimPlayer = Player<{ favFood: string }>

// const kim: KimPlayer = {
//   name: "kim",
//   extraInfo: {
//     favFood: "kimchi"
//   }
// }

// 방법 5-3. -generic
// type Player<E> = {
//     name: string
//     extraInfo: E
//   }

//   type KimExtra = {
//     favFood: string
//   }

//   type KimPlayer = Player<KimExtra>

//   const kim: KimPlayer = {
//     name: "kim",
//     extraInfo: {
//       favFood: "kimchi"
//     }
//   }

//   const lynn: Player<null> = {
//     name: "lynn",
//     extraInfo: null
//   }
