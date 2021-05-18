using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static int Find(int[] integers)
  {
    var even_s = integers.Where(integ => integ % 2 == 0).ToList();
    var odd_s = integers.Where(integ => integ % 2 == 1).ToList();
    if (even_s.Count == 1)
    {
      return even_s[0];
    }
    else
    {
      return odd_s[0];
    } 
  }
}
