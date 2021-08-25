using System.Linq;
using System.Collections.Generic;
public class Kata
{
  public static int DontGiveMeFive(int start, int end)
  {
    return Enumerable.Range(start, end-start+1)
                     .Select(n => n.ToString())
                     .Where(n => !n.Contains("5"))
                     .Count();
    // return Enumerable.Range(start, end-start+1).Count(n => !n.ToString().Contains("5"));  
  }
}


// using System.Linq;
// using System.Collections.Generic;
// public class Kata
// {
//   public static int DontGiveMeFive(int start, int end)
//   {
//     var numList = new List<int>();
//     for (var i = start; i < end + 1; i++)
//     {
//       if (i.ToString().ToList().Contains('5'))
//       {
//         continue;      
//       }
//       else
//       {
//         numList.Add(i);
//       }      
//     }
//     return numList.Count();
//   }
// }


// https://www.codewars.com/kata/5813d19765d81c592200001a
