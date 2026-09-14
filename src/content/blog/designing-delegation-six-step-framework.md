---
title: "How I Would Design a Personal AI Assistant: A Six-Step Framework"
date: 2026-09-14T12:00:00Z
tags: [ai, product, design]
cardSize: "tall"
excerpt: "A framework for deciding how an AI assistant should understand, prepare, act, and hand control back to the user."
---

After a product meeting, I often have several kinds of follow-up to coordinate: notes, team messages, document changes, unanswered questions, and another meeting. I have to remember who is waiting, which answers affect which tasks, and what I am ready to commit to.

I started thinking about personal AI assistants through that work. What would I actually want to hand over? What would I still want to decide? Working through a hypothetical case, I kept encountering choices that would shape the experience long before a message was sent.

I organized those choices into six steps. As a product manager, this is the framework I would use to design and examine an assistant that carries work forward on someone's behalf.

My starting point is the user's desired outcome and the decisions they want to keep. Each step has a corresponding expectation.

- **01 Define the task:** Understand what I mean.
- **02 Read the context:** Know what is current.
- **03 Plan and prepare:** Bring me a useful next step.
- **04 Review and approve:** Let me see and control the consequences.
- **05 Execute and verify:** Tell me what actually happened.
- **06 Report and leave:** Let me leave with clarity.

<figure class="article-figure article-figure--narrow">
  <img src="/images/noises-of-ai/ai-assistant-six-step-framework.webp" alt="Six-step framework for designing delegation to an AI assistant, from defining the task through reporting and leaving" loading="eager" decoding="async" />
  <figcaption>Figure A. My six-step framework for designing delegation to an AI assistant.</figcaption>
</figure>

These steps describe my proposed product responsibilities. They can overlap, repeat, or be combined for simpler tasks. The framework grew from a work scenario; applying it to other kinds of personal assistance would require testing the assumptions behind it.

## 01. Define the task: understand what I mean

“Handle the follow-up” leaves a lot unsaid. It gives the assistant a direction, while leaving open what counts as success and which actions are permitted.

I would separate three things:

- **Goal**
  - What it establishes: The outcome the user wants.
  - Example: Move the meeting's follow-up forward.
- **Expectations**
  - What it establishes: What makes the result and process acceptable.
  - Example: Accurate, current updates, tailored to each team.
- **Authority**
  - What it establishes: The sources and actions the assistant is permitted to use.
  - Example: Read agreed sources and prepare work; obtain approval for sending and shared edits.

These can fail independently. An accurate message can use the wrong account. A polished document can leave another team waiting. A well-understood request can still lead to an action the user never authorized.

I would make the scope visible early: what the assistant will prepare, where it will look, and which decisions remain with the user. Existing preferences and authorization should carry forward where they apply, so the user does not have to complete a questionnaire every time.

The product decision is which ambiguity matters enough to resolve before starting. An unclear recipient can change the meaning and consequences of a message. A minor formatting preference might be settled through an editable draft.

## 02. Read the context: know what is current

Once the task is defined, the assistant needs evidence for the decisions ahead. I would distinguish **facts, decisions, and assumptions**.

A fact might be that a team has asked whether to start preparing. A decision might be the currently agreed launch date. An assumption might be that the team needs final specifications before it can begin.

Each should be handled differently. The assistant can report the question, use the current decision, and investigate the assumption before building a recommendation on it.

“Current” also needs interpretation. A recent suggestion does not automatically replace an earlier decision. I would want the assistant to establish who made the decision, where it was recorded, and whether it has been superseded. For active project work, I would return to the agreed sources when their state affects the next action.

Missing context should produce a focused question when the answer could change the work. The assistant should first investigate within its permitted sources, then explain what remains unknown and why it matters.

### When source content tries to give instructions

Reading introduces a security issue: **prompt injection**, in which input steers an AI system away from its intended instructions. Simon Willison documented examples in September 2022. Greshake and colleagues' February 2023 paper examined **indirect prompt injection**, where the attack arrives through retrieved content. [Willison, 2022](https://simonwillison.net/2022/Sep/12/prompt-injection/); [Greshake et al., 2023](https://arxiv.org/abs/2302.12173).

For my framework, this adds a requirement: permission to read a source must remain separate from authority to follow instructions inside it. A document may provide evidence about the project without being allowed to authorize a new disclosure.

I would carry that distinction into the controls on later actions. Recognizing the principle in a prompt alone would not establish that the product enforces it.

## 03. Plan and prepare: bring me a useful next step

A useful next step could be a draft, a set of options, or a question that removes a blocker. I would judge it by whether it helps the user move toward the goal.

Two principles guide the plan:

**Dependencies shape the plan. Urgency shapes priority.**

A dependency explains what must be established before another action is justified. Urgency explains which part deserves attention first.

Suppose a team starts work in half an hour, but its preparation may depend on an unresolved specification. I would prioritize finding out about that dependency. While the answer is missing, the assistant can prepare other updates whose content is already clear.

The deadline gives the question priority. It does not establish whether the team should continue or pause.

I would also distinguish three reasons to involve the user:

- **Missing information:** A focused question and why the answer matters.
- **A decision the user retains:** Relevant options, consequences, and a recommendation where justified.
- **Approval for a prepared action:** The exact proposed change and its context.

This separation makes the interaction more useful. “Should I proceed?” can hide all three problems. A specific request lets the user understand what is needed while other work continues.

## 04. Review and approve: let me see and control the consequences

An approval is meaningful when the user can understand what will happen. I would design the review around four elements:

- **Acting account:** Which identity or account will perform the action?
- **Audience:** Who will receive the information or experience the change?
- **Proposed change:** What exact message, edit, or action is being approved?
- **Destination:** Which conversation, file location, or event will contain the result?

Audience and destination answer different questions. The same team may have a private conversation and a widely shared project page. Where an update appears changes who can see it and how it will be interpreted.

For work messages, I would want the surrounding conversation visible. For a document change, I would want its location and the proposed difference. A meeting invitation may be understandable in one consolidated preview.

These are design choices to test. The principle is to give users enough context to understand the consequences without reconstructing the task themselves.

I would support partial approval, revision, and rejection. Approval should remain attached to the version and conditions the user reviewed. A change to the recipient, content, or relevant project state may require a fresh decision.

Different users can authorize different levels of action. For my professional communications, I would retain final approval. A user could also authorize a specific recurring task within explicit conditions. The review flow should respect the applicable rule.

### Safety constrains the execution options

Two external frameworks help examine this design. Willison's June 2025 **lethal trifecta** describes the combination of private data, untrusted content, and external communication. Meta's October 2025 **Agents Rule of Two** limits autonomous sessions to at most two of three properties: untrusted inputs, sensitive access, and state changes or external communication. When all three are necessary in the same session, it calls for supervision or reliable validation. Meta also describes limits to this protection. [Willison, 2025](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/); [Meta, 2025](https://ai.meta.com/blog/practical-ai-agent-security/).

My application is to examine four conditions together: **available data, input source, destination, and execution rule**. I would use them to specify what the assistant can access and which proposed actions can actually execute.

A review screen contributes to user control. I would also require enforceable restrictions on tools and destinations, with security testing of the resulting design. A user's approval cannot establish that every hidden disclosure or attack has been recognized.

## 05. Execute and verify: tell me what actually happened

Once an action is approved, the assistant takes on responsibility for establishing its result. I would track what was approved, what was attempted, and what can be confirmed for each task.

- **Confirmed complete:** Record the result and provide a way to inspect it.
- **Unknown:** Check whether the action occurred before attempting it again.
- **Blocked:** Identify the obstacle and the intervention needed.
- **Awaiting approval:** Preserve the prepared work and the decision still required.

Consider a message whose send request times out. If the message already exists, a retry could create a duplicate. I would require a result check before retrying where the service supports one. If the outcome cannot be established, the assistant should preserve that uncertainty and explain the options.

Recovery also needs to respect the approved conditions. Restoring a connection may allow the original work to continue. A changed document passage may mean that the user needs to review a revised edit first.

The product should make these differences legible. A user should be able to see which task needs attention, why, and what the assistant can do next within the existing scope.

## 06. Report and leave: let me leave with clarity

A user may leave after everything is finished, while something is blocked, or because they want to stop. In each case, I would want a clear account of what is done, pending, and stopped, including any work continuing in the background.

I would provide separate choices for:

- **Stopping tasks:** ending pending or recurring work, with an explanation of any actions already in progress.
- **Revoking access:** removing the assistant's ability to use connected sources or services.
- **Deleting memory or retained material:** removing stored information within the stated scope of that control.

An already-sent message still exists when pending work is canceled. Disconnecting a source does not, by itself, describe what previously retained information remains. The interface needs to state the effect of each choice.

Cancellation should be available throughout the six steps. At the next session, the assistant should resume unfinished work after checking the relevant context. A later project change can create new follow-up for work that was previously complete.

## What should improve as the assistant gets to know me?

I would want repeated collaboration to improve preparation: better drafts, better recognition of dependencies, and fewer requests for information the assistant can legitimately find.

That requires distinguishing source material, project history, assumptions, confirmed preferences, and authorization. A writing preference may remain useful across projects. A past approval to send a message has a more specific scope.

**More familiarity improves preparation; it does not automatically expand authority.**

The user should be able to inspect and correct both the assistant's understanding and its permission to act. That is how I would support a relationship that becomes more useful over time while keeping consequential choices visible.

To evaluate this framework, I would examine how much context users have to repeat, how much work they do to review a proposal, and whether the final report lets them accurately identify what still needs attention. I would also test concrete failures, such as a changed recipient or an unknown execution result.

The [next essay](/noises-of-ai/designing-ai-assistant-meeting-follow-up) applies these six steps to one meeting follow-up, including the moments where I would ask, wait, approve, or recover.

### Decision frameworks from this essay

- **Goal, expectations, authority:** establish the desired outcome, acceptable experience, and permitted actions.
- **Facts, decisions, assumptions:** use current evidence and identify uncertainty that changes the next step.
- **Dependencies and urgency:** organize work around what depends on what, then prioritize the most time-sensitive needs.
- **Concrete approval and verified results:** review the account, audience, change, and destination; track the outcome of each action.
- **Continuity and clear endings:** carry forward applicable understanding, revisit changed conditions, and separate stopping work, revoking access, and deleting memory.
