package org.webinsights.api.workflow;

import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
