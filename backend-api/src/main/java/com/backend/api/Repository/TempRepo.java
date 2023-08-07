package com.backend.api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.api.Model.dataTest;

@Repository
public interface TempRepo extends JpaRepository<dataTest, Integer>{
	

}
