using System.Linq;

public class Kata
{
  public static int FindShort(string s)
  {
    return s.Split(' ').Select(n => n.Length).OrderBy(m => m).FirstOrDefault();
  }
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
