package org.webinsights.api.workflow;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkflowRepository extends CrudRepository<Workflow, Long> {
  List<Workflow> findAllByOrderByCreatedAtAsc();
}
