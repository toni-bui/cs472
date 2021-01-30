package edu.miu.cs472.models;

import java.util.ArrayList;
import java.util.List;

public class BeerExpert {

	public List<String> getBrands(String color) {
		List<String> list = new ArrayList<String>();
		if (color.equals("light")) {
			list.add("Light Beer 1");
			list.add("Light Beer 2");
		} else if (color.equals("dark")) {
			list.add("Dark Beer 1");
			list.add("Dark Beer 2");
		} else if (color.equals("brown")) {
			list.add("Brown Beer 1");
			list.add("Brown Beer 2");
		} else if (color.equals("red")) {
			list.add("Red Beer 1");
			list.add("Red Beer 2");
		} else {
			list.add("Other Beer 1");
			list.add("Other Beer 2");
		}
		return list;
	}

}
