using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static int FindNumber(int[] array)
  {
    if(array.Length == 0)
    {
      return 1;
    }
    else if (((array.Max() * (array.Max() + 1))/2 - array.Sum()) > 0) // (ActualSum - HypotheticalSum) > 0
    {
      return (array.Max() * (array.Max() + 1))/2 - array.Sum();
    }
    else
    {
      return array.Max() + 1;  
    }
  }
}

// using System.Linq;

// public class Kata
// {
//   public static int FindNumber(int[] array)
//   {
//      return ((2 + array.Length) * (array.Length + 1) / 2) - array.Sum(x => x); 
//   }
// }
