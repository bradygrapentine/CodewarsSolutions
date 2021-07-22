using System;
using System.Linq;

public static class Kata
{
  public static int MaxSequence(int[] arr) 
  { 
    if (arr.Length == 0 || arr.Max() < 0) 
    {
      return 0;
    }
    else if (arr.Min() > 0) 
    {
      return arr.Sum();
    }

    var currentSum = arr[0];
    var maxSum = currentSum;
    for (var i = 1; i < arr.Length; i++)
    {
      currentSum = Math.Max(arr[i], arr[i] + currentSum);
      maxSum = Math.Max(currentSum, maxSum);
    }
    return maxSum;
  }
}

// using System;
// using System.Linq;

// public static class Kata
// {
//   public static int MaxSequence(int[] arr) 
//   { 
//     if (arr.Length == 0 || arr.Max() < 0) 
//     {
//       return 0;
//     }
//     else if (arr.Min() > 0) 
//     {
//       return arr.Sum();
//     }

//     var maxSum = 0;
//     for (var i = 0; i < arr.Length; i++)
//     {
//       for (var j = 1; j <= (arr.Length-i); j++)
//       {
//         if (arr.Skip(i).Take(j).Sum() > maxSum) maxSum = arr.Skip(i).Take(j).Sum();
//       }
//     }
//     return maxSum;
//   }
// }

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
