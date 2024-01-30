package org.webinsights.api.workflow;

import jakarta.persistence.EntityNotFoundException;
import org.hibernate.jdbc.Work;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WorkflowService {

  private final WorkflowRepository workflowRepository;

  public WorkflowService(WorkflowRepository workflowRepository) {
    this.workflowRepository = workflowRepository;
  }

  public List<Workflow> findAllWorkflows() {
    return new ArrayList<>(workflowRepository.findAllByOrderByCreatedAtAsc());
  }

  public Workflow findWorkflowById(Long id) {
    return workflowRepository
        .findById(id)
        .orElseThrow(() -> new EntityNotFoundException("Workflow not found"));
  }

  public Workflow saveWorkflow(Workflow workflow) {
    return workflowRepository.save(workflow);
  }

  public Workflow updateWorkflow(Long id, Workflow workflowDetails) {
    Workflow workflow = findWorkflowById(id);

    workflow.setTitle(workflowDetails.getTitle());

    return workflowRepository.save(workflow);
  }

  public void deleteWorkflow(Long id) {
    workflowRepository.deleteById(id);
  }
}
