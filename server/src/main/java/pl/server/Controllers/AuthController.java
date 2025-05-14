package pl.server.Controllers;

import pl.server.Service.UserService;
import pl.server.Entity.User;
import pl.server.Config.JwtUtil;
import pl.server.Enums.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        user.setRole(UserRole.CEO); // Default role for new users (as per demo scenario)
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        } catch (AuthenticationException e) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        User user = userService.findByEmail(loginRequest.getEmail());
        String jwt = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return ResponseEntity.ok(jwt);
    }
}