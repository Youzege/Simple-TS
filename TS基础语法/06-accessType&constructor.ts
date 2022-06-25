// private, protected, public 访问类型
// 1. public 允许在类的 内外 被调用
// 2. private 允许在类内使用
// 3. protected 允许在类内被调用，在继承的子类内 被调用
class Person {
  protected name: string
  public sayHi () {
    this.name
    console.log(`my name is ${this.name}`)
  }
}
class Teacher extends Person {
  public teach () {
    this.name
  }
}

const personA = new Person()
// personA.name = 'youzege' // name受保护 不可访问
personA.sayHi()

// constructor
// 1. 写法
class Admin {
  // 传统写法
  // public username: string
  // constructor(username: string) {
  //   this.username = username
  // }
  // 简化写法
  constructor (public username: string) {}
}
const userA = new Admin('youzege')
console.log(userA.username)

// 2. 继承父类 需要执行 super()
// 还需要给父类 传参
class User extends Admin {
  constructor (public age: number) {
    super('youzge')
  }
}
const UserB = new User(12)
