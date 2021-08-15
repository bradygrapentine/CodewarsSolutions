using System.Collections.Generic;
using System;
using System.Linq;

namespace CodeWars
{
    public class Kata
    {
        public List<string> wave(string str)
        {
          var spltStr = str.ToCharArray();
          var result = new List<string>();
          for (var i = 0; i < spltStr.Length; i++) 
          {
            if (spltStr[i] != ' ') 
            {
              spltStr[i] = Char.ToUpper(spltStr[i]);
              result.Add(String.Join("", spltStr));
              spltStr[i] = Char.ToLower(spltStr[i]);
            }
          }
          return result;
        }
    }
}

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
