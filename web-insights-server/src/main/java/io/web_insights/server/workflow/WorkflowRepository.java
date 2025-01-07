package io.web_insights.server.workflow;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkflowRepository extends CrudRepository<Workflow, Long> {
  List<Workflow> findAllByOrderByCreatedAtDesc();
}
