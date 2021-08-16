using System;
using System.Collections.Generic;
using System.Linq;

    // Declare variable to hold length of current longest str 
    
    // Loop over the str (starting at the first char) (index->i)
    // Loop over the str backwards and check for the last match (index -> j)
    
    //    if j-i+1 (length of current substring) is less than longestLength
    //      => break inner loop

    //    if substring is a palindrome
    //      => save length of palindrome as longestLength
    //         if longer than current value of longestLength

    // return longestLength

public class Kata
{
  public static int GetLongestPalindrome(string str)
  {
    var longestLength = 0;
    if (str == null) {
      return 0;
    }
    for (var i = 0; i < str.Length; i++) 
    {
      for (var j = str.Length-1; j >= i; j--) 
      {
        if (j-i+1 < longestLength) {
          break;
        }
        var sub = str.Substring(i, j-i+1);
        var charArray = sub.ToCharArray();
        Array.Reverse(charArray);
        if (sub == String.Join("", charArray)) 
        {
          longestLength = longestLength < sub.Length ? sub.Length: longestLength;
        }
      }
    }
    return longestLength;
  }
}

// https://www.codewars.com/kata/54bb6f887e5a80180900046b
