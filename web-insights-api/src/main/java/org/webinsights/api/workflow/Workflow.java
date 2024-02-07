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

  @Setter private String title;
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
}
