using System;
using System.Linq;
using System.Collections;
public static class Kata
{
  public static string Likes(string[] name)
  {
    var nameL = name.ToList(); 
    if(nameL.Count() == 1)
    {
      return $"{nameL[0]} likes this";
    }
    else if(nameL.Count() == 2)
    {
      return $"{nameL[0]} and {nameL[1]} like this";
    }
    else if(nameL.Count() == 3)
    {
      return $"{nameL[0]}, {nameL[1]} and {nameL[2]} like this";
    }
    else if(nameL.Count() >= 4)
    {
      return $"{nameL[0]}, {nameL[1]} and {nameL.Count()-2} others like this";
    }
    else
    {
      return "no one likes this";
    }
  }
}
