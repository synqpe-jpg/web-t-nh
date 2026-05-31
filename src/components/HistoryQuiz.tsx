import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Who is considered the "Father of Theoretical AI" and proposed the "Imitation Game" standard of machine intelligence?',
    options: ['John McCarthy', 'Alan Turing', 'Marvin Minsky', 'Geoffrey Hinton'],
    answerIndex: 1,
    explanation: 'Alan Turing proposed the Turing Test (originally the "Imitation Game") in his groundbreaking 1950 paper "Computing Machinery and Intelligence" to establish an objective measurement of artificial intelligence.',
  },
  {
    id: 2,
    question: 'In which year and workshop was the term "Artificial Intelligence" officially coined and established as a scientific field?',
    options: ['1950 - London Computing Symposium', '1956 - Dartmouth Summer Research Project', '1969 - MIT Cognitive Science Assembly', '1958 - Cornell Perceptron Lab'],
    answerIndex: 1,
    explanation: 'The term was coined by John McCarthy in 1955 in preparation for the historic Dartmouth Summer Research Project on Artificial Intelligence held in the summer of 1956.',
  },
  {
    id: 3,
    question: 'What mathematical limitation did Marvin Minsky and Seymour Papert prove about single-layer perceptrons in their controversial 1969 book?',
    options: [
      'They could not calculate the Exclusive OR (XOR) function.',
      'They required too much electrical power to operate.',
      'They could only run on specialized quantum circuits.',
      'They could not store more than 10 memory tokens.',
    ],
    answerIndex: 0,
    explanation: 'They proved mathematically that single-layer perceptrons could not compute non-linearly separable operations (like the XOR logic gate), leading many to abandon neural network research in favor of symbolic AI.',
  },
  {
    id: 4,
    question: 'What devastating 1973 report evaluating research in the United Kingdom triggered the First AI Winter?',
    options: ['The McCarthy Manifesto', 'The Lighthill Report', 'The Alvey Programme Review', 'The Turing Audit'],
    answerIndex: 1,
    explanation: 'Sir James Lighthill published a highly critical report characterizing AI accomplishment as "disappointing" and citing "combinatorial explosion" barriers. This triggered near-complete funding withdrawals in the UK.',
  },
  {
    id: 5,
    question: 'Which historical Google research paper published in 2017 presented the "Transformer" architecture, which now powers almost all modern Large Language Models?',
    options: [
      'AlexNet: ImageNet Classification with Deep Networks',
      'Attention Is All You Need',
      'Backpropagation: Learning Representations by Backpropagating Errors',
      'The Society of Mind',
    ],
    answerIndex: 1,
    explanation: '"Attention Is All You Need" introduced the revolutionary self-attention mechanism, which allows deep models to process context words parallelly instead of sequentially.',
  },
];

export default function HistoryQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null || isSubmitted) return;

    if (selectedOptionIndex === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="bg-art-bg border border-art-text rounded-none p-6 md:p-8 max-w-3xl mx-auto shadow-md relative overflow-hidden font-serif">
      {!isQuizCompleted ? (
        <div className="space-y-6">
          {/* Quiz Header */}
          <div className="flex justify-between items-center border-b border-art-text/40 pb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-art-highlight border border-art-text text-art-text">
                <HelpCircle className="w-4 h-4" />
              </span>
              <h3 className="font-serif text-lg font-black uppercase text-art-text">AI Chronicle Trivia</h3>
            </div>
            <span className="font-mono text-xs text-art-text/60 font-black">
              QUESTION {currentQuestionIndex + 1} OF {quizQuestions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2.5 bg-art-card-hover border border-art-text rounded-none overflow-hidden">
            <div
              className="h-full bg-art-text transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question text */}
          <div className="space-y-4">
            <h4 className="text-art-text font-serif text-lg md:text-xl font-black uppercase tracking-tight leading-relaxed">
              {currentQuestion.question}
            </h4>

            {/* Options list */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentQuestion.options.map((option, index) => {
                let optionStyle = 'border-art-text/30 bg-transparent text-art-text hover:border-art-text hover:bg-art-card-hover';

                if (selectedOptionIndex === index) {
                  optionStyle = 'border-art-text bg-art-highlight text-art-text font-bold';
                }

                if (isSubmitted) {
                  if (index === currentQuestion.answerIndex) {
                    optionStyle = 'border-green-800 bg-green-100/90 text-green-950 font-black';
                  } else if (selectedOptionIndex === index) {
                    optionStyle = 'border-red-800 bg-red-100/90 text-red-950 font-bold';
                  } else {
                    optionStyle = 'border-art-text/10 bg-art-bg text-art-text/40 opacity-40';
                  }
                }

                return (
                  <button
                    key={index}
                    disabled={isSubmitted}
                    onClick={() => handleOptionSelect(index)}
                    className={`p-4 rounded-none border text-left text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isSubmitted && index === currentQuestion.answerIndex && (
                      <CheckCircle2 className="w-4 h-4 text-green-800 shrink-0 ml-2" />
                    )}
                    {isSubmitted && selectedOptionIndex === index && index !== currentQuestion.answerIndex && (
                      <XCircle className="w-4 h-4 text-red-800 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation panel and next step */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-art-card-hover border border-art-text/50 rounded-none p-5 space-y-3"
              >
                <div className="flex items-center gap-2">
                  {selectedOptionIndex === currentQuestion.answerIndex ? (
                    <span className="text-green-950 text-xs font-mono font-black uppercase tracking-wider bg-green-100 border border-green-800 px-2.5 py-1">
                      Correct Verification
                    </span>
                  ) : (
                    <span className="text-red-950 text-xs font-mono font-black uppercase tracking-wider bg-red-100 border border-red-800 px-2.5 py-1">
                      Incorrect Hypothesis
                    </span>
                  )}
                </div>
                <p className="text-art-text/90 text-sm sm:text-base leading-relaxed font-serif italic">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons bar */}
          <div className="flex justify-end pt-4 border-t border-art-text/30">
            {!isSubmitted ? (
              <button
                disabled={selectedOptionIndex === null}
                onClick={handleSubmit}
                className={`px-6 py-3 rounded-none font-mono font-black border uppercase text-xs tracking-wider transition-all duration-200 ${
                  selectedOptionIndex !== null
                    ? 'bg-art-text border-art-text text-art-bg cursor-pointer hover:bg-art-text/90 shadow-sm'
                    : 'bg-art-card-hover text-art-text/40 border-art-text/10 cursor-not-allowed'
                }`}
              >
                SUBMIT FOR VERIFICATION
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-art-text hover:bg-art-text/90 text-art-bg px-6 py-3 rounded-none font-mono font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ml-auto border border-art-text"
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? 'NEXT HYPOTHESIS' : 'REVIEW ASSESSMENT'}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Results */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 space-y-6"
        >
          <div className="inline-flex p-4 bg-art-highlight border border-art-text text-art-text mb-2">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-3xl font-black uppercase tracking-tight text-art-text">Chronicle Assessment Complete</h3>
            <p className="text-art-text/80 text-sm max-w-md mx-auto font-serif">
              You’ve crossed the timeline of Artificial Intelligence and completed the evaluation.
            </p>
          </div>

          <div className="bg-art-card-hover border border-art-text rounded-none py-6 px-10 max-w-sm mx-auto">
            <span className="block text-[10px] font-mono text-art-text/60 uppercase tracking-widest mb-1.5 font-bold">
              VERIFIABLE INTELLIGENCE INDEX
            </span>
            <div className="text-4xl md:text-5xl font-mono text-art-text font-black">
              {score} / {quizQuestions.length}
            </div>
            <span className="block text-xs text-art-text font-bold uppercase mt-3">
              {score === quizQuestions.length
                ? 'Turing-level Scholar!'
                : score >= 3
                ? 'Knowledge-based Expert System'
                : 'Narrow AI Network'}
            </span>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-art-text hover:text-art-bg border border-art-text px-6 py-3 rounded-none font-mono font-black text-xs uppercase tracking-wider text-art-text transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-4 h-4" /> RESTART ASSESSMENT
          </button>
        </motion.div>
      )}
    </div>
  );
}
