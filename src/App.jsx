import { useState } from 'react'
import StartPage from './start-page'
import QuizPage from './quiz-page'
import './App.css'

const App = () => {
const [startPage, setStartPage] = useState(true);

const startQuiz = () => {
  setStartPage(false);
}

  return (
    <>
      {startPage && <StartPage startPage={startPage} startQuiz={startQuiz} />}
      {!startPage && <QuizPage />}
    </>
  )
}

export default App
