using System.Linq;
using System;
public static class Kata 
{
  public static bool XO (string input) => input.ToLower().Count(chr => chr == 'x') == input.Where(chr => Char.ToLower(chr) == 'o').Count();
}

// using System.Linq;
// using System;
// public static class Kata 
// {
//   public static bool XO (string input)
//   {
//     if (input.Where(chr => Char.ToLower(chr) == 'x').Count() == input.Where(chr => Char.ToLower(chr) == 'o').Count())
//     {
//       return true;
//     }
//     else 
//     {
//       return false;
//     }
//   }
// }
