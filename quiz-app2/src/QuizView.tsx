import { useState, useEffect } from 'react';

type Question = {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
};

const QuizView = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [, setUserAnswers] = useState<string[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('https://api.quizup.com/questions');
            const data = await response.json();
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    const handleAnswer = (option: string) => {
        setUserAnswers((prev) => [...prev, option]);
        if (option === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Here you could handle the end of the quiz, show results, etc.
            console.log(`Quiz completed. Your score: ${score}/${questions.length}`);
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            {questions.length > 0 && (
                <div>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <ul>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <p>Current Score: {score}</p>
        </div>
    );
};

export default QuizView;