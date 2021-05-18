
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    return arr.Where( number => number > 0).Sum(number => number);
  }
}
