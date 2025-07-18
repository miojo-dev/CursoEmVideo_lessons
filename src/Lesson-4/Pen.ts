namespace CursoEmVideo_lessons.Lesson_2 {
    export class Pen2 {
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

        public modelSetter(pen: string) {
          this.model = pen; 
          return console.log("model = ${model}")
        }
        public colorSetter(pen: string) {
            this.color = pen;
            return console.log("color = ${color}")
        }
        public chargeSetter(pen: number) {
            this.charge = pen;
            return console.log("charge = ${charge}")
        }
        public pointSetter(pen: number) {
            this.point = pen;
            return console.log("point = ${point}")
        }
        public coveredSetter(pen: boolean) {
            this.covered = pen;
            return console.log("covered = ${covered}")
        }
        public modelGetter() {
            return console.log("model = ${model}")
        }
        public colorGetter() {
            return console.log("color = ${color}")
        }
        public chargeGetter() {
            return console.log("charge = ${charge}")
        }
        public pointGetter() {
            return console.log("point = ${point}")
        }
        public coveredGetter() {
            return console.log("covered = ${covered}")
        }
    }
}