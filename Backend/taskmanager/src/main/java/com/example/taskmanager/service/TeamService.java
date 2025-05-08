package com.example.taskmanager.service;

import com.example.taskmanager.entity.Team;
import com.example.taskmanager.repository.TeamRepository;
import com.example.taskmanager.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepo;
    private final UserRepository userRepo;

    public Team createTeam(String name, List<Long> memberIds) {
        Team t = new Team();
        t.setName(name);
        for (Long id : memberIds) {
            userRepo.findById(id).ifPresent(t.getMembers()::add);
        }
        return teamRepo.save(t);
    }
}