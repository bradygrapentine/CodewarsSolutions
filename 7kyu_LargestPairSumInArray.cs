
using System.Linq;
using System.Collections.Generic;
public class Kata
{
  public static int LargestPairSum(int[] numbers)
  {
    var orderedNumbers = numbers.OrderBy(num => num).ToList();
    return orderedNumbers[numbers.Count()-1] + orderedNumbers[numbers.Count()-2];
    // TODO: Write your code here
  }
}
