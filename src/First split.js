import './App.css';
import {useState} from 'react';

function First() {
	const AB = Math.floor(Math.random()*11) ;
    const BC = Math.floor(Math.random()*11) ;
	const arrOperators =
 [  {A:"-", B:function (){return AB - BC}},
	{A:"/", B:function (){return AB / BC}},
	{A:"+", B:function (){return AB + BC}},
	{A:"*", B:function (){return AB * BC}}   ];
	const iRandom = Math.floor((Math.random()*arrOperators.length)); 
    const r = arrOperators[iRandom].A; 
	const s = arrOperators[iRandom].B();  

    const questions = [
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
			],
		},
		{
			questionText: ("Calculate "+String(AB)+(r)+String(BC)+ " ?") ,
			answerOptions: [
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
				{ answerText: (s.toFixed('1')) , isCorrect: true },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1') , isCorrect: false },
				{ answerText: (Math.floor(Math.random()*20)).toFixed('1'), isCorrect: false },
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
        <>
        {showScore ? (
				<div className='score-section'>
				<h1 style={{fontFamily:"arian"}}>	You scored {score} out of {questions.length} </h1>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<h2><span>Question {currentQuestion + 1}</span>/{questions.length}</h2>
						</div>
						<h4><div className='question-text'>{questions[currentQuestion].questionText}</div></h4>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
        </>
    );
  }
  
  export default First;
