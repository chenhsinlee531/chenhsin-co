---
title: "Designing an AI Assistant for a Meeting Follow-Up"
date: 2026-09-14T11:00:00Z
tags: [ai, product, case study]
cardSize: "wide"
excerpt: "A meeting follow-up case study showing how I would apply six design steps across five connected workstreams."
---

A product meeting has ended. I need to organize the notes, update three teams, revise the project document, investigate open questions, and prepare the next meeting.

The difficult part is keeping those pieces connected. One team's answer may depend on an unresolved issue. A document change may affect what another team understands. Even after I approve the work, I still need to know what actually happened.

In the [first essay](/noises-of-ai/designing-delegation-six-step-framework), I proposed six steps for designing delegation to a personal AI assistant. Here, I will use them to work through a hypothetical case based on work I would like to hand over. The choices and outcomes below illustrate the experience I would design.

My request is:

> “Organize the meeting follow-up. Prepare the work and show me what needs my decision.”

## 01. What have I actually handed over?

Before preparing anything, I would want the assistant to establish the goal, expectations, and authority for this request.

The **goal** is to move the follow-up forward. My **expectations** are accurate, current information and useful updates tailored to each team. The **authority** is to read the agreed project sources and prepare the work. I will approve sending messages, changing shared documents, and issuing invitations.

That last boundary matters. Each of those actions can shape other people's understanding of my commitments. I am willing to spend time reviewing them, provided the assistant brings me the context needed to make that review efficient.

The work separates into five streams:

- **Meeting notes**
  - What the assistant should prepare: Decisions, action items, and open issues.
  - What needs judgment: Was a statement a decision or a proposal?
- **Team updates**
  - What the assistant should prepare: A tailored message for each of three teams.
  - What needs judgment: What does each team need to know or do?
- **Project document**
  - What the assistant should prepare: The exact proposed edit in its current location.
  - What needs judgment: What changes, and what remains valid?
- **Open questions**
  - What the assistant should prepare: Evidence or a focused question.
  - What needs judgment: Which uncertainty blocks another task?
- **Next meeting**
  - What the assistant should prepare: Purpose, attendees, agenda, and time options.
  - What needs judgment: Is the meeting ready to arrange?

<figure class="article-figure article-figure--wide">
  <img src="/images/noises-of-ai/ai-assistant-meeting-follow-up-case.webp" alt="Meeting follow-up example applying the six-step delegation framework across notes, team updates, a project document, open questions, and the next meeting" loading="eager" decoding="async" />
  <figcaption>Figure B. Applying the six-step framework across five connected workstreams.</figcaption>
</figure>

I would have the assistant show this scope briefly before proceeding. That gives me an early chance to correct a misunderstanding without making me specify every action in advance.

## 02. Team A starts in half an hour. What do we know?

As the assistant reads the relevant team conversations, it finds a question from Team A: should they start preparing in thirty minutes?

The meeting record and current project document still describe an expected Friday launch. There is also an unresolved specification question. It is unclear whether Team A needs that final specification before starting.

I would keep three statements distinct:

- **Fact:** Team A is asking whether to start in thirty minutes.
- **Current decision:** Friday remains the planned launch.
- **Assumption to verify:** Team A may need the final specification before preparing.

The assistant should preserve “expected Friday” unless it finds a decision that supersedes it. I would not want to reconfirm the same established plan just because it appeared in an earlier session.

The dependency is different. It could change the recommendation. I would first have the assistant investigate the agreed project sources. If those sources do not answer the question, it should prepare a focused clarification:

> “Does your preparation require the final specification, or can you start with the information already available?”

Under my authorization for this case, that external question also needs approval before it is sent. The assistant can identify the missing information and prepare the request on its own.

This is a point where the goal and authority interact. The work needs an answer, and contacting someone is an action with its own boundary.

## 03. What should move while we wait?

Team A's question is urgent. I would prioritize the dependency check and the clarification draft over polishing the meeting notes.

At the same time, the assistant can prepare Team B and Team C's updates from the current decision, draft the document edit, and assemble the next meeting's agenda and time options where the information is sufficient.

I would make the plan explicit:

- **Team A**
  - My choice: Prepare clarification; hold the continue-or-pause recommendation.
  - Why: The dependency could change the advice.
- **Teams B and C**
  - My choice: Prepare tailored updates in parallel.
  - Why: Their draft content can use the established project state.
- **Project document**
  - My choice: Prepare the exact edit, keeping valid Friday wording.
  - Why: Unresolved questions should stay visible without rewriting the current plan.
- **Open questions**
  - My choice: Prioritize evidence about Team A's dependency.
  - Why: That answer directly affects another workstream.
- **Next meeting**
  - My choice: Prepare available options; hold sending.
  - Why: Purpose, attendees, and timing still need review.

This is how I would apply **dependencies shape the plan; urgency shapes priority**.

The cost is an additional clarification before giving Team A a recommendation. I would accept it because an unsupported answer could lead to wasted preparation or an unnecessary pause. Preparing the other work in parallel limits the delay.

The assistant should also tell me whether it needs information, a decision, or approval. If the evidence leaves two reasonable options, it can explain the tradeoff and recommend one. If it only needs permission to send a prepared question, the interaction should say that directly.

## 04. What would I need to see before approving?

Now imagine the drafts are ready. The assistant has a clarification for Team A, updates for B and C, a proposed document change, and a meeting invitation.

I would review each in the context that gives it meaning.

For the team messages, I want to see the surrounding conversation, the final text, and who will receive it. For the document, I want the proposed change in place, including the existing passage and supporting decision. For the invitation, a consolidated preview with the work account, attendees, purpose, time, and time zone may be enough.

Those choices apply the four review elements from the framework: **acting account, audience, proposed change, and destination**.

They also suggest a practical interface requirement: I should be able to approve B and C while leaving Team A's clarification and the invitation pending. A single approval for the whole plan would obscure the decisions that remain open.

For this walkthrough, suppose I approve the messages to B and C and the document edit. I keep Team A's clarification pending while considering it, and I have not yet approved the invitation. The meeting notes remain a private draft.

The assistant should then execute only the approved work. If I revise a message, I need to know which final version my approval covers.

### What if I had granted different authority?

I use four conditions to understand how the same plan might lead to a different action:

- **Available data:** The agreed project records, team conversations, current document, and permitted calendar information.
- **Input source:** My request defines the task; source material supplies evidence to interpret.
- **Destination:** Drafts are for my review; messages, shared edits, and invitations affect other people.
- **Execution rule:** Prepare within scope, then execute the concrete actions I approve.

With a standing rule for a narrowly specified recurring update, an assistant might already have authority to send a qualifying message. It would still need to check that the current circumstances satisfy that rule. In this case, I have retained final approval for each external action.

Consider a separate variation: an attachment encountered during research contains instructions to send an unrelated internal file to a new address. This illustrates the indirect prompt injection risk introduced in the first essay. [Greshake et al., 2023](https://arxiv.org/abs/2302.12173).

I would design the assistant's execution controls to reject that attempted expansion of scope. The attachment has supplied neither my authorization nor a legitimate new destination. The implementation would need security testing; this walkthrough describes the behavior I would require.

## 05. What actually happened after approval?

Suppose the execution produces mixed results. Team B's message is confirmed sent. Team C's send attempt returns no reliable confirmation. The document update is blocked because the connected session has expired.

The open-question research finds a relevant record, but it still does not establish whether Team A needs the final specification. The notes are saved, and the invitation remains prepared but unsent.

I would expect a report like this:

- **Meeting notes**
  - State: Private draft saved.
  - Next step: Available for inspection; sharing requires approval.
- **Team A**
  - State: Clarification draft awaiting my approval.
  - Next step: Decide whether to send it; hold the recommendation.
- **Team B**
  - State: Message confirmed sent.
  - Next step: Provide a link or other evidence of the posted result.
- **Team C**
  - State: Send result unknown.
  - Next step: Check whether the message exists before retrying.
- **Project document**
  - State: Update blocked by expired session.
  - Next step: Restore access, recheck the current version, then determine whether the approved edit still applies.
- **Open questions**
  - State: Relevant record found; dependency unresolved.
  - Next step: Show what it establishes and the remaining question.
- **Next meeting**
  - State: Invitation prepared, awaiting approval.
  - Next step: Review the proposed invitation.

This report tells me which kind of intervention each item needs. Team C has an execution uncertainty. The document has an access problem. The invitation needs my decision. Treating them all as “unfinished” would leave me to reconstruct the differences.

For Team C, I would require the assistant to check the destination or available result records before risking a duplicate send. If the service cannot establish what happened, it should preserve that uncertainty and bring me the options.

For the document, I would ask for the specific reconnection that can resolve the problem. Once access returns, the assistant should read the current version. If another person has changed the passage in a way that affects my approved edit, I need to see the revised proposal.

The tradeoff is that execution can take longer than a blind retry. I would accept that delay to preserve the approved result and avoid creating additional cleanup work.

## 06. Can I leave without losing track of the work?

At this point, I may need to move on to something else. I would want a short closing report with three things: completed work, unresolved work, and any background activity that will continue.

The assistant should keep the pending decisions accessible. It should also say whether it is still checking Team C's result, waiting for me to reconnect the document, or doing nothing further until I return. I would want any promised follow-up time to reflect an actual supported capability.

If I cancel the remaining work, the report should state which pending actions stopped and whether an action was already in progress. Team B's sent message remains part of the team's conversation.

Stopping the task, revoking connected access, and deleting retained information would be separate controls. When the project ends, I would prefer to keep source material in its original location and choose which permitted material and decision context to archive. Source links are useful while accessible; keeping links alone cannot guarantee future access.

At the next session, I would ask the assistant to resume unfinished work after checking what has changed. It should carry forward the task state and the applicable approval boundaries, so I do not have to repeat the meeting or rebuild the list.

## What changes if the launch moves?

One final variation tests the framework. Suppose a later, confirmed decision moves the launch from Friday to the following Wednesday.

I would have the assistant revisit the work affected by that decision. Team B's earlier message was completed correctly, but now a new update may be needed. Team C's original send result still needs checking before we decide how to communicate the change. The document edit and invitation may need revision.

For Team A, I would again examine the dependency. Preparation that remains useful could continue, perhaps with a later submission date. Work that depends entirely on the changed conditions might need to pause. The date change alone cannot settle that choice.

Under my approval rule, revised messages and shared edits return for review. The assistant should show what changed and preserve work that remains valid.

A remembered preference can help with the preparation, too. If I usually notify only affected teams but this project's rules require notifying everyone, I would expect the assistant to cite that requirement and explain the proposed audience. Familiarity should make that explanation better; it should not silently rewrite the scope of my approval.

## How I would evaluate these choices

This case gives me concrete situations to test: an urgent question with missing evidence, separate approval of parallel work, an unknown send result, and a document that changes before an approved edit is applied.

I would examine whether users can quickly identify the decision required from them and whether the assistant preserves work that can continue. I would measure review effort, incorrect claims of completion, duplicate actions, and the amount of context users must repeat when returning.

I would also ask users to explain the final state in their own words. If they cannot tell what was sent, what is waiting, and what will happen next, the experience needs improvement even if several individual tasks succeeded.

These are proposed checks for the design. Their results would tell me where to revise the framework or the product choices made within it.

### Decision frameworks from this essay

- **Goal, expectations, authority:** define five workstreams while preserving the user's approval boundary.
- **Facts, decisions, assumptions:** retain the current launch plan and investigate Team A's dependency before recommending action.
- **Dependencies and urgency:** prioritize the blocking question while preparing unaffected work in parallel.
- **Approval scope and result states:** review each consequential change, then distinguish confirmed, unknown, blocked, and pending outcomes.
- **Changed conditions and clear exit:** recheck affected work on return, create new follow-up when needed, and separate cancellation, access, and retention choices.
