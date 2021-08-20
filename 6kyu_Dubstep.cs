using System;
using System.Collections.Generic;
using System.Linq;

public class Dubstep 
{
  public static string SongDecoder(string input) 
  {
    return String.Join(' ', input
                       .Split("WUB")
                       .ToList()
                       .Where(c => c != ""));
  }
}

// https://www.codewars.com/kata/551dc350bf4e526099000ae5
