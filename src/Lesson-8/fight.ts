import { Fighter } from "./fighter";

export class Fight {
    private chalenged: Fighter;
    private chalenger: Fighter;
    private rounds: number;
    private aproved: boolean;

    public scheduleFight () {
        this.setAproved();
        if (this.getAproved()) {
            console.log(`Fight scheduled between ${this.getChalenged(Fighter.getName())} and ${this.getChalenger().getName()} for ${this.getRounds()} rounds.`);
        } else {
            console.log("This fight cannot be scheduled.");
        }
    }

    public fight () {
        if (this.getAproved()) {
            
        }
    }

    constructor (
        chalenged: Fighter,
        chalenger: Fighter,
        rounds: number,
    ) {
        this.chalenged = chalenged;
        this.chalenger = chalenger;
        this.rounds = rounds;
    }

    private getChalenged = () => this.chalenged;
    private getChalenger = () => this.chalenger;
    private getRounds = () => this.rounds;
    private getAproved = () => this.aproved;

    private setChalenged = (v: Fighter) => this.chalenged = v;
    private setChalenger = (v: Fighter) => this.chalenger = v;
    private setRounds = (v: number) => this.rounds = v;
    private setAproved () {
        if (Fighter.getClass() === Fighter.getChalenger().getClass()) {
            this.aproved = v;
        } else {
            console.log("Those fighters not allowed to fight against each other.");
            this.aproved = false;
        }
    };
}