using System;
using System.Collections.Generic;
using System.Linq;

public class StockList {

    public static string stockSummary(String[] lstOfArt, String[] lstOf1stLetter) {
      var result  = "";
      if (lstOfArt.Length == 0 || lstOf1stLetter.Length == 0) {
        return result;
      }
      Dictionary<string,int> bookCounts = new Dictionary<string,int>();
      foreach (var letter in lstOf1stLetter) {
        bookCounts.Add(letter,0);
      }
      foreach (var bookAndValue in lstOfArt) {
        var spltBook = bookAndValue.Split(" ");
        var book = spltBook[0];
        for (var j = 0; j < book.Length; j++) {
          if (bookCounts.ContainsKey(book[j].ToString())) {
            bookCounts[book[j].ToString()] += Convert.ToInt32(spltBook[1]);
            break;
          }
        }
      }
      var resultKeys = bookCounts.Keys.ToArray();
      var resultValues = bookCounts.Values.ToArray();
      for (var i = 0; i < resultValues.Count()-1; i++) {
        var nextValue = $"({resultKeys[i]} : {resultValues[i]}) - ";
        result += nextValue;
      }
      result += $"({resultKeys[resultKeys.Count()-1]} : {resultValues[resultValues.Count()-1]})";
      return result;
    }
}

// https://www.codewars.com/kata/54dc6f5a224c26032800005c
