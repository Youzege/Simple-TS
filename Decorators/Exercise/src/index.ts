// 练习: 捕获错误装饰器
// 使用函数包裹 装饰器，进行传参，完善提示信息

const userInfo: any = undefined

function catchError (msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = function () {
      try {
        fn()
      } catch (error) {
        console.log(msg)
      }
    }
  }
}

class User {
  @catchError(`username 不存在`)
  getName () {
    return userInfo.name
  }
  @catchError(`userage 不存在`)
  getAge () {
    return userInfo.age
  }
}

const userA = new User()
userA.getName()
userA.getAge()
