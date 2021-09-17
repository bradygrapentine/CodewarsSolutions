using System;
using System.Collections.Generic;
using System.Linq;

class SumParts
{

    public static int[] PartsSums(int[] ls)
    {
      var result = new List<int>();
      var lsAsList = ls.ToList();
      for (var i = 0; i < lsAsList.Count(); i++) 
      {
        result.Add(i == 0 ? lsAsList.Sum() : result[i-1] - lsAsList[i-1]);
      }
      result.Add(0);
      return result.ToArray();
    }
}

// https://www.codewars.com/kata/5ce399e0047a45001c853c2b
