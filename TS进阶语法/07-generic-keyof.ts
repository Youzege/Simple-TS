// keyof 使用
// 当 类中有一个方法想正确的返回对象的类型
interface User {
  name: string
  age: number
  gender: string
}

// keyof User类型 getInfo<"name">(key: "name"): string
// type T = 'name'
// key: 'name'
// User['name']

class UserA {
  constructor (private info: User) {}
  getInfo<T extends keyof User> (key: T): User[T] {
    return this.info[key]
  }
}

const userA = new UserA({
  name: 'youzege',
  age: 18,
  gender: 'male'
})

const myName = userA.getInfo('name') //getInfo<"name">(key: "name"): string
