package pl.server.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    private Organization organization;

    @ManyToOne
    private User createdBy;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private Set<Task> tasks;
}