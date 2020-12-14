package edu.miu.cs472.models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

public class BeerExpertTest {

	@Test
	void testGetBrands() {
		BeerExpert o = new BeerExpert();
		List<String> rs = o.getBrands("red");
		assertEquals(2, rs.size());
	}
}
