using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static string DrawStairs(int n)
  {
    var result = "";
    for (var i = 0; i < n; i++)
    {
      result += "I";
      if (i == n-1)
      {
        break;
      }
      else if (n > 1)
      {
        var lenOfRes = result.Length;
        result += '\n' + new string(' ', i + 1);
      }
    }
    return result;
  }
}
