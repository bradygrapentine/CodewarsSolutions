using System;
using System.Linq;
using System.Collections.Generic;

class WhichAreIn
{
  public static string[] inArray(string[] array1, string[] array2)
  {
    Array.Sort(array1);
    var result = new List<string>();
    var array1AsList = array1.ToList();
    var array2AsList = array2.ToList();
    if (array1.Length == 0 || array1.Length == 0) 
    {
      return result.ToArray();
    }
    for (var i = 0; i < array1AsList.Count(); i++) 
    {
      for (var j = 0; j < array2AsList.Count(); j++) 
      {
        if (array2AsList[j].Contains(array1AsList[i])) 
        {
          if (!result.Contains(array1AsList[i])) 
          {
            result.Add(array1AsList[i]);
          }
          break;
        }
      }
    }
    return result.ToArray();
  }
}

// https://www.codewars.com/kata/550554fd08b86f84fe000a58

// using System;
// using System.Linq;
// using System.Collections.Generic;

// class WhichAreIn
// {
//   public static string[] inArray(string[] array1, string[] array2)
//   {
//     return array1.Distinct()
//                  .Where(x => array2.ToList().Any(y => y.Contains(x)))
//                  .OrderBy(z => z)
//                  .ToArray();
//   }
// }
