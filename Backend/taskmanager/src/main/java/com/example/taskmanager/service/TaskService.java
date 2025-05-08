package com.example.taskmanager.service;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.repository.TaskRepository;
import com.example.taskmanager.repository.TeamRepository;
import com.example.taskmanager.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepo;
    private final TeamRepository teamRepo;
    private final UserRepository userRepo;

    public Task createTask(Long teamId, String title, String desc, String prLink,
                           Integer points, List<Long> assigneeIds) {
        Task tk = new Task();
        tk.setTitle(title);
        tk.setDescription(desc);
        tk.setPrLink(prLink);
        tk.setPoints(points);
        teamRepo.findById(teamId).ifPresent(tk::setTeam);
        for (Long id : assigneeIds) {
            userRepo.findById(id).ifPresent(tk.getAssignees()::add);
        }
        return taskRepo.save(tk);
    }
}