using System;
using System.Linq;
using System.Collections.Generic;

class MaxSumDigits {

    public static long[] MaxSumDig(long nmax, int maxsm) 
    {
      var interval = Enumerable.Range(1000, Convert.ToInt32(nmax)-1000+1).ToList();
      var results = new List<int>();
      long resultSum = 0;
      for (var i = 0; i < interval.Count(); i++) 
      {
        long checkSum = 0;
        foreach (var dig in interval[i].ToString()) {
          checkSum += Int64.Parse(dig.ToString());
        }
        if (checkSum <= maxsm) {
          results.Add(interval[i]);
          resultSum += interval[i];
        }
      }
      long avg = results.Count() == 0 ? 0 : resultSum/results.Count();
      long closest = results[0];
      foreach (var entry in results) {
        if (Math.Abs(avg-entry) <= Math.Abs(avg-closest)) {
          closest = entry;
        }
      }
      return new long[3] {results.Count(), closest, resultSum};
    }
}

// https://www.codewars.com/kata/55f5efd21ad2b48895000040
