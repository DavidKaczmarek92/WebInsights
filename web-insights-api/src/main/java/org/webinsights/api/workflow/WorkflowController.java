package org.webinsights.api.workflow;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/workflows")
public class WorkflowController {
  private final WorkflowService workflowService;

  public WorkflowController(WorkflowService workflowService) {
    this.workflowService = workflowService;
  }

  @GetMapping
  public List<Workflow> getAllWorkflows() {
    return workflowService.findAllWorkflows();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Workflow> getWorkflowBy(@PathVariable Long id) {
    Optional<Workflow> workflow = workflowService.findWorkflowById(id);

    return workflow.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public Workflow createWorkflow(@RequestBody Workflow workflow) {
    return workflowService.saveWorkflow(workflow);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteWorkflow(@PathVariable Long id) {
    try {
      workflowService.deleteWorkflow(id);

      return ResponseEntity.ok().build();
    } catch (EmptyResultDataAccessException e) {
      return ResponseEntity.notFound().build();
    }
  }
}
