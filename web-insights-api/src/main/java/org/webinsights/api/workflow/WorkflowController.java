package org.webinsights.api.workflow;

import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
  public Workflow getWorkflowBy(@PathVariable Long id) {
    return workflowService.findWorkflowById(id);
  }

  @PostMapping
  public Workflow createWorkflow(@RequestBody Workflow workflow) {
    return workflowService.saveWorkflow(workflow);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Workflow> updateWorkflow(
      @PathVariable Long id, @RequestBody Workflow workflowDetails) {
    Workflow updatedWorkflow = workflowService.updateWorkflow(id, workflowDetails);

    return ResponseEntity.ok(updatedWorkflow);
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
