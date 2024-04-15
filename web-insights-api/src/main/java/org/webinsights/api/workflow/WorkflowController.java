package org.webinsights.api.workflow;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/workflows")
public class WorkflowController {
  private final WorkflowService workflowService;

  public WorkflowController(WorkflowService workflowService) {
    this.workflowService = workflowService;
  }

  @GetMapping
  public List<Workflow> getAllWorkflows(Authentication authentication) {
    return workflowService.findAllWorkflows(authentication.getName());
  }

  @GetMapping("/{id}")
  public Workflow getWorkflowBy(@PathVariable Long id) {
    return workflowService.findWorkflowById(id);
  }

  @PostMapping
  public Workflow createWorkflow(@RequestBody Workflow workflow, Authentication authentication) {

    workflow.setCreatedBy(authentication.getName());

    return workflowService.saveWorkflow(workflow);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Workflow> updateWorkflow(
      @PathVariable Long id, @RequestBody Workflow workflowDetails) {
    Workflow updatedWorkflow = workflowService.updateWorkflow(id, workflowDetails);

    return ResponseEntity.ok(updatedWorkflow);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteWorkflow(@PathVariable Long id) {
    workflowService.deleteWorkflow(id);

    return ResponseEntity.noContent().build();
  }
}
