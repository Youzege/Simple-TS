// 1. 避免开发时书写错误，返回值定义静态类型
const add = (first: number, second: number): number => {
  // return first + second + '' // 报错
  return first + second
}
const total = add(1, 2) // total: number

// 2. 函数返回值 void 没有返回值
const sayHello = (): void => {
  console.log(`Hello`)
}

// 3. never 函数不会执行所有语句
const error = (): never => {
  // throw new Error() // 1
  while (true) {} // 2

  console.log(`我不执行了...`) // 检测到无法访问代码
}

// 4. 参数的解构赋值
const usePoint = ({ x, y }: { x: number; y: number }): number => {
  return x + y
}
usePoint({ x: 2, y: 1 })
