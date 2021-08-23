using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
  public static string High(string s)
  {
    var words = s.Split(" ");
    var result = "";
    var highestScore = 0;
    
    for (var i = 0; i < words.Length; i++) {
      var currentScore = 0;
      foreach (var chr in words[i].ToArray()) {
        currentScore += (int) chr - 96;
      }
      if (currentScore > highestScore) {
        highestScore = currentScore;
        result = words[i];
      }
    }
    return result;
  }
}

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
