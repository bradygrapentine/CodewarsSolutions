public class Kata
{
  public static bool IsValidWalk(string[] walk)
  {
    var locationX = 0;
    var locationY = 0;
    var stepCount = 0;
    foreach (var step in walk) {
      stepCount++;
      if (step =="n") {
        locationY++;
      }
      else if (step =="e") {
        locationX++;
      }
      else if (step =="s") {
        locationY--;
      }
      else if (step =="w") {
        locationX--;
      }
    }
    
// ---------------------------------------------------------- //
    
    if (locationX == 0 && locationY == 0 && stepCount == 10) 
    {
      return true;
    }
    else {
      return false;
    }
  }
}
