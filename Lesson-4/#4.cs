using CursoEmVideo_lessons.Lesson_2;

namespace CursoEmVideo_lessons.Lesson_4;

public class _4
{
    public static void Lesson()
    {
        string model, color;
        int charge;
        double point;
        bool covered;
        
        Console.WriteLine(
            "Now we're gonna talk about special methods" +
            "\n" +
            "\nIn OOP you can access information directly, but that's not the best way," +
            "\nit's better to use a Getter method, this method you define inside a class" +
            "\nso any object can be accessed with his own getter, it's more complex but better " +
            "\nfor security reasons(the same for the other especial methods)" +
            "\n" +
            "\nAnd you can do the same in the other direction, the modifier method or Just Setter" +
            "\n" +
            "\nAnd for last, but not least we have the Construct method witch makes the object " +
            "\ninstantiation easier"
            );
        
        Console.WriteLine(
            "Here you can create a Pen2 object!" +
            "\nJust input Model, Color, Charge(0 -> 100), Point Size and if it's covered"
        );
        
        model = Console.ReadLine();
        color = Console.ReadLine();
        charge = int.Parse(Console.ReadLine());
        point = double.Parse(Console.ReadLine());
        covered = bool.Parse(Console.ReadLine());
        
        Pen2 Pen1 = new Pen2();

        Pen2.modelSetter(model);
        Pen2.colorSetter(color);
        Pen2.chargeSetter(charge);
        Pen2.pointSetter(point);
        Pen2.coveredSetter(covered);
        
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
                Pen2.Uncover();
                AccessActions();
            }
                break;
            case 2:
            {
                Pen2.Cover();
                AccessActions();
            }
                break;
            case 3:
            {
                Pen2.Doodle();
                AccessActions();
            }
                break;
        }
    }
}