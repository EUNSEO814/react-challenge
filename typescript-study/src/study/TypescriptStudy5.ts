//4강
//classes

// 📌접근 가능한 위치

// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　 　　　⭕　　　　　　　❌　　　　　❌
// protected 　　　⭕　　　　　　　⭕　　　　　❌
// public　　　　　⭕　　　　　　　⭕　　　　　⭕

// class Player {
//   constructor(
//       private firstName: string,
//       private lastName: string,
//       public nickname: string
//   ) { }
// }

// const kim = new Player("emma", "kim", "엠마")

// 작동안함
// kim.firstName
//문제 없음
// kim.nickname

//추상클래스
//classes

//추상클래스 - 다른 클래스가 상속받을 수 있는 클래스가
//         - 직접 새로운 인스턴스를 만들 수는 없음 ex? new User ~~
// abstract class User {
//   constructor(
//       private firstName: string,
//       private lastName: string,
//       public nickname: string
//   ) { }
// private getFullName(){ -이렇게 하면 kim.getFullName() 사용불가

//추상클래스 안에 들어가 있는 메소드
//   getFullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
// }

// class Player extends User {

// }

// const kim = new Player("emma", "kim", "엠마")

// kim.getFullName()

//protected

// abstract class User {
//   constructor(
//       protected firstName: string,
//       protected lastName: string,
//       protected nickname: string
//   ) { }

//   abstract getNickName(): void

//   getFullName() {
//       return `${this.firstName} ${this.lastName}`
//   }
// }

// class Player extends User {
//   //protected 상속받은 클래스 안에선 접근 가능
//   getNickName(){
//       console.log(this.nickname)
//   }
// }

// const kim = new Player("emma", "kim", "엠마")

// kim.getFullName()
//protected 클래스 밖에서는 접근할 수 없음
// kim.firstName()

// object 의 type을 선언해야할 때 유용함
// type Words = {
//   //property의 이름은 모르지만, 타입만을 알 때 이걸 사용함
//   [key: string]: string;
// };

// let dict :Words ={
//     "potato":"food"
// }

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }
//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(term: string) {
//     return this.words[term];
//   }
// }

// class Word {
//   constructor(public term: string, public def: string) {}
// }

// const kimchi = new Word("kimchi", "한국의 음식");

// const dict = new Dict();

// dict.add(kimchi);
// dict.def("kimchi");
