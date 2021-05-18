using System;
using System.Linq;
public class Accumul 
{
  public static String Accum(string s) 
  {
    var result = "";
    for (var i = 0; i < s.Length; i++)
    {
      for(var j = 0; j < i + 1; j++)
      {
        if (j == 0)
        {
          result += char.ToUpper(s[i]);
        }
        else
        {
          result += char.ToLower(s[i]);
        }
      }
      if (i != s.Length-1)
      {
        result += "-";        
      }
    }
    return result;
  }
}
