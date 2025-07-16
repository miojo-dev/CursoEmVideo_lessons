using System.Security.AccessControl;

namespace CursoEmVideo_lessons.Lesson_2;

public static class _2
{
    public static void Lesson()
    {
        string model, color;
        int charge;
        double point;
        bool covered;
        
        Console.WriteLine(
            "Here you can create a Pen object!" +
            "\nJust input Model, Color, Charge(0 -> 100), Point Size and if it's covered"
            );
        
        model = Console.ReadLine();
        color = Console.ReadLine();
        charge = int.Parse(Console.ReadLine());
        point = double.Parse(Console.ReadLine());
        covered = bool.Parse(Console.ReadLine());
        
        Pen Pen1 = new Pen();

        Pen.modelSetter(model);
        Pen.colorSetter(color);
        Pen.chargeSetter(charge);
        Pen.pointSetter(point);
        Pen.coveredSetter(covered);
        
        AccessActions();
        
    }

    public static void AccessActions()
    {
        int Action;
        Console.Clear();
        Console.WriteLine(
            "1 - Open Pen" +
            "\n2 - Close Pen" +
            "\n3 - Doodle" +
            "\nClose actions"
            );
        
        Action = int.Parse(Console.ReadLine());
        
        switch (Action)
        {
            case 1:
            {
                Pen.Uncover();
                AccessActions();
            }
                break;
            case 2:
            {
                Pen.Cover();
                AccessActions();
            }
                break;
            case 3:
            {
                Pen.Doodle();
                AccessActions();
            }
                break;
        }
    }
}
