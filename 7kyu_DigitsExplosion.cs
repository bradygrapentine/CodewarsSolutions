using System;
using System.Linq;

public class Digits
{
  public static string Explode(string s)
  {
    return string.Concat(s.Select(n => new string(n, int.Parse(n.ToString()))));
  }
}

// using System;
// using System.Linq;
// public class Digits
// {
//   public static string Explode(string s)
//   {
//     var result = "";
//     for (var i = 0; i < s.Length; i++)
//     {
//       int charAsInt = int.Parse(s[i].ToString());
//       for(var j = 0; j < charAsInt; j++)
//       {
//         result += charAsInt;
//       }
//     }
//     return result;
//   }
// }
