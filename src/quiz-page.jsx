import {useState, useEffect} from 'react';

const QuizPage = ({props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    console.log(data);

    return (
        <div>
            
        </div>
    );
}

export default QuizPage;