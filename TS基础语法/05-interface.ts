// 能用interface表述类型，尽量用interface，然后是 type alias

// 1. demo
// * 可选类型，加一个 ?
// * readonly 只读，无法修改
// * 额外的属性 [propName: string]: any 字面量就可以额外传递字符串类型的变量
// * 方法
interface Person {
  name: string
  readonly age?: number
  [propName: string]: any
  sayHi?(): string
}
const getPersonName = (person: Person): void => {
  console.log(`${person.name}`)
}
const setPersonName = (person: Person, name: string): void => {
  person.name = name
}
const personA = {
  name: 'longge',
  sex: 'male',
  sayHi () {
    return 'youzege'
  }
}
// * 当对象以字面量方式进行传参，TS会根据 interface 进行强校验
// getPersonName({ name: 'longge', sex: 'male' })

getPersonName(personA)
setPersonName(personA, 'youzege')

// 2. class demo
// * 类使用 interface 的关键字
// class User implements Person {
//   name: ''
// }

// 3. interface extends 继承
interface Teacher extends Person {
  teach(): string
}

const useTeach = (person: Teacher): void => {
  person.teach()
}
const teacherA = {
  name: 'youzege!',
  teach () {
    return '教学'
  }
}
useTeach(teacherA)

// 4. interface 定义函数接口
interface SayHello {
  (message: string): string
}

const say: SayHello = (message: string) => {
  return `hello ${message}`
}

say('youzge')
