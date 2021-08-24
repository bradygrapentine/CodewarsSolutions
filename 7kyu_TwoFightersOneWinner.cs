using System;

public class Kata {
  public static string declareWinner(Fighter fighter1, Fighter fighter2, string firstAttacker) {
   while (fighter1.Health > 0 && fighter2.Health > 0) {
      if (firstAttacker == fighter1.Name) {
        fighter2.Health -= fighter1.DamagePerAttack;
        firstAttacker = fighter2.Name;
      } else {
        fighter1.Health -= fighter2.DamagePerAttack;
        firstAttacker = fighter1.Name;
      }
    }
    var winner = fighter1.Health <= 0 ? fighter2 : fighter1;
    return winner.Name;
  }
}

// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
