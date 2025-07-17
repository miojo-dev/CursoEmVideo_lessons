namespace CursoEmVideo_lessons.Lesson_6 {
    interface _6 {
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

    export class RemoteControler implements _6 {
        private volume: number;
        private power: boolean;
        private playing: boolean;

        public RemoteControler() {
            this.volume = 50;
            this.power = false;
            this.playing = false;
        }

        getVolume = () => this.volume;
        getPower = () => this.power;
        getPlaying = () => this.playing;
    
        setVolume = (v: number) => this.volume = v;
        setPower = (v: boolean) => this.power = v;
        setPlaying = (v: boolean) => this.playing = v;
    
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
            console.log("Closing menu");
        }
        public volumeUp() {
            if (this.power = true) {
            this.setVolume(this.volume + 5);
            }
        }
        public volumeDown() {
            if (this.power = true) {
            this.setVolume(this.volume - 5);
            }
        }
        public mute() {
            this.setVolume(0);
        }
        public unmute() {
            this.setVolume(50);
        }
        public play() {
            this.setPlaying(true);
        }
        public pause() {
            this.setPlaying(false);
        }
    }
}