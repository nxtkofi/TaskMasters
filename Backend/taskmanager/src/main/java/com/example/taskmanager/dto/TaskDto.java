package com.example.taskmanager.dto;

import lombok.Data;
import java.util.List;

@Data
public class TaskDto {
    private Long teamId;
    private String title;
    private String description;
    private String prLink;
    private Integer points;
    private List<Long> assigneeIds;
}