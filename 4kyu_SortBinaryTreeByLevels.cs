// using System;
// using System.Collections.Generic;

// class Kata
// {
//   public static List<int> TreeByLevels(Node node)
//   {
//     var result = new List<int>();
//     var queue = new Queue<Node>();
//     if (node != null) 
//     {
//       queue.Enqueue(node);
//     }
//     while (queue.Count > 0) 
//     {
//       var n = queue.Dequeue();
//       if (n != null) 
//       {
//         result.Add(n.Value);
//         queue.Enqueue(n.Left);
//         queue.Enqueue(n.Right);
//       }
//     }
//     return result;
//   }
// }

// https://www.codewars.com/kata/52bef5e3588c56132c0003bc
