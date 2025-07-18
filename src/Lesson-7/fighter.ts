namespace CursoEmVideo_lessons.Lesson_7 {
    export class Fighter {
        private name: string;
        private nacionality: string;
        private age: number;
        private height: number;
        private weight: number;
        private class: string;
        private wins: number;
        private loses: number;
        private draw: number;

        public Introduction() {
            console.log (
                "-----${getName()}-----" +
                "nOrigin: ${getNacionalidade()}" +
                "n${getAge()} anos" +
                "n${getHeight()}m" +
                "nWeigth: ${getWeight()}Kg" +
                "nWon: ${getWins()}" +
                "nLose: ${getLoses()}" +
                "nDraw: ${getDraw()}"
                );
        }
        public Status() {
            console.log (
                "Class: ${getClass()}" +
                "nWon: ${getWins()}" +
                "nLose: ${getLoses()}" +
                "nDraw: ${getDraw()}"
                );
        }
        public WinFight() {
            this.setWins(this.getWins() + 1);
        }
        public LoseFight() {
            this.setLoses(this.getLoses() + 1);
        }
        public DrawFight() {
            this.setDraw(this.getDraw() + 1);
        }

        //Constructor
        constructor (
            name,
            nacionality,
            age,
            height,
            weight,
            wins,
            loses,
            draw,
        ) {
            this.name = name;
            this.nacionality = nacionality;
            this.age = age;
            this.height = height;
            this.setWeight(weight);
            this.wins = wins;
            this.loses = loses;
            this.draw = draw;
        }

        //Getters
        private getName = () => this.name;
        private getNacionality = () => this.nacionality;
        private getAge = () => this.age;
        private getHeight = () => this.height;
        private getWeight = () => this.weight;
        private getClass = () => this.class;
        private getWins = () => this.wins;
        private getLoses = () => this.loses;
        private getDraw = () => this.draw;

        //Setters
        private setName = (v: string) => this.name = v;
        private setNacionality = (v: string) => this.nacionality = v;
        private setAge = (v: number) => this.age = v;
        private setHeight = (v: number) => this.height = v;
        private setWeight (v: number) {
            this.weight = v;
            this.setClass();
        }
        private setClass () {
            if (this.getWeight() < 52.2) {
                this.class = "Invalid"
            } else if (this.getWeight() <= 70.3) {
                this.class = "Light"
            } else if (this.getWeight() <= 83.9) {
                this.class = "Medium"
            } else if (this.getWeight() <= 102.2) {
                this.class = "Heavy"
            } else {
                this.class = "Invalid"
            }

        }
        private setWins = (v: number) => this.wins = v;
        private setLoses = (v: number) => this.loses = v;
        private setDraw = (v: number) => this.draw = v;
    }
}