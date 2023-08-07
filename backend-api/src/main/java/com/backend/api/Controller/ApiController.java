package com.backend.api.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.api.Model.dataTest;
import com.backend.api.Service.tempService;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private tempService service;
	
	
	@PostMapping("/add")
	ResponseEntity<dataTest> addData(@RequestBody dataTest data)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(service.addData(data));
		
	}
	
	@GetMapping("/getdata")
	ResponseEntity<List<dataTest>> getData()
	{
		return ResponseEntity.status(HttpStatus.OK).body(service.getAlldataFromPostGresql());
	}

}
