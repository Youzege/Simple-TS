// 数组 & 元组
const arrNum: number[] = [1, 2, 3]

const arrA: (number | string)[] = [1, '2', 3]

const arrUndefined: undefined[] = [undefined]

// type alias 别名
type User = {
  name: string
  age: number
}
const arrObjA: User[] = [
  {
    name: 'youzge',
    age: 1
  }
]

// 使用 class 也可以完成 ， 数据结构相同
class Teacher {
  name: string
  age: number
}
const arrObjB: Teacher[] = [
  new Teacher(),
  {
    name: 'youzege',
    age: 1
  }
]

// 元组 tuple
// 长度固定, 元素类型固定
const teacherInfo: [string, string, number, boolean] = [
  'youzge',
  'male',
  1,
  true
]
// 应用场景，读取 csv表格
const userInfo: [string, string, number][] = [
  ['youzge', 'male', 12],
  ['long', 'female', 1]
]
