using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
  public static int FindMissingLetter(char[] array)
  {
    var actualSum = array.Sum(chr => (int)chr);
    var expectedSum = Enumerable.Range((int)array[0], array.Length+1).Sum();
    return (char)(expectedSum - actualSum);
  }
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2
