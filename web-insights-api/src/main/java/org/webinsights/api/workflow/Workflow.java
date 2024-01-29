package org.webinsights.api.workflow;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

@Entity
@EntityListeners(AuditingEntityListener.class)
public class Workflow {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private String title;
  @CreatedDate private Date createdAt;
  @LastModifiedDate private Date lastModifiedAt;

  protected Workflow() {}

  public Workflow(String title) {
    this.title = title;
  }

  @Override
  public String toString() {

    return "Workflow [id="
        + id
        + ", title="
        + title
        + ", createAt= "
        + createdAt
        + ", lastModifiedAt= "
        + lastModifiedAt
        + "]";
  }

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public Date getLastModifiedAt() {
    return lastModifiedAt;
  }
}
