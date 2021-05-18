using System.Linq;
using System;
public static class Kata 
{
  public static bool XO (string input) => input.ToLower().Count(chr => chr == 'x') == input.Where(chr => Char.ToLower(chr) == 'o').Count();
}
