using System.Collections.Generic;
using System.Linq;
using System;

public class Xbonacci
{
  public double[] xbonacci(double[] s, int n)
  {
    var prevElementsToSum = s.Length;
    var result = s.ToList();
    for (var i = prevElementsToSum; i < n; i++) {
      result.Add(Convert.ToDouble(result.Skip(result.Count() - prevElementsToSum).Take(prevElementsToSum).Sum()));
    }
    return result.Take(n).ToArray();
  }
}

// https://www.codewars.com/kata/556e0fccc392c527f20000c5
