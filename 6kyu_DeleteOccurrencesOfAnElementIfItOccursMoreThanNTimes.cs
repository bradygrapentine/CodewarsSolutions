using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
  public static int[] DeleteNth(int[] arr, int x) {
    var seen = new Dictionary<int,int>();
    var arrAsList = arr.ToList();
    for (var i = 0; i< arrAsList.Count(); i++) {
      if (!(seen.Keys.Contains(arrAsList[i]))) {
        seen[arrAsList[i]] = 1;
      }
      else if (seen.Keys.Contains(arrAsList[i])) {
        seen[arrAsList[i]] += 1;
      }
      if (seen[arrAsList[i]] > x) {
        arrAsList.RemoveAt(i);
        i--;
      }
    }
    return arrAsList.ToArray();
  }
}

// https://www.codewars.com/kata/554ca54ffa7d91b236000023

