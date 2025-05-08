package com.example.taskmanager.controller;

import com.example.taskmanager.dto.TaskDto;
import com.example.taskmanager.entity.Task;
import com.example.taskmanager.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> create(@RequestBody TaskDto dto) {
        Task t = taskService.createTask(
                dto.getTeamId(), dto.getTitle(), dto.getDescription(),
                dto.getPrLink(), dto.getPoints(), dto.getAssigneeIds());
        return ResponseEntity.status(HttpStatus.CREATED).body(t);
    }
}