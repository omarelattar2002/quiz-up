import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuestionsView from './QuestionsView';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/questions" element={<QuestionsView />} />
                <Route path="/" element={<div>Welcome to Quiz Up!</div>} />
            </Routes>
        </Router>
    );
};

export default App;
