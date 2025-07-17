namespace CursoEmVideo_lessons.Lesson_2{
    class _2
    {
        public static Lesson(){
            let model, color: string = "blue pen";
            let charge: number = 100;
            let point: number = 0.5;
            let covered: boolean = true;
            
            console.log("Here you can create a Pen object!");
            
            
            const Pen1: Pen = new Pen(
                model,
                color,
                charge,
                point,
                covered
            );

            Pen1.modelSetter(model);
            Pen1.colorSetter(color);
            Pen1.chargeSetter(charge);
            Pen1.pointSetter(point);
            Pen1.coveredSetter(covered);
            
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
            Pen1.cover();
            Pen1.uncover();
            Pen1.doodle();
        }
    }
}
