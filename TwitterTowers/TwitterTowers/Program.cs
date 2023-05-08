// See https://aka.ms/new-console-template for more information
class Program
{
 
    //פונקציה להדפסת מגדל משולש
    //מחשבת כמה שורות שהם לא הראשונות או האחרונות יש וכמה צריך להדדפיס מכל אחד 
    public static void PrintTriangle(int height, int width)
    {
        int mone = 1,sum=0,moneRow=0;
        if (width % 2 == 0 || width > height * 2)
            Console.WriteLine("The triangle cannot be printed");
        else
        {
            while (mone!=width)
            {
                sum++;
                mone += 2;
            }
            mone = 1;
            int numRow = (height - 2) / (sum-1);
            int rest = (height - 2) % (sum-1);
            int numRowFor = 0, moneSpace = (width - 1) / 2;
            for (int i = 0; i <=height&&mone<=width; i++)
            {
                if (mone==1||mone==width)
                {
                     numRowFor = 1;
                }
                else
                {   
                     numRowFor=numRow; 
                    if (mone == 3)
                    {
                        numRowFor += rest;
                    }
                }
                for (int k = 0; k < numRowFor; k++)
                {
                    for (int j = 0; j < moneSpace; j++)
                    {
                        Console.Write(" ");
                    }


                    for (int j = 0; j < mone; j++)
                    {
                        Console.Write('*');
                    }
                    Console.WriteLine("");
                }
                i++;
                mone += 2;
                moneSpace--;
               
            }
        }
    }
    //פונקציה שאחראית על מגדל מלבן
    public static void RectangularTower(int height,int width)
    {
        if (height == width || Math.Abs(height - width) > 5)
        {
            Console.WriteLine("The area of the tower: " + height * width);
        }
        else
        {
            Console.WriteLine("The perimeter of the tower: " + (height * 2 + width * 2));
        }
    }
    //פונקציה שאחראית על מגדל משולש 
    public static void TriangleTower(int height, int width)
    {
        Console.WriteLine("Enter your choice\n" +
            "1-The perimeter of the triangle\n" +
            "2-print the triangle");
        int choice=int.Parse(Console.ReadLine());
        switch (choice)
        {
            case 1:
                double side =Math.Sqrt( Math.Pow(height, 2) + Math.Pow(width, 2));
                Console.WriteLine("The perimeter of the triangle: "+(width+ (2*side)));
                break;
                    case 2:
           PrintTriangle(height,width);
                        break;
            default:
                break;
        }
    }

    public static void Main(string[] args)
    {

        Console.WriteLine("Enter your choice:\n" +
            "1- rectangular tower\n" +
            "2- triangle tower\n" +
            "3-exit");
        int option = int.Parse(Console.ReadLine());
        while (option!=3)
        {
            Console.WriteLine("Enter the height and width of the tower");
            int height=int.Parse(Console.ReadLine());
            int width=int.Parse(Console.ReadLine());
            switch (option)
            {
                case 1:
                    RectangularTower(height,width);
                  break;
                    case 2:
                    TriangleTower(height, width);
                        break;
                default:
                    break;
            }

            Console.WriteLine("Enter your choice:\n" +
                "1- rectangular tower\n" +
              "2- triangle tower\n" +
            "3-exit");
            option = int.Parse(Console.ReadLine());
        }
    }
}
