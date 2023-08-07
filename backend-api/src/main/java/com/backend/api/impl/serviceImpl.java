package com.backend.api.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.api.Model.dataTest;
import com.backend.api.Repository.TempRepo;
import com.backend.api.Service.tempService;

@Service
public class serviceImpl implements tempService{
	
	@Autowired
	private TempRepo repo;

	@Override
	public List<dataTest> getAlldataFromPostGresql() {
		
		return repo.findAll();
	}

	@Override
	public dataTest addData(dataTest data) {
		
		return repo.save(data);
	}

}
