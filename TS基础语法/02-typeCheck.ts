/**
 * ts优势 1
 * 进行静态类型检查，排除传参问题，参数类型问题，是否返回值问题，在未编译前就可以排查
 * 自动提示 datas中的x y，开发体验提高
 */
const Pythagorean = ({ x, y }: { x: number; y: number }): number => {
  return Math.sqrt(x ** 2 + y ** 2)
}

const datas = {
  x: 2,
  y: 1
}

Pythagorean(datas)

// 使用 type 别名关键字 实现类型定义
// type Point = { x: number, y: number }
// 使用 interface 关键字
// interface Point = { x: number, y: number }

// const Pythagorean = ({x, y}: Point): number => {
//   return Math.sqrt(x ** 2 + y ** 2)
// }
