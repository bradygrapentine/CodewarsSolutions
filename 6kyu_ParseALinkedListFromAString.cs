using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static Node Parse(string nodes)
  {
    if (nodes == "null" || nodes == null) return null;
    
    var nodesAsList = nodes.Split(" -> ").ToList();
    nodesAsList.RemoveAt(nodesAsList.Count()-1);
    var nodesAsNums = nodesAsList.Select(x => Convert.ToInt32(x)).ToList();
    var head = new Node(nodesAsNums[0], null);
    var current = head;
    for (var i = 1; i < nodesAsNums.Count(); i++) 
    {
      current.Next = new Node(nodesAsNums[i], null);
      current = current.Next;
    }
    return head;
  }
}

// https://www.codewars.com/kata/582c5382f000e535100001a7
