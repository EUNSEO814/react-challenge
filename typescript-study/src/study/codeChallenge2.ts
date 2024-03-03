type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(prevTerm: string, currTerm: string) {
    if (this.words[prevTerm] !== undefined) {
      this.words[currTerm] = this.words[prevTerm];
      delete this.words[prevTerm];
    }
  }
  showAll() {
    return Object.keys(this.words);
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert() {}
  exists() {}
  bulkAdd(word: Word) {
    return;
  }
  bulkDelete() {}
}

class Word {
  constructor(public term: string, public def: string) {}
}

// Test Case
const ex = new Dict();

// add test ok
console.log("- add test -");
ex.add(new Word("a", "aaa"));
ex.add(new Word("b", "bbb"));
ex.add(new Word("c", "ccc"));
ex.add(new Word("d", "ddd"));

// showAll test ok
console.log("- showAll test -");
ex.showAll();

// get test ok
console.log("- get test -");
console.log("get func test : " + ex.get("a"));

// // delete test ok
// console.log("- delete test -")
// ex.delete("c")
// ex.delete(new Word("b", "bbb"))
// ex.showAll()

// // update test ok
// console.log("- update test -")
// ex.update(new Word("a", "bcd"))
// ex.showAll()

// // count test ok
// console.log("- count test -")
// console.log("count func test : " + ex.count())

// // upsert test ok
// console.log("- upsert test -")
// ex.upsert(new Word("e", "eee"))
// ex.upsert(new Word("d", "ppp"))
// ex.showAll()

// // exists test ok
// console.log("- exists test -")
// console.log("'e' is exist? -> " + ex.exists("e"))
// console.log("'q' is exist? -> " + ex.exists("q"))
// console.log("'a' is exist? -> " + ex.exists(new Word("a", "bcd")))
// console.log("'w' is exist? -> " + ex.exists(new Word('w', 'www')))

// // bulkAdd test ok
// console.log("- bulkAdd test -")
// ex.bulkAdd([
//     new Word("k", "kkk"),
//     new Word("l", "lll")
// ])
// ex.showAll()

// // bulkDelete test ok
// console.log("- bulkDelete test -")
// ex.bulkDelete([
//     "a", "k"
// ])
// ex.showAll()

// ----------------------------------------------------------------
// code challenge solution
// type Word = {
//   term:string;
//   definition:string;
// }

// type Words = {
//   [key: string]: string;
// };

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }
//   add(term: string, definition: string) {
//     if (!this.get(term)) {
//       this.words[term] = definition;
//     }
//   }
//   get(term: string) {
//     return this.words[term];
//   }
//   delete(term: string) {
//     delete this.words[term];
//   }
//   update(term: string, newDef: string) {
//     if (this.get(term)) {
//       this.words[term] = newDef;
//     }
//   }
//   showAll() {
//     let output = "\n--- Dictionary Content ---\n"
//     Object.keys(this.words).forEach((term) =>
//       output += `${term}: ${this.words[term]}\n`
//     );
//     output += "--- End of Dictionary ---\n"
//     console.log(output);
//   }
//   count() {
//     return Object.keys(this.words).length;
//   }
//   upsert(term:string, definition:string){
//     if(this.get(term)){
//       this.update(term, definition);
//     } else {
//       this.add(term, definition);
//     }
//   }
//   exists(term:string){
//     return this.get(term) ? true : false;
//   }
//   bulkAdd(words: Word[]){
//     words.forEach(word => this.add(word.term, word.definition))
//   }
//   bulkDelete(terms: string[]){
//     terms.forEach(term => this.delete(term));
//   }
// }

// const dictionary = new Dict();

// const KIMCHI = "김치"

// // Add
// dictionary.add(KIMCHI, "밋있는 한국 음식");
// dictionary.showAll();

// // Count
// console.log(dictionary.count());

// // Update
// dictionary.update(KIMCHI, "밋있는 한국 음식!!!");
// console.log(dictionary.get(KIMCHI));

// // Delete
// dictionary.delete(KIMCHI);
// console.log(dictionary.count());

// // Upsert
// dictionary.upsert(KIMCHI, "밋있는 한국 음식!!!");
// console.log(dictionary.get(KIMCHI))
// dictionary.upsert(KIMCHI, "진짜 밋있는 한국 음식!!!");
// console.log(dictionary.get(KIMCHI))

// // Exists
// console.log(dictionary.exists(KIMCHI))

// // Bulk Add
// dictionary.bulkAdd([{term:"A", definition:"B"}, {term:"X", definition:"Y"}]);
// dictionary.showAll();

// // Bulk Delete
// dictionary.bulkDelete(["A", "X"])
// dictionary.showAll();
