using System.Collections.Generic;

public class Kata
{
  public static Dictionary<char, int> Count(string str)
  {
    Dictionary<char, int> result = new Dictionary<char, int>();
    var strAsArr = str.ToCharArray();
    for(var i = 0; i < strAsArr.Length; i++) {
      if (result.ContainsKey(strAsArr[i])) {
        result[strAsArr[i]]++;
      } 
      else 
      {
        result.Add(strAsArr[i], 1);
      }
    }
    return result;
  }
}
