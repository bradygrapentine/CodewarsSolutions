using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Solution
{
    class Kata
    {
        public static bool is_valid_IP(string ipAddres)
        {
          var spltIP = ipAddres.Split('.');
          if (spltIP.Length != 4) {
            return false;
          }
          var letterCount = Regex.Matches(ipAddres,@"[a-zA-Z]").Count;
          if (letterCount > 0) {
            return false;
          }
          
          for (var i = 0; i < 4; i++) {
            if (spltIP[i].Length == 0) {
              return false;
            } else if (spltIP[i][0] == '0' && spltIP[i].Length > 1) {
              return false;
            } else if (Convert.ToInt32(spltIP[i]) > 255 || Convert.ToInt32(spltIP[i]) < 0) {
              return false;
            } else if (spltIP[i].Contains(' ')) {
              return false;
            }
          }
          return true;
        }
    }
}

// https://www.codewars.com/kata/515decfd9dcfc23bb6000006
