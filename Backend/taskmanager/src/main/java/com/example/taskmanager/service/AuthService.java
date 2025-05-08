package com.example.taskmanager.service;

import com.example.taskmanager.entity.User;
import com.example.taskmanager.repository.UserRepository;
import com.example.taskmanager.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtTokenProvider jwtProvider;

    public String register(String email, String rawPassword) {
        if (userRepo.findByEmail(email).isPresent())
            throw new RuntimeException("Email already exists");
        User u = new User();
        u.setEmail(email);
        u.setPassword(encoder.encode(rawPassword));
        userRepo.save(u);
        return "User registered successfully";
    }

    public String login(String email, String rawPassword) {
        User u = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if (!encoder.matches(rawPassword, u.getPassword()))
            throw new RuntimeException("Invalid credentials");
        return jwtProvider.generateToken(u.getEmail());
    }
}