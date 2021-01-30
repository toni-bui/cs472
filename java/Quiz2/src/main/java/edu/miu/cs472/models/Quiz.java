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

	private final int MAX_ANSWER = 3;
	private int currentQuestion = -1;
	private int score = 0;
	private int answerTimes = 0;

	public String getNextQuestion() {
		if (currentQuestion > questions.length - 1) {
			return null;
		}
		if (answerTimes > 0 && answerTimes < MAX_ANSWER) {
			return questions[currentQuestion];
		}
		return questions[++currentQuestion];
	}

	public boolean hasNextQuestion() {
		return currentQuestion < questions.length - 1 ||
			(currentQuestion == questions.length - 1 && answerTimes > 0 && answerTimes < MAX_ANSWER);
	}

	public void checkAnswer(String answer) {
		if (currentQuestion < 0 || currentQuestion > answers.length - 1) {
			return;
		}
		if (String.valueOf(answers[currentQuestion]).equals(answer)) {
			if (answerTimes == 0) {
				score += 10;
			} else if (answerTimes == 1) {
				score += 5;
			} else if(answerTimes == 2) {
				score += 2;
			}
			answerTimes = 0;
		} else {
			answerTimes++;
		}
	}

	public int getScore() {
		return score;
	}

	public int getTotalQuestion() {
		return questions.length;
	}

	public void preventResubmit() {
		currentQuestion = questions.length + 1;
	}

	public String getResult() {
		if (answerTimes >= MAX_ANSWER) {
			answerTimes = 0;
			return "The answer of (" + questions[currentQuestion] + ") is " + answers[currentQuestion];
		}
		return "";
	}

	public String getGrade() {
		if (score > 44) {
			return "A";
		} else if (score > 34) {
			return "B";
		} else if (score > 24) {
			return "C";
		}
		return "NC";
	}
}
