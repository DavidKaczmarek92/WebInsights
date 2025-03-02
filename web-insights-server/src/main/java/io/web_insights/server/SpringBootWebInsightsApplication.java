package io.web_insights.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringBootWebInsightsApplication {

  public static void main(String[] args) {
    SpringApplication.run(SpringBootWebInsightsApplication.class, args);
  }
}
