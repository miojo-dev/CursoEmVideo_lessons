namespace CursoEmVideo_lessons.Lesson_2 {
    class Pen2 {
        model: string; 
        color: string;
        charge: number;
        point: number;
        covered : boolean;

        constructor (
            model: string,
            color: string,
            charge: number,
            point: number,
            covered : boolean
        ){
            this.model;
            this.color;
            this.charge;
            this.point;
            this.covered;
        }

        public static Doodle(covered, charge)
        {
            if (covered == false)
            {
                console.log("Doodle");
                return charge--;
            }
            else
            {
                console.log("Error! You must uncover first!");
                return charge;
            }
        }

        //Setters
        public static modelSetter(pen: string) {
          this.model = pen; 
        }
        public static colorSetter(pen: string) {
          this.color = pen; 
        }
        public static hargeSetter(pen: number) {
            this.int = pen;
        }
        public static pointSetter(pen: number) {
            this.double = pen;
        }
        public static coveredSetter(pen: boolean) {
            this.bool = pen;
        }
        public static modelGetter(pen: string) {
            this.string = pen;
        }
        public static colorGetter(pen: string) {
            this.string = pen;
        }
        public static hargeGetter(pen: number) {
            this.int = pen;
        }
        public static pointGetter(pen: number) {
            this.double = pen;
        }
        public static coveredGetter(pen: boolean) {
            this.boolean = pen;
        }
        public static Cover() {} covered = true;
        public static uncover() {} covered = false;
    }
}