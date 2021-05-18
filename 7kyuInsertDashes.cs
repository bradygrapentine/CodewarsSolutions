using System.Linq;
using System;
using System.Collections.Generic;
public class Kata
{
  public static string InsertDash(int num)
  {
    var numAsS = num.ToString();
    
    var result = "";
    
    for (var i = 0; i < numAsS.Length -1; i++)
    {
      var numAsN = Convert.ToInt32(numAsS[i]);
      if (numAsN % 2 == 0)
      {
        result += numAsS[i];
        continue;
      }
      else
      {
        var numAsN2 = Convert.ToInt32(numAsS[i+1]);
        if (numAsN2 % 2 == 1)
        {
          result += numAsS[i];
          result += "-";
          continue;
        }
        else
        {
          result += numAsS[i];
          continue;
        }
      }
    }
    result += numAsS[numAsS.Length - 1];
    return result;
  }
}
