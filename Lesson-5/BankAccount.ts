namespace CursoEmVideo_lessons.Lesson_5 {
    class BankAccount {
        //Attributes
        public numAcc: number;
        protected type: string;
        private owner: string;
        private balance: number;
        private status: boolean;
        
        //Methods

        public openAcc (t: string) {
            this.setType(t);
            this.setStatus(true)
            if (t = "cc") {
                this.setBalance(50);
            } else if (t = "cp") {
                this.setBalance(150);
            }
        }

        public closeAccount () {
            if (this.balance = 0) {
                this.setStatus(false);
            } else {
                console.error("You cannot do this operation now");
            }
        }

        public deposit (amount: number) {
            if (this.status = true) {
                this.setBalance(this.getBalance() + amount);
            } else {
                console.error("Error! Invalid account");
            }

        }

        public withdraw (amount: number) {
            if(this.status = true){
                if (this.balance >= amount) {
                    this.setBalance(this.getBalance() - amount);
                } else {
                    console.error (
                        "You don't have enough " +
                        "balance for this withdraw"
                    );
                }
            } else {
                console.error(
                    "Impossible to withdraw"
                );
            }

        }

        public payMonthlyFee () {
            fee: Number;
            if (this.type = "cc") {
                let fee = 12;
            } else if (this.type = "cp") {
                let fee = 20;
            }
            
        }

        //Special methods
        
        //Constructor
        public constructor () {
            this.balance = 0;
            this.status = false;
        }

        //Getters
        public getNumAcc = () => this.numAcc;
        public getType = () => this.type;
        public getOwner = () => this.owner;
        public getBalance = () => this.balance;
        public getStatus = () => this.status;

        //Setetrs
        public setNumAcc = (n: number) => this.numAcc = n;
        public setType = (c: string) => this.type = c;
        public setOwner = (c: string) => this.owner = c;
        public setBalance = (n: number) => this.balance = n;
        public setStatus = (b: boolean) => this.status = b;
    }
}
