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

// 
