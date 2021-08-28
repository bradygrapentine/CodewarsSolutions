String.prototype.camelCase=function() {
  return this == "" || this == null ? Object.values(this).join('') : this.trim().split(' ').map(c => c[0].toUpperCase() + c.slice(1)).join('')
}

// String.prototype.camelCase=function() {
//       let str = Object.values(this).join('')
//       if (str === null) {
//         return null
//       } else if (str === "") {
//         return str
//       }
//       str = str.trim().split('')
//       for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//           str[i] = str[i].toUpperCase()
//         }
//         else if (str[i] === ' ' && i !== str.length-1) {
//           str.splice(i, 2, str[i+1].toUpperCase())
//         }   
//       }
//       return str.join('')
//     }

// Object.defineProperty(String.prototype, 'camelCase', {
//     value() {
//       let str = Object.values(this).join('')
//       if (str === null) {
//         return null
//       } else if (str === "") {
//         return str
//       }
//       str = str.trim().split('')
//       for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//           str[i] = str[i].toUpperCase()
//         }
//         else if (str[i] === ' ' && i !== str.length-1) {
//           str.splice(i, 2, str[i+1].toUpperCase())
//         }   
//       }
//       return str.join('')
//     }})

// https://www.codewars.com/kata/587731fda577b3d1b0001196
