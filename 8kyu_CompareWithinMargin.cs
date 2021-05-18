
public class Kata
{
  public static int CloseCompare(double a, double b, double margin = 0)
  {
    int result = 0;
    if (((a-b) <= margin && a > b)||((b-a) <= margin && b > a))
    {
      result = 0;
    }
    else if (a < b)
    {
      result = -1;
    }
    else if (a > b)
    {
      result = 1;
    }
    return result;
  }
}
