using System;
using System.Linq;

public class Persist 
{
  public static int Persistence(long n) 
  {
    var count = 0;
    var searching = n.ToString().Length > 1 ? true : false;
    while (searching) 
    {
      var spltInput = n.ToString().ToCharArray();
      n = 1;
      foreach (var dig in spltInput) 
      {
        n *= Int32.Parse(dig.ToString());
      }
      count++;
      if (n < 10) 
      {
        searching = false;
      }
    }
    return count;
  }
}

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
