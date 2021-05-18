
C#:
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static int Solution(int value)
  {
    var multiplesOf3and5= new List<int>();
    if (value <= 3)
    {
       return 0;
    }
    else if (value <= 5)
    {
      return 2;
    }
    else
    {
      foreach(var num in Enumerable.Range(1,value-1))
      {
        if (num % 3 == 0 && num % 5 == 0)
        {
          multiplesOf3and5.Add(num);
          continue;
        }  
        
        else if (num % 3 == 0 || num % 5 == 0)
        {
          multiplesOf3and5.Add(num);
        }
      }
      return multiplesOf3and5.Sum();
    }
  }
}
