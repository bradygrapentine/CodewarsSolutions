public class Kata
{
  public static string Stringify(Node list)
  {
    if (list == null) return "null";
    var current = list;
    var result = "";
    while (current.Next != null) 
    {
      result += $"{current.Data} -> ";
      current = current.Next;
    }
    return result + $"{current.Data} -> null";
  }
}

// https://www.codewars.com/kata/582c297e56373f0426000098
