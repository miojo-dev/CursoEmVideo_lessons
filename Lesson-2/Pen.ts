namespace CursoEmVideo_lessons.Lesson_2 {
    class Pen {
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

        public Doodle(covered : boolean, charge: number){
            if (covered == false) {
                console.log("Doodle");
                return charge--;
            } else {
                console.log("Error! You must uncover first!");
                return charge;
            }
        }

        public modelSetter(pen: string) {
            this.model = pen;
        }
        public colorSetter(pen: string) {
            this.color = pen;
        }
        public chargeSetter(pen: number) {
            this.charge = pen;
        }
        public pointSetter(pen: number) {
            this.point = pen;
        }
        public coveredSetter(pen: boolean) {
            this.covered = pen;
        }
        public Cover() {
            this.covered = true;
        }
        public Uncover() {
            this.covered = false;
        }
    }
}