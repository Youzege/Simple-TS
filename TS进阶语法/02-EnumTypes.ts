// enum类型 枚举类型
// 枚举是一组命名常量，它使我们能够更清晰明了的了解记录意图。
// 提供基于 数字 和 字符串 的枚举
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED
}

console.log(Status)
/**
 * {
    '0': 'OFFLINE',
    '1': 'ONLINE',
    '2': 'DELETED',
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
  }
 */
console.log(Status.DELETED) // 2
console.log(Status[2]) // DELETED

// 使用场景，返回状态处理
const getResult = (status: string | number) => {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}
console.log(getResult(0))

// enum Status {
//   OFFLINE = 1,
//   ONLINE,
//   DELETED
// }

/**
 * {
    '1': 'OFFLINE',
    '2': 'ONLINE',
    '3': 'DELETED',
      OFFLINE: 1,
      ONLINE: 2,
      DELETED: 3
    }
 */
