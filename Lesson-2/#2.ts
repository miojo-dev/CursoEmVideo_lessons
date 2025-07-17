import * as Pen from 'Pen.ts';

namespace CursoEmVideo_lessons.Lesson_2{
    class _2
    {
        public static Lesson(){
            let model, color: string = "blue pen";
            let charge: number = 100;
            let point: number = 0.5;
            let covered: boolean = true;
            
            console.log("Here you can create a Pen object!");
            
            
            Pen1: new Pen(
                model,
                color,
                charge,
                point,
                covered
            );

            Pen.modelSetter(model);
            Pen.colorSetter(color);
            Pen.chargeSetter(charge);
            Pen.pointSetter(point);
            Pen.coveredSetter(covered);
            
            _2.AccessActions();
            
        }

        public static AccessActions()
        {
            console.clear();
            console.log(
                "1 - Open Pen" +
                "\n2 - Close Pen" +
                "\n3 - Doodle" +
                "\nClose actions"
                );
            Pen.Cover();
            Pen.Uncover();
            Pen.Doodle();
        }
    }
}
