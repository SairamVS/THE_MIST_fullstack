package com.example.nexaglow.service.implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.nexaglow.dto.EventsDto;
import com.example.nexaglow.entity.Events;
import com.example.nexaglow.exception.ResourceNotFoundException;
import com.example.nexaglow.mapper.EventsMapper;
import com.example.nexaglow.repository.EventsRepository;
import com.example.nexaglow.service.EventsService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EventsServiceImpl implements EventsService {

    private EventsRepository eventsRepository;

    @Override
    public EventsDto getEventsById(Long eventsId) {
        Events events = eventsRepository.findById(eventsId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("Employee is not exist with given id : " + eventsId));

        return EventsMapper.maptoEventsDto(events);
    }

    @Override
    public List<EventsDto> getAllEvents() {
        List<Events> events = eventsRepository.findAll();
    
        List<EventsDto> eventsDtos = new ArrayList<>();
        for (Events event : events) {
            eventsDtos.add(EventsMapper.maptoEventsDto(event));
        }
    
        return eventsDtos;
    }

    @Override
    public EventsDto createEvents(EventsDto eventsdto) {

        Events events = EventsMapper.maptoEvents(eventsdto);
        Events savedevents = eventsRepository.save(events);
        return EventsMapper.maptoEventsDto(savedevents);
    }
    
    @Override
    public EventsDto updateEvent(Long id, EventsDto eventsDto) {
        Events existingEvent = eventsRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));

        // Assuming you only update the modifiable fields and keep the ID
        existingEvent.setName(eventsDto.getName());
        existingEvent.setEmail(eventsDto.getEmail());
        existingEvent.setPhoneNo(eventsDto.getPhoneNo());
        existingEvent.setState(eventsDto.getState());
        existingEvent.setCity(eventsDto.getCity());
        existingEvent.setCelebration(eventsDto.getCelebration());
        existingEvent.setDate(eventsDto.getDate());
        existingEvent.setPrice(eventsDto.getPrice());
        existingEvent.setRequirements(eventsDto.getRequirements());

        Events updatedEvent = eventsRepository.save(existingEvent);
        return EventsMapper.maptoEventsDto(updatedEvent);
    }

    @Override
    public void deleteEvent(Long id) {
        eventsRepository.deleteById(id);
    }
}