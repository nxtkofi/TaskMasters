package pl.server.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    private User createdBy;

    @OneToMany(mappedBy = "organization", cascade = CascadeType.ALL)
    private Set<OrganizationUser> users;
}