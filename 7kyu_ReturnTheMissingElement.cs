using System;
using System.Linq;

public static class Kata
{
  public static int GetMissingElement(int[] superImportantArray, int lastVal = 9)
  {
    return Enumerable.Range(1, lastVal).Sum() - superImportantArray.Sum();  
  }
}

// using System;
// using System.Linq;

// public static class Kata
// {
//   public static int GetMissingElement(int[] superImportantArray)
//   {
//     return 45 - superImportantArray.Sum();
//   }
// }

// https://www.codewars.com/kata/5299413901337c637e000004
