/**
 * utils
 */

class Utils {
  /**
   * 数组中抽取多个随机数
   *
   * @param {Array} randomarr 抽取数组
   * @param {string} num 抽取次数
   */
  randomArr(randomarr, num = 1) {
    let copy = [...randomarr]
    let last = []

    for (let n = 0; n < num && JSON.stringify(copy) !== '[]'; n++) {
      let r_index = parseInt(Math.random() * copy.length)

      last = [...last, copy[r_index]]
      copy.splice(r_index, 1)
    }

    return last
  }

  /**
   * 数组扁平化
   * @param {Array} flattarr 多维数组
   */
  flatten(flattarr) {
    let copy = [...flattarr],
      context = this

    return copy.reduce((last, next) => {
      return last.concat(Array.isArray(next) ? context.flatten(next) : next)
    }, [])
  }

  /**
   * 插入数组中元素位置
   * @param {Array} sortedarr 被插入数组
   * @param {string} obj 插入元素
   */
  sortedIndex(sortedarr, obj) {
    let low = 0,
      high = sortedarr.length

    while (low < high) {
      let mid = Math.floor((low + high) / 2)
      if (sortedarr[mid] < obj) low = mid + 1
      else high = mid
    }

    return high
  }
}

export default new Utils()
