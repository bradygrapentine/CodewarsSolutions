using System;
using System.Collections.Generic;
using System.Linq;
public class DirReduction {
  
    public static string[] dirReduc(String[] arr) {
      var result = new List<string>();
      for (var i = 0; i < arr.Count(); i++) 
      {
        if (result.Count() != 0) {
          if (result[result.Count() - 1] == "NORTH" && arr[i] == "SOUTH") {
            result.RemoveAt(result.Count() - 1);
          }
          else if (result[result.Count() - 1] == "SOUTH" && arr[i] == "NORTH") {
            result.RemoveAt(result.Count() - 1);
          } 
          else if (result[result.Count() - 1] == "EAST" && arr[i] == "WEST") {
            result.RemoveAt(result.Count() - 1);
          }
          else if (result[result.Count() - 1] == "WEST" && arr[i] == "EAST") {
            result.RemoveAt(result.Count() - 1);
          }
          else {
            result.Add(arr[i]);
          }
        }
        else {
          result.Add(arr[i]);
        }
      }
      return result.ToArray();
    }
}


// https://www.codewars.com/kata/550f22f4d758534c1100025a
