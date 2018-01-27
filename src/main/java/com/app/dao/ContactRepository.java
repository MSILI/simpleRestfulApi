package com.app.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

	@Query("select c from Contact c where c.nom like :keyword")
	public Page<Contact> searchByKeyWord(@Param("keyword") String keyWord, Pageable pageable);
}
