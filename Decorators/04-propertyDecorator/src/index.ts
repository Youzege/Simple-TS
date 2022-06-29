// 属性 装饰

// 1. 属性装饰器
// function propertyDecorator (target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: true
//   }
//   return descriptor
// }

// 2. 属性装饰器 修改属性
// 是修改原型，而不是实例
function propertyDecorator (target: any, key: string): any {
  target[key] = 'wwz'
}

class User {
  @propertyDecorator
  name = 'youzege'
}

const userA = new User()
console.log((userA as any).__proto__.name)
