package fr.insee.lab.autoform.autoformapi.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.insee.lab.autoform.autoformapi.git.GitFetcher;
import fr.insee.lab.autoform.autoformapi.git.GitRepository;
import fr.insee.lab.autoform.autoformapi.model.Challenge;
import fr.insee.lab.autoform.autoformapi.model.Challenges;
import fr.insee.lab.autoform.autoformapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/challenge")
public class ChallengeController {

    @Autowired
    private ObjectMapper mapper;

    @Value("classpath:/challenges.json")
    Resource resourceFile;

    @Autowired
    private GitFetcher fetcher;

    @GetMapping
    public Challenges getChallenges() throws Exception {
        Challenges challenges = mapper.readValue(resourceFile.getInputStream(), Challenges.class);
        return challenges;
    }

    @GetMapping("/repo")
    public List<GitRepository> getChallenge() {
        String username = "f2wbnp";
        return fetcher.getRepositories(username);
    }


}
