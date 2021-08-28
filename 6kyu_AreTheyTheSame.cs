using System;
using System.Linq;
using System.Collections.Generic;

class AreTheySame
{
  public static bool comp(int[] a, int[] b)
  {
    if (a == null && b == null) 
    {
      return true;
    } 
    else if ((a == null || b == null) || (b.Length != a.Length)) 
    {
      return false; 
    }  
    Array.Sort(a);
    Array.Sort(b);
    for (var i = 0; i < a.Length; i++) 
    {
      if(b[i] != Convert.ToInt32(Math.Pow(a[i], 2))) 
      {
        return false;
      }
    }
    return true;
  }
}

// https://www.codewars.com/kata/550498447451fbbd7600041c
