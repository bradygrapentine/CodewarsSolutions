using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static long QueueTime(int[] customers, int n)
    {
      var tills = new int[n];
      Array.Fill(tills, 0);
      
      foreach (var customer in customers) 
      {
        tills[Array.IndexOf(tills, tills.Min())] += customer;
      }
      
      return tills.Max();
    }
}

https://www.codewars.com/kata/57b06f90e298a7b53d000a86
