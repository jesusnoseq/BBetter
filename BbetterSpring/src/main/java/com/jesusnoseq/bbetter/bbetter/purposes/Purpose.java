package com.jesusnoseq.bbetter.bbetter.purposes;

import java.time.LocalDate;







import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Purpose {
	@Id
	@GeneratedValue
	@Getter @Setter Long id;
	
	@Column(name="purpose_date")
	@Getter @Setter LocalDate date;
	
	@Size(min=1,max=180)
	@Getter @Setter String description;
	
	@Column(nullable = false)
	@Getter @Setter Boolean completed=false;
	
}
