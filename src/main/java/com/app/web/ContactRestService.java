package com.app.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.ContactRepository;
import com.app.entities.Contact;

@RestController
public class ContactRestService {

	@Autowired
	private ContactRepository contactRepository;

	@RequestMapping(value = "/contacts", method = RequestMethod.GET)
	public List<Contact> getContacts() {

		return contactRepository.findAll();
	}

	@RequestMapping(value = "/searchContact", method = RequestMethod.GET)
	public Page<Contact> searchContacts(@RequestParam(name = "kw", defaultValue = "") String keyWord,
			@RequestParam(name = "page", defaultValue = "0") int pageNumber,
			@RequestParam(name = "size", defaultValue = "5") int pageSize) {

		return contactRepository.searchByKeyWord("%" + keyWord + "%", new PageRequest(pageNumber, pageSize));
	}

	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.GET)
	public Contact getContact(@PathVariable long id) {

		return contactRepository.findOne(id);
	}

	@RequestMapping(value = "/contacts", method = RequestMethod.POST)
	public Contact saveContact(@RequestBody Contact contact) {

		return contactRepository.save(contact);
	}

	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.DELETE)
	public void removeContact(@PathVariable long id) {

		contactRepository.delete(id);
	}

	@RequestMapping(value = "/contacts/{id}", method = RequestMethod.PUT)
	public Contact updateContact(@PathVariable long id, @RequestBody Contact contact) {

		contact.setId(id);
		return contactRepository.save(contact);
	}
}
