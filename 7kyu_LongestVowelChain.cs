using System;

public static class Kata
{
  public static int Solve(string str)
  {
    var vowels = "aeiou";
    var tempVowelCount = 0;
    var vowelCount = 0;
    for (var i = 0; i < str.Length; i++) 
    {
      if (vowels.Contains(str[i])) 
      {
        tempVowelCount++;
      }
      else 
      {
        vowelCount = tempVowelCount > vowelCount ? tempVowelCount: vowelCount;
        tempVowelCount = 0;
      }
    }
    return tempVowelCount > vowelCount ? tempVowelCount: vowelCount;
  }
}

// https://www.codewars.com/kata/59c5f4e9d751df43cf000035
