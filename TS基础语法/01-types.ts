// 静态类型
// 基础类型: null undefined symbol boolean void
let myName: string = 'youzege'
let numA: number = 123
// numA = '123'   warning:不能将string赋值给number

// 对象类型
const user: { name: string; id: number } = {
  name: 'youzege',
  id: 1
}

// array
const arrA: number[] = [1, 2, 3]

// 类 class
class User {}
const userA = new User()

// function
// 给函数赋予类型注解，TS能够更好的推断出返回值的 类型
const getUser: (userName: string) => string = userName => {
  return userName
}
const userName = getUser('youzege')

// 类型注解 annotation
// 变量冒号后的 基础类型 ，为类型注解，开发者告诉TS变量的类型
const fruit: string = 'apple'

// 类型推断 inference
// TS根据赋值，自动进行变量的类型推断
let myAge = 123
