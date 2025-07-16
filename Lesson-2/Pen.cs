namespace CursoEmVideo_lessons.Lesson_2;

public class Pen
{
    private static string model, color;
    private static int charge;
    private static double point;
    private static bool covered;

    public static int Doodle()
    {
        if (covered == false)
        {
            Console.WriteLine("Doodle");
            return charge--;
        }
        else
        {
            Console.WriteLine("Error! You must uncover first!");
            return charge;
        }
    }

    public static string modelSetter(string var) => model = var;
    public static string colorSetter(string var) => color = var;
    public static int chargeSetter(int var) => charge = var;
    public static double pointSetter(double var) => point = var;
    public static bool coveredSetter(bool var) => covered = var;
    public static bool Cover() => covered = true;
    public static bool Uncover() => covered = false;
}