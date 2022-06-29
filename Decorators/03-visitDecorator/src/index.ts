// 访问器 装饰

function visitDecorator (
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false
}

class User {
  private _name: string
  constructor (name: string) {
    this._name = name
  }
  get name () {
    return this._name
  }
  @visitDecorator
  set name (name: string) {
    this._name = name + '_Visit'
  }
}

const userA = new User('youzege')
userA.name = 'wwz'
console.log(userA.name)
