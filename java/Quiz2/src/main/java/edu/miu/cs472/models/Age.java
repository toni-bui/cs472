package edu.miu.cs472.models;

public class Age {

	private int value;

	public static Age from(String value) throws Exception {
		int val = 0;
		try {
			val = Integer.valueOf(value);
			if (val < 4 || val > 100) {
				throw new Exception("Age must be between 4 and 100.");
			}
		} catch (NumberFormatException ex) {
			throw new Exception("Age is required and must be an integer.");
		}
		return new Age(val);
	}

	private Age(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

}
