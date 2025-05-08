package pl.server.Controllers;

import pl.server.Service.UserService;
import pl.server.JwtUtil;
import pl.server.LoginRequest;
import pl.server.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        userService.registerUser(user);
        String token = jwtUtil.generateToken(user.getUsername());
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

        if (isAuthenticated) {
            String token = jwtUtil.generateToken(loginRequest.getUsername());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
