namespace CursoEmVideo_lessons.Lesson_6 {
    interface _Controler {
        on(): void;
        off(): void;
        openMenu(): void;
        closeMenu(): void;
        volumeUp(): void;
        volumeDown(): void;
        mute(): void;
        unmute(): void;
        play(): void;
        pause(): void;
    }

    export class RemoteControler implements _Controler {
        private volume: number;
        private power: boolean;
        private playing: boolean;

        public RemoteControler() {
            this.volume = 50;
            this.power = false;
            this.playing = false;
        }

        private getVolume = () => this.volume;
        private getPower = () => this.power;
        private getPlaying = () => this.playing;
    
        private setVolume = (v: number) => this.volume = v;
        private setPower = (v: boolean) => this.power = v;
        private setPlaying = (v: boolean) => this.playing = v;
    
        public on() {
            this.setPower(true);
        }
        public off() {
            this.setPower(false);
        }
        public openMenu() {
            console.log("\nPower: " + this.getPower());
            console.log("\nPlaying: " + this.getPlaying());
            console.log("\nVolume: " + this.getVolume());
            for (let i = 0; i <= this.getVolume(); i+=10) {
                console.log("|");
            }
        }
        public closeMenu() {
            console.log("Closing menu...");
        }
        public volumeUp() {
            if (this.getPower()) {
            this.setVolume(this.getVolume() + 5);
            }
        }
        public volumeDown() {
            if (this.getPower()) {
            this.setVolume(this.getVolume() - 5);
            }
        }
        public mute() {
            if (this.getPower() && this.getVolume() > 0) {
                this.setVolume(0);
            }
        }
        public unmute() {
            if (this.getPower() && this.getVolume() == 0) {
                this.setVolume(50);
            }
        }
        public play() {
            if (this.getPower() && !(this.getPlaying())) {
                this.setPlaying(true);
            }
        }
        public pause() {
            if (this.getPower() && (this.getPlaying())) {
                this.setPlaying(false);
            }
        }
    }
}