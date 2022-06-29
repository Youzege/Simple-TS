// 参数 装饰

function paramDecorator (target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex)
}

class User {
  getInfo (name: string, @paramDecorator age: number) {
    return `name: ${name}  age: ${age}`
  }
}

const userA = new User()
console.log(userA.getInfo('youzege', 10))
