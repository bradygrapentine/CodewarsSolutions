using System.Linq;
using System.Collections.Generic;

public static class Kata
{
  public static int CountSmileys(string[] smileys) 
  {
    var smileyCount = 0;
    foreach(string smiley in smileys)
    {
      if (smiley == ";-)" || smiley == ";-D" || smiley == ";~)" || smiley == ";~D" || smiley == ":-)" || smiley == ":-D" || smiley == ":~)" || smiley == ":~D"|| smiley == ":)" || smiley == ":D" || smiley == ";)" || smiley == ";D" )
      {
        smileyCount += 1;
      }
    }
    return smileyCount;
  }
}
