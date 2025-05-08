package com.example.taskmanager.dto;

import lombok.Data;
import java.util.List;

@Data
public class TeamDto {
    private String name;
    private List<Long> memberIds;
}