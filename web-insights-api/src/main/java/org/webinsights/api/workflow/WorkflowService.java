package org.webinsights.api.workflow;

import org.springframework.stereotype.Service;

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
    List<Workflow> workflows = new ArrayList<>();

    workflowRepository.findAll().forEach(workflows::add);

    return workflows;
  }

  public Optional<Workflow> findWorkflowById(Long id) {
    return workflowRepository.findById(id);
  }

  public Workflow saveWorkflow(Workflow workflow) {
    return workflowRepository.save(workflow);
  }

  public void deleteWorkflow(Long id) {
    workflowRepository.deleteById(id);
  }
}
