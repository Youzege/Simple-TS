function useDecoratorA () {
  return function<T extends new (...args: any[]) => any> (constructor: any) {
    return class extends constructor {
      name = 'youzegehq'
      getName () {
        this.name
      }
    }
  }
}

const User = useDecoratorA()(
  class {
    name: string
    constructor (name: string) {
      this.name = name
    }
  }
)

const userA = new User('youzege')
console.log(userA.getName())
