// 泛型  泛指类型
const join = <T, P>(first: T, second: P) => {
  return `${first}${second}`
}
join<number, string>(1, '1')

// T[]
const map = <T>(params: Array<T>) => {
  return params
}
map<string>(['123'])

// 返回值设置泛型
const joinA = <T, P>(first: T, second: P): T => {
  return first
}
