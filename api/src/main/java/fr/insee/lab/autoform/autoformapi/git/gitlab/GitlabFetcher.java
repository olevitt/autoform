package fr.insee.lab.autoform.autoformapi.git.gitlab;

import fr.insee.lab.autoform.autoformapi.git.GitFetcher;
import fr.insee.lab.autoform.autoformapi.git.GitRepository;
import org.gitlab4j.api.GitLabApi;
import org.gitlab4j.api.models.Project;
import org.gitlab4j.api.models.ProjectFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GitlabFetcher implements GitFetcher {

    @Value("${gitlab.baseurl}")
    private String baseUrl;

    @Value("${gitlab.accesstoken}")
    private String accessToken;

    @Override
    public List<GitRepository> getRepositories(String username) {
        // Create a GitLabApi instance to communicate with your GitLab server
        GitLabApi gitLabApi = new GitLabApi(baseUrl, accessToken);
        gitLabApi.setDefaultPerPage(10);
        gitLabApi.setIgnoreCertificateErrors(true);
        // Get the list of projects your account has access to
        try {
            ProjectFilter filter = new ProjectFilter().withOwned(true).withProgrammingLanguage("java");
            List<Project> projects = gitLabApi.getProjectApi().getUserProjects(username, filter);
            return projects.stream().map((project) -> {
                GitRepository repo = new GitRepository();
                repo.setProjectTitle(project.getName());
                return repo;
            }).collect(Collectors.toList());
        }
        catch (Exception e) {
            return null;
        }
    }
}
