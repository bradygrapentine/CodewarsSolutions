using System.Linq;
using System;

public class Kata
{
  public static int[] SortArray(int[] array)
  {
    var odds = array.Where(num => num%2 == 1).OrderBy(num => num).ToArray();
    var oddCounter = 0;
    for (var i = 0; i < array.Length; i++) {
      if (array[i] % 2 == 1) { 
        array[i] = odds[oddCounter];
        oddCounter++;
      }
    }
    return array;
  }
}

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
