using System;

public static class Kata 
{
    public static string ExpandedForm(long num) 
    {
       var numAsArray = num.ToString().ToCharArray();
       var result = "";
       for (var i=0; i<numAsArray.Length; i++) {
         if (numAsArray[i] != '0') {
           var lastMinusCurrentIndx = numAsArray.Length - 1 - i;
           result += numAsArray[i].ToString();
           for (var j=0; j < lastMinusCurrentIndx; j++) {
             result += "0";    
           }
           result += " + ";
         }
       }
       result = result.Substring(0,result.Length-3);
       return result;
    }
}

// https://www.codewars.com/kata/5842df8ccbd22792a4000245
