using System;
using System.Linq;
using System.Collections.Generic;

namespace EncryptThis
{
    public class Kata
    {
        public static string EncryptThis(string input)
        {
          if (input == "" || input == null) 
          {
            return "";
          }
          var spltInput = input.Split(' ').ToList();
          
          var result = new List<string>();
            
          for (var i = 0; i < spltInput.Count(); i++) 
          {
            if (spltInput[i].Length == 1) 
            {
              char eleAsChar = spltInput[i][0];
              var ascii = (int) eleAsChar;
              result.Add(ascii.ToString());
            }
            else 
            {
              var spltWord = spltInput[i].ToCharArray();
              var newFirst = (int) spltWord[0];
              var second = spltWord[1];
              spltWord[1] = spltWord[spltWord.Length-1];
              spltWord[spltWord.Length-1] = second;
              result.Add(newFirst.ToString() + String.Join("", spltWord.Skip(1).ToArray())); 
            }            
          }
          return String.Join(" ", result);
        }
    }
}

// https://www.codewars.com/kata/5848565e273af816fb000449
