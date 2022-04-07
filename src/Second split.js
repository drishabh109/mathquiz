import './App.css';
import {useState} from 'react';

function Second() {
    const questions = [
		{
			questionText: '765+897 ?',
			answerOptions: [
				{ answerText: '1437', isCorrect: false },
				{ answerText: '1467', isCorrect: false },
				{ answerText: '1348', isCorrect: false },
				{ answerText: '1662', isCorrect: true },
			],
		},
		{
			questionText: '455+57 ?',
			answerOptions: [
				{ answerText: '527', isCorrect: false },
				{ answerText: '576', isCorrect: false },
				{ answerText: '512', isCorrect: true },
				{ answerText: '532', isCorrect: false },
			],
		},
		{
			questionText: '884/13 ?',
			answerOptions: [
				{ answerText: '58', isCorrect: false },
				{ answerText: '56', isCorrect: false },
				{ answerText: '66', isCorrect: false },
				{ answerText: '68', isCorrect: true },
			],
		},
		{
			questionText: '56*76 ?',
			answerOptions: [
				{ answerText: '4266', isCorrect: false },
				{ answerText: '4248', isCorrect: false },
				{ answerText: '4288', isCorrect: false },
				{ answerText: '4256', isCorrect: true },
			],
		},
		{
			questionText: '45557-65 ?',
			answerOptions: [
				{ answerText: '45492', isCorrect: true },
				{ answerText: '45878', isCorrect: false },
				{ answerText: '44787', isCorrect: false },
				{ answerText: '44879', isCorrect: false },
			],
		},
		{
			questionText: '76*65 ?',
			answerOptions: [
				{ answerText: '4946', isCorrect: false },
				{ answerText: '4940', isCorrect: true },
				{ answerText: '4942', isCorrect: false },
				{ answerText: '4976', isCorrect: false },
			],
		},
		{
			questionText: '455*57 ?',
			answerOptions: [
				{ answerText: '25926', isCorrect: false },
				{ answerText: '25944', isCorrect: false },
				{ answerText: '24956', isCorrect: false },
				{ answerText: '25935', isCorrect: true },
			],
		},
		{
			questionText: '815-45 ?',
			answerOptions: [
				{ answerText: '750', isCorrect: false },
				{ answerText: '770', isCorrect: true },
				{ answerText: '760', isCorrect: false },
				{ answerText: '780', isCorrect: false },
			],
		},
		{
			questionText: '679+98665 ?',
			answerOptions: [
				{ answerText: '98764', isCorrect: false },
				{ answerText: '99344', isCorrect: true },
				{ answerText: '98765', isCorrect: false },
				{ answerText: '95437', isCorrect: false },
			],
		},
		{
			questionText: '2358*26 ?',
			answerOptions: [
				{ answerText: '61308', isCorrect: true },
				{ answerText: '63459', isCorrect: false },
				{ answerText: '63322', isCorrect: false },
				{ answerText: '68904', isCorrect: false },
			],
		},
		{
			questionText: '254+40 ?',
			answerOptions: [
				{ answerText: '288', isCorrect: false },
				{ answerText: '286', isCorrect: false },
				{ answerText: '294', isCorrect: true },
				{ answerText: '285', isCorrect: false },
			],
		},
		{
			questionText: '15/3 ?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: '2444-45 ?',
			answerOptions: [
				{ answerText: '2399', isCorrect: true },
				{ answerText: '2402', isCorrect: false },
				{ answerText: '2394', isCorrect: false },
				{ answerText: '2411', isCorrect: false },
			],
		},
		{
			questionText: '455*57 ?',
			answerOptions: [
				{ answerText: '25926', isCorrect: false },
				{ answerText: '25944', isCorrect: false },
				{ answerText: '24956', isCorrect: false },
				{ answerText: '25935', isCorrect: true },
			],
		},{
			questionText: '455/7 ?',
			answerOptions: [
				{ answerText: '67', isCorrect: false },
				{ answerText: '63', isCorrect: false },
				{ answerText: '60', isCorrect: false },
				{ answerText: '65', isCorrect: true },
			],
		},
		{
			questionText: '6458+6532 ?',
			answerOptions: [
				{ answerText: '12280', isCorrect: false },
				{ answerText: '12990', isCorrect: true },
				{ answerText: '12870', isCorrect: false },
				{ answerText: '11670', isCorrect: false },
			],
		},
		{
			questionText: '4456-258 ?',
			answerOptions: [
				{ answerText: '4189', isCorrect: false },
				{ answerText: '4076', isCorrect: false },
				{ answerText: '4198', isCorrect: true },
				{ answerText: '4078', isCorrect: false },
			],
		},
		{
			questionText: '56*76 ?',
			answerOptions: [
				{ answerText: '4266', isCorrect: false },
				{ answerText: '4248', isCorrect: false },
				{ answerText: '4288', isCorrect: false },
				{ answerText: '4256', isCorrect: true },
			],
		},
        {
			questionText: '356*76 ?',
			answerOptions: [
				{ answerText: '4266', isCorrect: false },
				{ answerText: '4248', isCorrect: false },
				{ answerText: '4288', isCorrect: false },
				{ answerText: '4256', isCorrect: true },
			],
		},
        {
			questionText: '275/25 ?',
			answerOptions: [
				{ answerText: '11', isCorrect: true },
				{ answerText: '15', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '16', isCorrect: false },
			],
		},



	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return (
        <>{showScore ? (
            <div className='score-section'>
                You scored {score} out of {questions.length}
            </div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
        )}</>
    );
  }
  
  export default Second;