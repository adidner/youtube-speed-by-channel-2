

interface timeDataInterface {
    time: number;
    id: string;
    channels: string[];
    titles: string[];
}

const fakeTimeData: timeDataInterface[] = [
    {
        time: 1.5,
        id: "0",
        channels: [
            "Graham Stephen",
            "Andrei Jikh",
            "Ali Abdaal",
            "Coin Bureau"
        ],
        titles: [
            "Programming",
            "Coding",
            "CSS",
            "JS",
            "Javascript",
            "HTML",
            "React"
        ]
    },
    {
        time: 2.35,
        id: "1",
        channels: [
            "D&D",
            "Dungeons and Dragons",
            "Josh Fenn"
        ],
        titles: [
            "Housing",
            "House",
            "Pokemon",
            "Elden",
            "Cosplay",
            "Costume"
        ]
    },
];

export { fakeTimeData };
export type { timeDataInterface };
