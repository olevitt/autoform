package fr.insee.lab.autoform.autoformapi.git;

import java.util.List;

public interface GitFetcher {

    public List<GitRepository> getRepositories(String username);
}
