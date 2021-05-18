using System;
using System.Collections.Generic;
using System.Linq;
public static class Kata
{
  public static string Solution(string str) 
  {
    return string.Concat(str.ToArray().Reverse());
  }
}

// using System;
// using System.Linq;
// public static class Kata
// {
//    public static string Solution(string str) 
//    {
//       var result = "";
//       for(var i = str.Length - 1; i >= 0; i--)
//       {
//          result += str[i]; 
//       }
//       return result;
//    }
// }
