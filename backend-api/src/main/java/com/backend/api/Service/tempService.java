package com.backend.api.Service;

import java.util.List;

import com.backend.api.Model.dataTest;

public interface tempService {
	
	
	//Get all data
	public List<dataTest> getAlldataFromPostGresql();
	
	//Set the data
	public dataTest addData(dataTest data);

}
