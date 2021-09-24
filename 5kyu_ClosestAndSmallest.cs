using System;
using System.Collections.Generic;
using System.Linq;

public class ClosestWeight
{
    public static int[][] Closest(string strng) 
    {
      if (strng == "" || strng.Split(' ').Length <= 1) 
      {
        return new int[0][];
      }
      
      var strngAsList = strng.Split(' ').Select(g => Convert.ToInt32(g)).ToList();
      
      var sortedNewStrngAsList = strng.Split(' ').ToList().Select((z,i) => new int[] {z.ToCharArray().Sum(y => Convert.ToInt32(y.ToString())), i, strngAsList[i]}).OrderBy(x => x[0]).ToList();;
      
      int[][] result =
      {
        sortedNewStrngAsList[0],
        sortedNewStrngAsList[1]
      };
      
      for (var i = 1; i < sortedNewStrngAsList.Count()-1; i++) 
      {
        if (Math.Abs(sortedNewStrngAsList[i][0] - sortedNewStrngAsList[i+1][0]) < Math.Abs(result[0][0] - result[1][0])) 
        {
          result[0] = sortedNewStrngAsList[i];
          result[1] = sortedNewStrngAsList[i+1];
        }
        else if (Math.Min(sortedNewStrngAsList[i][0], sortedNewStrngAsList[i+1][0]) < (Math.Min(result[0][0], result[1][0])) && Math.Abs(sortedNewStrngAsList[i][0] - sortedNewStrngAsList[i+1][0]) == Math.Abs(result[0][0] - result[1][0]))
        {
          result[0] = sortedNewStrngAsList[i];
          result[1] = sortedNewStrngAsList[i+1];
        }
        else if ((Math.Max(sortedNewStrngAsList[i][1], sortedNewStrngAsList[i+1][1]) < Math.Max(result[0][1], result[1][1])) && ((Math.Abs(sortedNewStrngAsList[i][0]) + Math.Abs(sortedNewStrngAsList[i+1][0])) == (Math.Abs(result[0][0]) + Math.Abs(result[1][0]))) && Math.Abs(sortedNewStrngAsList[i][0] - sortedNewStrngAsList[i+1][0]) == Math.Abs(result[0][0] - result[1][0]))
        {
          result[0] = sortedNewStrngAsList[i];
          result[1] = sortedNewStrngAsList[i+1];
        }
      }
      
      return result;
    }
}

// https://www.codewars.com/kata/5868b2de442e3fb2bb000119
