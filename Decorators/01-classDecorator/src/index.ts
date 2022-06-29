// 类的 装饰器
// 装饰器: 本身是一个函数
// 装饰器的参数是 构造函数
// 装饰器 通过 @ 符号 进行使用
// 执行时机: 类创建之后执行，执行一次
// 多个装饰器执行顺序，从右到左，从下到上

function useDecoratorA (flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log('youzege')
      }
    }
  } else {
    return function (constructor: any) {}
  }
}

function useDecoratorB (constructor: any) {
  console.log('h B')
}
function useDecoratorC (constructor: any) {
  console.log('h C')
}

@useDecoratorA(false)
@useDecoratorB
class User {}

const userA = new User()
;(userA as any).getName()
