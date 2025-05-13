package pl.server.Controllers;

import pl.server.Entity.Organization;
import pl.server.Service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/organizations")
public class OrganizationController {
    @Autowired
    private OrganizationService organizationService;

    @PostMapping
    public ResponseEntity<String> createOrganization(@RequestBody Organization organization) {
        organizationService.createOrganization(organization);
        return ResponseEntity.ok("Organization created successfully");
    }
}