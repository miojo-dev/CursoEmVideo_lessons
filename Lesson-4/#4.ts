import * as Pen from 'Pen.ts';

namespace CursoEmVideo_lessons.Lesson_4 {
    class _4 {
        public static Lesson() {
            let model: string = "bic";
            let color: string = "blue";
            let charge: number = 100;
            let point: number = 0.5;
            let covered: boolean = true;
            
            console.log (
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
            
            console.log (
                "\nNow you can create again a Pen object!" +
                "\nNow the code will have those new methods we talked about"
            );
            
            Pen1: new Pen2 (
                model, color, charge, point, covered
            );
            
            _4.AccessActions();
            
        }

        public static AccessActions() {

        }
    }
}
