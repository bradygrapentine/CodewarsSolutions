using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
  public static string Rot13(string message)
  {
    var messageAsList = message.ToCharArray();
    for (var i = 0; i < messageAsList.Count(); i++) 
    {
      if (Char.IsLetter(messageAsList[i])) 
      {
        var asciiValOfLetter = (int) messageAsList[i];
        if (asciiValOfLetter < 91) 
        {
          messageAsList[i] = ((asciiValOfLetter - 64 + 13) % 26) == 0 ? (char) 90 : (char) (((asciiValOfLetter - 64 + 13) % 26) + 64);
        }
        else 
        {
          messageAsList[i] = ((asciiValOfLetter - 96 + 13) % 26) == 0 ? (char) 122 : (char) (((asciiValOfLetter - 96 + 13) % 26) + 96);
        }
      }
    }
    return String.Join("", messageAsList);
  }
}

// https://www.codewars.com/kata/530e15517bc88ac656000716
