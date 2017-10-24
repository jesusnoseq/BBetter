package com.jesusnoseq.bbetter.bbetter.unit;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.http.MediaType;

import com.jesusnoseq.bbetter.bbetter.purposes.Purpose;
import com.jesusnoseq.bbetter.bbetter.purposes.PurposesController;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;

@RunWith(SpringRunner.class)
@WebMvcTest(PurposesController.class)
public class PurposesControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private PurposesController purposesController;
	
	@Test
	public void getAllPurposesTest() throws Exception{
		Purpose purpose= new Purpose(0l,LocalDate.now(),"TEST",false);
		List<Purpose> allPurposes=Collections.singletonList(purpose);
		
		given(purposesController.retreiveAllPurposes()).willReturn(allPurposes);
		
		MockHttpServletRequestBuilder request = get("/api/purposes/all").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
		
		mvc.perform(request)
			.andExpect(status().isOk())
			.andExpect(jsonPath("$", hasSize(1)))
			.andExpect(jsonPath("$[0].description",is(purpose.getDescription())));
	    verify(purposesController, times(1)).retreiveAllPurposes();
	    verifyNoMoreInteractions(purposesController);
	}
	



    @Test
    public void testCORS() throws Exception {
    	mvc.perform(get("/api/purposes/all"))
                .andExpect(header().string("Access-Control-Allow-Origin", "*"))
                .andExpect(header().string("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT"))
                .andExpect(header().string("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me"))
                .andExpect(header().string("Access-Control-Max-Age", "3600"));
    }
}
