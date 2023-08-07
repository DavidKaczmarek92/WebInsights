package com.backend.api.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="sampleTable")
public class dataTest {
	
	@Id
	private int id;
	
	private String name;
	
	
	@Override
	public String toString() {
		return "dataTest [id=" + id + ", name=" + name + "]";
	}

	public dataTest() {
		super();
		// TODO Auto-generated constructor stub
	}

	public dataTest(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

}
