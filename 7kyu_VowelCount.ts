export class Kata {
  static getCount(str: string) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        count++
      }
    }
    return count
  }
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
