using System;
using System.Collections.Generic;
using System.Linq;

public class TicTacToe
{
  public int IsSolved(int[,] board)
  {    
    if (board[0,0] == board[0,1] && board[0,2] == board[0,1] && board[0,0] != 0) {
      return board[0,0];
    }
    if (board[1,0] == board[1,1] && board[1,2] ==  board[1,1] && board[1,0] != 0) {
      return board[1,0];
    }       
    if (board[2,0] == board[2,1] && board[2,2] == board[2,1] && board[2,0] != 0) {
      return board[2,0];
    }      
    if (board[0,0] == board[1,0] && board[2,0] == board[1,0] && board[0,0] != 0) {
      return board[0,0];
    }     
    if (board[0,1] == board[1,1] && board[2,1] == board[1,1] && board[0,1] != 0) {
      return board[0,1];
    }
    if (board[0,2] == board[1,2] && board[2,2] == board[1,2] && board[0,2] != 0) {
      return board[0,2];
    }
    if (board[0,0] == board[1,1] && board[2,2] == board[1,1] && board[0,0] != 0) {
      return board[0,0];
    }
    if (board[0,2] == board[1,1] && board[2,0] == board[1,1] && board[0,2] != 0) {
      return board[0,0];
    }
    var zeros = board.Cast<int>().Any(num => num == 0); // .Cast<int> flattens 2D array into 1D array
    return zeros ? -1 : 0;
  }
}

// https://www.codewars.com/kata/525caa5c1bf619d28c000335
