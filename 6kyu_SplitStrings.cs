using System.Collections.Generic;
using System;
using System.Linq;

public class SplitString
{
  public static string[] Solution(string str)
  {
    var result = new List<string>();
    for (var i = 0; i < str.Length; i+=2) {
      if (str.Length-1 == i) {
        result.Add(str[str.Length-1] + "_");
      } else {
        result.Add(String.Concat(str.Skip(i).Take(2)));
      }
    }
    return result.ToArray();
  }
}

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
