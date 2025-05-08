package com.example.taskmanager.controller;

import com.example.taskmanager.dto.TeamDto;
import com.example.taskmanager.entity.Team;
import com.example.taskmanager.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teams")
@RequiredArgsConstructor
public class TeamController {
    private final TeamService teamService;

    @PostMapping
    public ResponseEntity<Team> create(@RequestBody TeamDto dto) {
        Team t = teamService.createTeam(dto.getName(), dto.getMemberIds());
        return ResponseEntity.status(HttpStatus.CREATED).body(t);
    }
}