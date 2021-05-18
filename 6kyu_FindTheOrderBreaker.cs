using System;
using System.Linq;
public class Kata
{
    public static int OrderBreaker(int[] input)
    {
      var inputList = input.ToList();
      var orderedList = input.OrderBy(num => num).ToList();
      if (inputList[0] < inputList[1])
      {
        if (inputList[0] != orderedList[0])
        {
          return orderedList[0]; 
        }
        return inputList.Where((n, i) => n != orderedList.ElementAt(i)).First();
      }
      return inputList[0];
    }
}
