using System;
using System.Linq;

public class Kata
{
  public static string ToWeirdCase(string s)
  {
    var spltStr = s.ToLower().Split(' ');
    for (var i = 0; i < spltStr.Length; i++) {
      spltStr[i] = String.Join("", spltStr[i].ToCharArray().Select((c,ind) => ind % 2 == 0 ? Char.ToUpper(c) : c));
    }
    return String.Join(' ', spltStr);
  }
}

// https://www.codewars.com/kata/52b757663a95b11b3d00062d
