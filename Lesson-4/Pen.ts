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

        public static modelSetter(pen: string) {
          this.model = pen; 
          return console.log("model = ${model}")
        }
        public static colorSetter(pen: string) {
            this.color = pen;
            return console.log("color = ${color}")
        }
        public static chargeSetter(pen: number) {
            this.int = pen;
            return console.log("charge = ${charge}")
        }
        public static pointSetter(pen: number) {
            this.double = pen;
            return console.log("point = ${point}")
        }
        public static coveredSetter(pen: boolean) {
            this.bool = pen;
            return console.log("covered = ${covered}")
        }
        public static modelGetter() {
            return console.log("model = ${model}")
        }
        public static colorGetter() {
            return console.log("color = ${color}")
        }
        public static chargeGetter() {
            return console.log("charge = ${charge}")
        }
        public static pointGetter() {
            return console.log("point = ${point}")
        }
        public static coveredGetter() {
            return console.log("covered = ${covered}")
        }
    }
}