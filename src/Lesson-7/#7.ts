import { Fighter } from './fighter';

namespace CursoEmVideo_lessons.Lesson_7 {
    class _7 {
        public Lesson () {
            const f: Fighter[]  = []; 

            f[0] = new Fighter (
                "Pretty Boy",
                "France",
                31,
                1.75,
                68.9,
                11,
                2,
                1,
            )
            f[1] = new Fighter (
                "Putscript",
                "Brasil",
                29,
                1.68,
                57.8,
                14,
                2,
                3,
            )
            f[2] = new Fighter (
                "Snapshadow",
                "USA",
                35,
                1.65,
                80.9,
                12,
                2,
                1,
            )
            f[3] = new Fighter (
                "Dead Code",
                "Australia",
                28,
                1.93,
                81.6,
                13,
                0,
                2,
            )
            f[4] = new Fighter (
                "UFOCobol",
                "Brazil",
                37,
                1.70,
                119.3,
                5,
                4,
                3,
            )
            f[5] = new Fighter (
                "Nerdart",
                "USA",
                30,
                1.81,
                105.7,
                12,
                2,
                4,
            )

            f[1].Introduction();
            f[1].Status();

            f[2].Introduction();
            f[2].Status();

            f[3].Introduction();
            f[3].Status();

            f[4].Introduction();
            f[4].Status();

            f[5].Introduction();
            f[5].Status();

            f[6].Introduction();
            f[6].Status();
        }
    }
}