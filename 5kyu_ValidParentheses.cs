using System;
using System.Collections.Generic;
using System.Linq;

public class Parentheses
{
    public static bool ValidParentheses(string input)
    {
      var open = 0;
      for (var i = 0; i < input.Length; i++) 
      {
        if (input[i] == '(') {
          open++;
        } else if (input[i] == ')') {
          open--;
        }
        if (open < 0) {
          return false;
        } 
      }
      if (open > 0) {
        return false;
      }
      return true;
    }
} 

// https://www.codewars.com/kata/52774a314c2333f0a7000688
