using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static List<string> Anagrams(string word, List<string> words)
  {
    var result = new List<string>();
    for (var i = 0; i < words.Count(); i++) {
      var spltWord = words[i].ToCharArray();
      var spltChecker = word.ToCharArray();
      Array.Sort(spltWord);
      Array.Sort(spltChecker);
      if (spltWord.SequenceEqual(spltChecker)) { 
        result.Add(words[i]); 
      }
    } 
    return result;
  }
}

// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
