using System;
using System.Linq;

public class Number
{
  public int DigitalRoot(long n)
  {
    var result = n.ToString().ToArray().Select(dig => Int32.Parse(dig.ToString())).Sum();
    return result.ToString().Length > 1 ? DigitalRoot(Convert.ToInt64(result)) : Convert.ToInt32(result);
  }
}

// using System;
// using System.Linq;

// public class Number
// {
//   public int DigitalRoot(long n)
//   {
//     while(n.ToString().Length > 1) {
//       var nAsString = n.ToString();
//       var nStrSplt = nAsString.ToArray();
//       var result = 0;
//       foreach(var dig in nStrSplt)
//       {
//         var digAsNum = Int32.Parse(dig.ToString());
//         result += digAsNum;
//       }
//       n = result;
//     }
//     return Convert.ToInt32(n);
//   }
// }

// https://www.codewars.com/kata/541c8630095125aba6000c00
