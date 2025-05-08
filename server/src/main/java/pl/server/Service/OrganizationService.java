package pl.server.Service;

import pl.server.Organization;
import pl.server.Repositories.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrganizationService {
    @Autowired
    private OrganizationRepository organizationRepository;

    public Organization createOrganization(Organization organization) {
        return organizationRepository.save(organization);
    }
}