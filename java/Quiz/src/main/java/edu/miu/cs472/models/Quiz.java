package edu.miu.cs472.models;

public class Quiz {

	private static String[] questions = {
		"3, 1, 4, 1, 5",		// pi
		"1, 1, 2, 3, 5",		// fibonachi
		"1, 4, 9, 16, 25",		// squares
		"2, 3, 5, 7, 11",		// primes
		"1, 2, 4, 8, 16"		// powers of two
	};

	private static int[] answers = { 9, 8, 36, 13, 32 };

	private int currentQuestion = -1;
	private int score = 0;
	private int numCorrect = 0;
	private int currentQuestionIndex = 0;

	public String getNextQuestion() {
		if (currentQuestion > questions.length - 1) {
			return null;
		}
		return questions[++currentQuestion];
	}

	public void checkAnswer(String answer) {
		if (currentQuestion < 0 || currentQuestion > answers.length - 1) {
			return;
		}
		if (String.valueOf(answers[currentQuestion]).equals(answer)) {
			score++;
		}
	}

	public boolean hasNextQuestion() {
		return currentQuestion < questions.length - 1;
	}

	public int getScore() {
		return score;
	}

	public int totalQuestion() {
		return questions.length;
	}

	public void preventResubmit() {
		currentQuestion = questions.length + 1;
	}

	public void markAnswerCorrect() {
		currentQuestionIndex++;
		numCorrect++;
	}

	public boolean isCorrect(String ans) {
		if (ans.equals(String.valueOf(answers[currentQuestionIndex]))) {
			return true;
		}
		return false;
	}
	public int getTotNumQuestions() {
		return questions.length;
	}

	public String getCurrentQuestion(){
		return questions[currentQuestionIndex];
	}

	public int getNumCorrect() {
		return this.numCorrect;
	}

}
