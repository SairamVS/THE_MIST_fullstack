package com.example.nexaglow.service;

import java.util.List;

import com.example.nexaglow.dto.EventsDto;

public interface EventsService {

    EventsDto getEventsById(Long id);
    EventsDto createEvents(EventsDto eventsDto);
    List<EventsDto> getAllEvents();
    EventsDto updateEvent(Long id, EventsDto eventsDto);
    void deleteEvent(Long id);
    
}
