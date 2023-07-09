const StartPage = ({ startQuiz }) => {

    return (
        <section>
            <h1>Quizical</h1>
            <p>Get ready to learn!</p>
            <button onClick={startQuiz}>Start Quiz</button>
        </section>
    )
}

export default StartPage;