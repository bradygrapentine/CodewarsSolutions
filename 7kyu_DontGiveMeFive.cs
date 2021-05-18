using System.Linq;
using System.Collections.Generic;
public class Kata
{
  public static int DontGiveMeFive(int start, int end)
  {
    var numList = new List<int>();
    for (var i = start; i < end + 1; i++)
    {
//       if (i % 5 == 0 && i % 10 != 0)
//       {
//         continue;
//       }
      if (i.ToString().ToList().Contains('5'))
      {
        continue;      
      }
      else
      {
        numList.Add(i);
      }      
    }
    return numList.Count();
  }
}
