using System.Collections.Generic;
using System.Linq;


namespace Solution
{
  class Kata
    {
    public static int find_it(int[] seq) 
      {
      var result = new Dictionary<int, int>();
      foreach(var num in seq) {
        if (!result.ContainsKey(num)) {
          result[num] = 0;
        }
        result[num]++;
      }
      foreach(var item in result) {
        if (item.Value % 2 == 1) {
          return item.Key;
        }
      }
      return 0;
    }
  }
}
