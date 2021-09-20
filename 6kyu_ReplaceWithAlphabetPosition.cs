using System.Linq;
using System;
using System.Text;
using System.Collections.Generic;

public static class Kata
{
  public static string AlphabetPosition(string text)
  {
    var textLettersOnly = text.ToLower().ToCharArray().Where(letter => char.IsLetter(letter));
    byte[] asciiBytes = Encoding.ASCII.GetBytes(textLettersOnly.ToArray());
    return String.Join(" ", asciiBytes.ToList().Select(byt => byt - 96));
  }
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da
