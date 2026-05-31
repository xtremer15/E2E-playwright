---
name: pr-description
description: Describe the PR changes&implementation. Use  when a pr is raised, changes have been commited with '#git commit' or when the user wants to summerize the changes for a PR
---


### Actions Before Output ###

1. Run `git diff main...HEAD` to see all the changes on this branch
2. Run `git log --oneline --graph --decorate --all` to see the commit history
3. Attach commit history as graph for the last 4 commits
4. Write the desc under the format section


### Format ###
## What
One sentence explaing the pr

## Why
Brief context of why this change is needed

## Changes
- Bullet points of the changes made
- Group the changes that are related together by feature and component/service
- List the files that were deleted or removed as routes
