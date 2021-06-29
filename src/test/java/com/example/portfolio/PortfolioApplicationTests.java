package com.example.portfolio;

import com.example.portfolio.service.BusinessService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class PortfolioApplicationTests {

	@Autowired
	private BusinessService businessService;

	@Test
	void contextLoads() {
	}

	@Test
	void testHelloWorld(){
		assertEquals(businessService.getHelloWorld().getValue(),"Salut le monde !");
	}

}
