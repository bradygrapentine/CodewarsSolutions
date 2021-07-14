using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static string[] TowerBuilder(int nFloors)
  {
    var result = new List<string>(nFloors);
    for (var i = 0; i < nFloors; i++) 
    {
      var newFloor = new String('*', ((i*2)+1));
      var newFloorRightPad = newFloor.PadRight((nFloors - (i+1) + newFloor.Length));
      var newFloorBothPads = newFloorRightPad.PadLeft((nFloors * 2) - 1);
      result.Add(newFloorBothPads);
    }
    return result.ToArray();
  }
}


// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

