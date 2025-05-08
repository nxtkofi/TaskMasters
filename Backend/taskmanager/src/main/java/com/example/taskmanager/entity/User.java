package com.example.taskmanager.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String role = "USER";

    @ManyToMany(mappedBy = "members")
    private Set<Team> teams = new HashSet<>();

    @ManyToMany(mappedBy = "assignees")
    private Set<Task> tasks = new HashSet<>();
}