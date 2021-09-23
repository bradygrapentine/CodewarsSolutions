using System;

public class Kata
{
  public static string Rgb(int r, int g, int b) 
  {
    r = r > 255 ? 255: r < 0 ? 0: r;
    g = g > 255 ? 255: g < 0 ? 0: g;
    b = b > 255 ? 255: b < 0 ? 0: b;
    
    var hexR = r.ToString("X").Length == 2 ? r.ToString("X"): r < 16 ? "0" + r.ToString("X"): r.ToString("X") + "0";
    var hexG = g.ToString("X").Length == 2 ? g.ToString("X"): g < 16 ? "0" + g.ToString("X"): g.ToString("X") + "0";
    var hexB = b.ToString("X").Length == 2 ? b.ToString("X"): b < 16 ? "0" + b.ToString("X"): b.ToString("X") + "0";
    
    return hexR + hexG + hexB;
  }
}

// https://www.codewars.com/kata/513e08acc600c94f01000001
