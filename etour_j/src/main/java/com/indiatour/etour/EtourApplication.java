package com.indiatour.etour;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.indiatour.etour.services.Emailservice;

@SpringBootApplication
public class EtourApplication {

	public static void main(String[] args) {
		SpringApplication.run(EtourApplication.class, args);
	}
	
//	@EventListener(ApplicationReadyEvent.class)
//	public void triggerMail() throws MessagingException {
//
////	senderservice.sendSimpleEmail("darshanraundal55@gmail.com",
////			"This is email body",
////			"This is email subject");
//	senderservice.sendEmailWithAttachment("darshanraundal55@gmail.com",
//		"This is Arjun Codes",
//		"Resume",
//		"C:\\CDAC vita\\all.pdf");
//	}
	
}

