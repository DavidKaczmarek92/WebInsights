package org.webinsights.api.workflow;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Workflow {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Setter private String name;
  @Setter private String description;
  @CreatedDate private Date createdAt;

  @LastModifiedDate private Date lastModifiedAt;

  @Setter private String createdBy;

  protected Workflow() {}

  public Workflow(String name, String description, String createdBy) {
    this.name = name;
    this.description = description;
    this.createdBy = createdBy;
  }

  @Override
  public String toString() {

    return "Workflow [id="
        + id
        + ", name="
        + name
        + ", createAt= "
        + createdAt
        + ", lastModifiedAt= "
        + lastModifiedAt
        + "]";
  }
}
