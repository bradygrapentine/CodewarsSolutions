using System;

public static class Kata
{
  public static bool IsPrime(int n)
  {
    if (n == 2)
    {
      return true;
    }   
    else if (Math.Abs(n) == 1 || n == 0) 
    {
      return false;
    }
    for (var i = Math.Ceiling(Math.Sqrt(Math.Abs(Convert.ToDouble(n)))); i > 1; i--) 
    {
      if (n % i == 0) 
      {
        return false;
      }
    }
    return true;
  }
}

// https://www.codewars.com/kata/5262119038c0985a5b00029f
