package fr.insee.lab.autoform.autoformapi.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.insee.lab.autoform.autoformapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private ObjectMapper mapper;

    @Value("classpath:/profile.json")
    Resource resourceFile;

    @GetMapping("/me")
    public User getUser() throws Exception {
        User user = mapper.readValue(resourceFile.getInputStream(), User.class);
        return user;
    }
}
