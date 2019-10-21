package fr.insee.lab.autoform.autoformapi.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.insee.lab.autoform.autoformapi.model.Challenge;
import fr.insee.lab.autoform.autoformapi.model.Challenges;
import fr.insee.lab.autoform.autoformapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/challenge")
public class ChallengeController {

    @Autowired
    private ObjectMapper mapper;

    @Value("classpath:/challenges.json")
    Resource resourceFile;

    @GetMapping
    public Challenges getChallenges() throws Exception {
        Challenges challenges = mapper.readValue(resourceFile.getInputStream(), Challenges.class);
        return challenges;
    }
}
