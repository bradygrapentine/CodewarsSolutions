using System;
using System.Linq;
using System.Collections.Generic;

public class RomanDecode
{
  public static int Solution(string roman)
  {
    var converter = new Dictionary<char, int>() 
    {
      {'I', 1},{'V', 5},{'X', 10},{'L', 50},{'C', 100},{'D', 500},{'M', 1000}
    };
    
    var romanArray = roman.ToCharArray();
    var result = 0;
    var decVal = 0;
    var nextDecVal = 0;
    
    for (var i = 0; i < romanArray.Length; i++) 
    {
      decVal = converter[romanArray[i]];
      if (i+1 < romanArray.Length) 
      {
        nextDecVal = converter[romanArray[i+1]];
        if (nextDecVal > decVal) 
        {
          result += -1*(decVal - nextDecVal);
          i++;
        }
        else 
        {
          result += decVal;
        }
      }
      else 
      {
        result += decVal;
      }
    }
    return result;
  }
}

// https://www.codewars.com/kata/51b6249c4612257ac0000005
