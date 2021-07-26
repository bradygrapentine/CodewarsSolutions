using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static bool IsPangram(string str)
  {
    var strLower = str.ToLower();
    var result = new List<int>();
    foreach (var chr in strLower) {
      if (result.Contains((int)chr - 96)) {
        continue;
      }
      else if (((int)chr - 96) > 0 && ((int)chr - 96) < 27) {
        result.Add((int)chr - 96);
      }
    }
    return result.Count() == 26;
  }
}

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
