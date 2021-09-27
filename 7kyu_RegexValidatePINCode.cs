using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static bool ValidatePin(string pin)
  {
    var pattern1 = new Regex(@"^\d{4}$");
    var pattern2 = new Regex(@"^\d{6}$");
    foreach (var chr in pin) {
      if (chr == '\n') return false;
    }
    return pattern1.IsMatch(pin) ? true: pattern2.IsMatch(pin) ? true: false;
  }
}

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
