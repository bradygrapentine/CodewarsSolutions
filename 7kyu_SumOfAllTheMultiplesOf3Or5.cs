using System.Linq;

namespace Solution
{
  public static class Program
  {
    public static int findSum(int n)
    {
      return Enumerable.Range(3,n-2).Where(m => m%3==0 || m%5==0).Sum();
    }
  }
}

// using System.Linq;

// namespace Solution
// {
//   public static class Program
//   {
//     public static int findSum(int n)
//     {
//       var result = 0;
//       for( var i = 3; i <= n; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//           result += i;
//         }
//       }
//       return result;
//     }
//   }
// }

// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
