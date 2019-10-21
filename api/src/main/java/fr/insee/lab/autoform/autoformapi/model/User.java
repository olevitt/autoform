package fr.insee.lab.autoform.autoformapi.model;

import java.util.Map;

public class User {

    private String name;
    private String id;
    private Map<String,ChallengeResult> challenges;
    private Map<String,String> scm;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Map<String, ChallengeResult> getChallenges() {
        return challenges;
    }

    public void setChallenges(Map<String, ChallengeResult> challenges) {
        this.challenges = challenges;
    }

    public Map<String, String> getScm() {
        return scm;
    }

    public void setScm(Map<String, String> scm) {
        this.scm = scm;
    }
}
