
using System;
using System.Collections.Generic;
public class Kata
{
  public static int SquareDigits(int n)
  {
    var intAsString = n.ToString();
    var result = "";
    for(var i = 0; i < intAsString.Length; i++)
    {
      var chrAsInt = int.Parse(intAsString[i].ToString());
      var chrSquared = (chrAsInt * chrAsInt);
      result += chrSquared.ToString();
    }
    return int.Parse(result);
  }
}
