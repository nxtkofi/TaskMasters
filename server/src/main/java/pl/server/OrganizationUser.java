package pl.server;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class OrganizationUser {
    @EmbeddedId
    private OrganizationUserId id;

    @ManyToOne
    @MapsId("organizationId")
    private Organization organization;

    @ManyToOne
    @MapsId("userId")
    private User user;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public enum UserRole {
        Member, TeamLeader
    }

    @Embeddable
    @Data
    public static class OrganizationUserId implements Serializable {
        private Long organizationId;
        private Long userId;
    }
}