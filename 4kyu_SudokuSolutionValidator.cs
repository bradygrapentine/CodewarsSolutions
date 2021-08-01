using System;
using System.Linq;
using System.Collections.Generic;

public class Sudoku
{
  public static bool ValidateSolution(int[][] board)
  {
    var groups = new List<List<int>>();
    
    for (var i = 0; i < 9; i++) {
      var column = new List<int>();
      foreach (var row in board) {
        column.Add(row[i]);
      }
      groups.Add(column);
      groups.Add(board[i].ToList());
    }
    
    for (var j = 0; j < 9; j+=3) {
      var subgrid1 = new List<int>();
      var subgrid2 = new List<int>();
      var subgrid3 = new List<int>();
      
      subgrid1.Add(board[j][0]);
      subgrid1.Add(board[j][1]);
      subgrid1.Add(board[j][2]);
      
      subgrid1.Add(board[j+1][0]);
      subgrid1.Add(board[j+1][1]);
      subgrid1.Add(board[j+1][2]);
                  
      subgrid1.Add(board[j+2][0]);
      subgrid1.Add(board[j+2][1]);
      subgrid1.Add(board[j+2][2]);
      
      groups.Add(subgrid1);
            
      subgrid2.Add(board[j][3]);
      subgrid2.Add(board[j][4]);
      subgrid2.Add(board[j][5]);
            
      subgrid2.Add(board[j+1][3]);
      subgrid2.Add(board[j+1][4]);
      subgrid2.Add(board[j+1][5]);
                  
      subgrid2.Add(board[j+2][3]);
      subgrid2.Add(board[j+2][4]);
      subgrid2.Add(board[j+2][5]);
      
      groups.Add(subgrid2);
            
      subgrid3.Add(board[j][6]);
      subgrid3.Add(board[j][7]);
      subgrid3.Add(board[j][8]);

      subgrid3.Add(board[j+1][6]);
      subgrid3.Add(board[j+1][7]);
      subgrid3.Add(board[j+1][8]);
                  
      subgrid3.Add(board[j+2][6]);
      subgrid3.Add(board[j+2][7]);
      subgrid3.Add(board[j+2][8]);
      
      groups.Add(subgrid3);         
    }
    
    foreach (var subarray in groups) {
      if (!(subarray.OrderBy(num => num).SequenceEqual(new List<int>() {1,2,3,4,5,6,7,8,9}))) {
        return false;
      }
    }
    return true;
  }
}

// https://www.codewars.com/kata/529bf0e9bdf7657179000008
