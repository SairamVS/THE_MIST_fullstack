package com.example.nexaglow.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import com.example.nexaglow.dto.EventsDto;
import com.example.nexaglow.service.EventsService;


@AllArgsConstructor
@RestController
@RequestMapping("/api/events")
public class EventsController {

    private EventsService eventsService;

    @GetMapping("{id}")
    public ResponseEntity<EventsDto> getEventsById(@PathVariable("id") Long eventsId) {
        EventsDto eventsDto = eventsService.getEventsById(eventsId);
        return ResponseEntity.ok(eventsDto);
    }

    @PostMapping("addEvent")
    public ResponseEntity<EventsDto> createEvents(@RequestBody EventsDto eventsDto) {
        EventsDto savedEvents = eventsService.createEvents(eventsDto);
        return new ResponseEntity<>(savedEvents, HttpStatus.CREATED);
    }

    // Build Get All Employee REST API
    @GetMapping("all")
    public ResponseEntity<List<EventsDto>> getAllEvents() {
        List<EventsDto> events = eventsService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @PutMapping("{id}")
    public ResponseEntity<EventsDto> updateEvent(@PathVariable("id") Long id, @RequestBody EventsDto eventsDto) {
        EventsDto updatedEvent = eventsService.updateEvent(id, eventsDto);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable("id") Long id) {
    eventsService.deleteEvent(id);
    return ResponseEntity.ok("Deleted Successfully");
}


}