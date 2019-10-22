package fr.insee.lab.autoform.autoformapi.security;

import fr.insee.lab.autoform.autoformapi.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@ConditionalOnProperty(name = "keycloak.enabled", havingValue = "false")
public class NoSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${gitlab.baseurl}")
    private String gitlabBaseUrl;
   
   @Override
   protected void configure(HttpSecurity http) throws Exception {
       http.authorizeRequests().antMatchers("/**").permitAll();
       http.headers().frameOptions().disable();
       http.csrf().disable();
   }

   @Override
   public void configure(WebSecurity web) {
       web.ignoring().antMatchers("/**");
   }

   @Bean
   public UserProvider getUserProvider() {
      return new UserProvider() {
         
         @Override
         public User getUser() {
            User user = new User();
            String id = "xxxxxx";
            user.setId(id);
            user.setName("Bob lebricoleur");
            user.getScm().put("gitlab",gitlabBaseUrl+"/"+id);
            return user;
         }
      };
   }

}
