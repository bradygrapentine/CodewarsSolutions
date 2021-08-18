using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static string SpinWords(string sentence)
  {
    return String.Join(" ", sentence
                            .Split(' ')
                            .Select(word => 
                                    word.Length > 4 ? 
                                    new string(word.Reverse().ToArray()) : 
                                    word));
  }
}


// https://www.codewars.com/kata/5264d2b162488dc400000001
