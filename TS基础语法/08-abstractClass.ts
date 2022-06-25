// 1. readonly
class Person {
  public readonly name: string
  constructor (name: string) {
    this.name = name
  }
}
const personA = new Person('youzege')
// personA.name = 'long' // warning: 只读

// 2. 抽象类
// 例：图形 获取面积
// 抽象方法 是不知道的，根据各个图形的需求再进行实现
abstract class Geom {
  width: number
  getType () {
    return 'Geom'
  }
  abstract getArea (): number
}

class Circle extends Geom {
  getArea (): number {
    return 123
  }
}
class Square {}
class Tringle {}

// interface 继承
interface PersonOne {
  name: string
}

interface Teacher extends PersonOne {
  teachingAge: number
}

interface Student extends PersonOne {
  age: number
}

const userInfo = (user: Student) => {
  console.log(user.name)
}

const student = {
  name: 'youzege',
  age: 123
}
userInfo(student)

