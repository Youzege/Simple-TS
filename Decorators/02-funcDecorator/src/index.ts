// 方法装饰
// 对类中的方法进行装饰器使用
// 普通方法， target 对应的是类的 prototype
// 静态方法， target 对应的是类的 构造函数
function getNameDecorator (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target, key)
  // 类似 defineProperty 修饰符
  descriptor.writable = true
}

class User {
  name: string
  constructor (name: string) {
    this.name = name
  }
  @getNameDecorator
  getName () {
    console.log(this.name)
  }
  // static getName () {
  //   console.log(this.name)
  // }
}

const userA = new User('youzege')
userA.getName = () => {}
