package com.jesusnoseq.bbetter.bbetter.purposes;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PurposesRepository extends JpaRepository<Purpose, Long>{
	List<Purpose> findByDate(LocalDate date);
}
