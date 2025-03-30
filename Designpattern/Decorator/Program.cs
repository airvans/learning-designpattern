
using Microsoft.VisualBasic;

public interface Coffee{

   double cost();
   void description();

}


class Damn{

    static void Main(string[] args){


    }

}



class Starter : Coffee
{
    public double cost()
    {
        return 0;
    }

    public void description()
    {
        Console.WriteLine("plain coffee");
    }
}
class Mocha : Coffee
{
    
    Coffee coffee;

    public Mocha(Coffee coffee)
    {
        this.coffee = coffee;
    }

    public double cost()
    {
        return coffee.cost() + 5; 
    }

    public void description()
    {
        Console.WriteLine("coffee made with mocha");
    }
}

class Soy : Coffee
{
    Coffee coffee;

    public Soy(Coffee coffee)
    {
        this.coffee = coffee;
    }

    public double cost()
    {
        return coffee.cost() + 11; 
    }

    public void description()
    {
        Console.WriteLine("coffee made with soy");
    }
}
