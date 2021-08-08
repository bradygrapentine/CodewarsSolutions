using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static int[][] MatrixAddition(int[][] a, int[][] b)
  {
    var result = new List<int[]>();
    for (var i = 0; i < a.Length; i++) {
      var newRow = new List<int>();
      for (var j = 0; j < a[i].Length; j++) {
        var newEntry = b[i][j] + a[i][j];
        newRow.Add(newEntry);
      }
      result.Add(newRow.ToArray());
    }
    return result.ToArray();
  }
}

// https://www.codewars.com/kata/526233aefd4764272800036f
