import { useEffect, useState } from 'react';

type Question = {
    id: string;
    question: string;
    options: string[];
    answer: string;
};

const QuestionsView = () => {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('https://api.quizup.com/questions');
            const data = await response.json();
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.question}</h2>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default QuestionsView;