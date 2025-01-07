package io.web_insights.server.workflow;

import jakarta.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class WorkflowService {

  private final WorkflowRepository workflowRepository;

  public WorkflowService(WorkflowRepository workflowRepository) {
    this.workflowRepository = workflowRepository;
  }

  public List<Workflow> findAllWorkflows(String createdBy) {
    return new ArrayList<>(workflowRepository.findAllByOrderByCreatedAtDesc())
        .stream()
            .filter(workflow -> Objects.equals(workflow.getCreatedBy(), createdBy))
            .collect(Collectors.toList());
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

    workflow.setName(workflowDetails.getName());
    workflow.setDescription(workflowDetails.getDescription());

    return workflowRepository.save(workflow);
  }

  public void deleteWorkflow(Long id) {
    workflowRepository.deleteById(id);
  }
}
