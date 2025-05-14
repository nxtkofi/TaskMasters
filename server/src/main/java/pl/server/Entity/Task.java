package pl.server.Entity;

import jakarta.persistence.*;
import lombok.Data;
import pl.server.Enums.TaskStatus;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private int points;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @ManyToOne
    private Project project;

    @ManyToOne
    private User assignedTo;

    @ManyToOne
    private User createdBy;

}