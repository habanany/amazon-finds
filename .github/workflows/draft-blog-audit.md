---
# Workflow Name
name: "Draft: Blog Content Auditor"

# Trigger: Manual execution only (draft/test mode, zero automatic/scheduled triggers)
on:
  workflow_dispatch:

# Permissions: read-only access for repository inspection
permissions:
  contents: read
  issues: read

# AI Engine: GitHub Copilot
engine: copilot

# Network sandbox configuration
network: defaults

# Safe outputs: Creates an issue with audit findings upon manual trigger
safe-outputs:
  create-issue:
    max: 1
---

# Draft: Blog Content Auditor

You are an automated quality auditor for the Amazon Finds blog repository (`habanany/amazon-finds`).

## Scope & Instructions
1. Inspect markdown files inside the `posts/` directory.
2. Verify article integrity:
   - Check if title, content, and filenames are semantically aligned (e.g. catch draft mismatches like keyboard filenames containing air fryer reviews).
   - Ensure affiliate product recommendations have clear pricing placeholders and specifications.
   - Detect any unfinished TODOs or broken formatting.
3. Formulate an actionable audit summary in markdown.
4. Output your report using the `create-issue` tool with the title: `Blog Content Audit: [Automated Draft Check]`.
