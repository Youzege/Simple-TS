// 1. 类型保护---类型断言
// 在还不确定类型的时候，需要访问时，进行类型断言
interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}

// 保护方法1
const trainAnimal = (animal: Bird | Dog) => {
  if (animal.fly) {
    // 类型断言  值 as 类型 || <类型>值
    ;(animal as Bird).sing()
  } else {
    ;(animal as Dog).bark()
  }
}
// 保护方法2  in语法
const trainAnimalSecond = (animal: Bird | Dog) => {
  if ('sing' in animal) {
    // 类型断言  值 as 类型 || <类型>值
    animal.sing()
  } else {
    animal.bark()
  }
}

// 联合类型 的 类型保护

// typeof 语法 进行类型保护
const add = (first: string | number, second: string | number) => {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 使用 instanceof 进行 类型保护
// instanceof 基于原型链来判断
// 不能使用 interface ，需使用 class
class NumberObj {
  count: number
}
const addNumber = (first: object | NumberObj, second: object | NumberObj) => {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}
