package fr.insee.lab.autoform.autoformapi.security;

import fr.insee.lab.autoform.autoformapi.model.User;

public interface UserProvider {

    public User getUser();
}