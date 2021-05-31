using System.Linq;

public class Kata
{
  public static int[] ArrayDiff(int[] a, int[] b) => a.Where(num => !b.Contains(num)).ToArray();
}
