// 类 的 泛型
// 1. 可继承 接口，实现泛型中必须包含一个类型值
interface Item {
  name: string
}

class DataManager<T extends Item> {
  constructor (private data: T[]) {}

  getItem (index: number): string {
    return this.data[index].name
  }
}

const data = new DataManager([{ name: 'youzege' }])

// 泛型作为一个具体类型注解
// 接受一个泛型T，参数为 T， 返回值也为T
// funcA: <T>(params: T) => T
const funcA = <T>(params: T): T => {
  return params
}
