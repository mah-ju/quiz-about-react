export type Question = {
question: string;
options: {
    text: string;
    isCorrect: boolean;
}[];
}