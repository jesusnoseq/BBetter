package com.jesusnoseq.bbetter.bbetter.purposes;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@RestController
public class PurposesController {
	
	@Autowired
	PurposesRepository purposeRepository;

	@GetMapping("/api/purposes/{year}/{month}/{day}")
	public List<Purpose> retreivePurposes(
			@PathVariable int year,
			@PathVariable int month,
			@PathVariable int day)
	{
		LocalDate dateRequested = LocalDate.of(year, month, day);
		
		return purposeRepository.findByDate(dateRequested);
	}
	
	@GetMapping("/api/purposes")
	public List<Purpose> retreivePurposes(){
		LocalDate today = LocalDate.now();
		return purposeRepository.findByDate(today);
	}
	
	@GetMapping("/api/purposes/all")
	public List<Purpose> retreiveAllPurposes(){
		return purposeRepository.findAll();
	}
	
	@GetMapping("/api/purposes/{id}")
	public Resource<Purpose> retreivePurpose(@PathVariable long id){
		Optional<Purpose> purposeOpt = purposeRepository.findById(id);
		if(!purposeOpt.isPresent()){
			throw new PurposeNotFoundException("Purpose id "+id);
		}
		
		Resource<Purpose> resource=null;
		Purpose purpose=purposeOpt.get();
		resource= new Resource<Purpose>(purpose);

		ControllerLinkBuilder linkTo=linkTo(methodOn(this.getClass()).retreiveAllPurposes());
		resource.add(linkTo.withRel("all purposes"));
		return resource;
	}
	
	
	@PostMapping(path="/api/purposes")
	public ResponseEntity<Purpose> createPurpose(@Valid @RequestBody Purpose purpose){
		purpose.setId(null);
		Purpose p=purposeRepository.save(purpose);
		
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(p.getId()).toUri();
		
		return  ResponseEntity.created(location).body(p);
	}
	
	@PutMapping("/api/purposes/{id}")
	public ResponseEntity<Object> updatePurpose(
			@PathVariable long id,
			@RequestBody Purpose purpose){
		Optional<Purpose> purposeOpt = purposeRepository.findById(id);
		if(!purposeOpt.isPresent()){
			throw new PurposeNotFoundException("Purpose id "+id);
		}
		purpose.setId(id);
		Purpose p=purposeRepository.save(purpose);
		
		return ResponseEntity.accepted().build();
	}

	@DeleteMapping("/api/purposes/{id}")
	public ResponseEntity<Purpose> deletePurpose(@PathVariable long id){
		Optional<Purpose> purposeOpt = purposeRepository.findById(id);
		if(!purposeOpt.isPresent()){
			throw new PurposeNotFoundException("Purpose id "+id);
		}
		purposeRepository.deleteById(id);
		
		return ResponseEntity.accepted().build();
	}
}
