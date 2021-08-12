using System;
using System.Collections.Generic;
using System.Linq;

class MorseCodeDecoder
{
	public static string Decode(string morseCode)
	{
		var words = morseCode.Trim().Split("   ");
          	List<string> decodedSentence = new List<string>();
   		foreach (var word in words) 
		{
			var characters = word.Split(" ");
      			var newWord = "";
      			foreach (var chr in characters) 
			{
				var decodedChar = MorseCode.Get(chr);
				newWord += decodedChar;
			}
			decodedSentence.Add(newWord);
		}
		return String.Join(' ', decodedSentence);
	}
}

// single space for characters
// three spaces for words
// case-insensitive (but ppl like caps)
// special codes are treated as single special characters and are transmitted as separate words

// https://www.codewars.com/kata/54b724efac3d5402db00065e
