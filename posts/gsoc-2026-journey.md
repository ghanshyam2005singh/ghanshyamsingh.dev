---
title: "I Didn't Join for GSoC — And That's What Led Me There"
excerpt: "I joined Alpha One Labs without knowing Django, without a plan, and without even thinking about GSoC. A few months later, I was selected. This is that story."
date: "2026-06-26"
coverImage: "/blog/gsoc.png"
tags: "GSoC, Open Source, Alpha One Labs, Django, Google Summer of Code"
---

![Alpha One Labs Logo](/blog/logo.png)
When I joined Alpha One Labs in November, Google Summer of Code wasn't part of the plan.

In fact, I barely had a plan.

I wasn't thinking about proposals, acceptance rates, or becoming a GSoC contributor. I wasn't calculating which organizations had the best odds. I wasn't reading blogs about how to impress maintainers.

I was simply looking for a place where I could learn, contribute, and gain real experience working on something that mattered.

And at that point, I had never worked with Django before.

Not even once.

> That didn't stop me. And looking back, that's exactly what made the difference.

I should mention something here that most people don't know about my journey.

Alpha One Labs wasn't the only organization I was contributing to.

At any given point during those months, I was actively contributing to six different open-source organizations. Different codebases, different tech stacks, different communities. Open source had become genuinely interesting to me — not as a means to an end, but as a way of learning things I couldn't learn anywhere else.

But Alpha One Labs always felt different.

It came back to Daniel.

Every time I made a mistake — and I made plenty — he didn't let it discourage me. He corrected me, explained why, and kept me moving forward. There was never a moment where I felt like my presence in the community was a burden or that I was too far behind to catch up.

That kind of support is rarer than people realize.

It's also what kept me coming back.

## Joining Without a Roadmap

The first time I opened the Alpha One Labs codebase, I felt completely lost.

The project was a full-scale Django educational platform — `views.py` alone was thousands of lines. There were `models.py`, `forms.py`, `forms_additional.py`, `admin.py`, `admin_views.py`, `signals.py`, `consumers.py`, `middleware.py`, dedicated services for things like calendar sync, video conferencing, secure messaging, peer challenges, quiz logic, notifications, referrals, and a full virtual lab system. Migrations going back two years. Templates everywhere. A test suite. Linting configs. Pre-commit hooks.

It had real structure, real history, real patterns built by people who clearly knew what they were doing.

And I was someone who had never touched Django.

But here's the thing about open source that nobody tells you upfront.

You don't need to understand everything before you start.

You just need enough curiosity to take the first step and enough stubbornness to take the next one after that.

So I started small.

I set up the development environment. I read through the codebase, file by file, trying to connect the dots. I broke things. I fixed them. I experimented. I read the Django documentation over and over again until things slowly started making sense.

Those early days were humbling.

But they were also exactly where the learning happened.

## Small Contributions, Big Lessons

My first contributions were nothing spectacular.

A bug fix here. A small improvement there. A documentation update that nobody would write a blog post about.

But those tiny contributions taught me something new every single day.

Every time I opened a pull request, I was forced to understand the code a little more deeply. Every review comment I received pushed me to think more carefully. Every merged change — no matter how small — gave me a slightly better understanding of how the project worked.

I wasn't doing this to impress anyone.

I was doing it because I genuinely wanted to understand.

And then came the first merged pull request.

I still remember opening GitHub and seeing those words: **Merged**.

It wasn't a complex change. It wasn't a feature that would make it into a release announcement. But it was mine, and it was real, and someone on the other side of the world had reviewed it and decided it was good enough to be part of the project.

That feeling was difficult to explain.

> It wasn't just code getting merged. It was proof that I belonged there.

## The Conversation That Changed Everything

After a few contributions, something unexpected happened.

Daniel noticed my work.

He wasn't just acknowledging that I had submitted pull requests. He was paying attention to the quality of my thinking, the consistency of my presence, and the fact that I kept showing up even when no one was asking me to.

He encouraged me to keep going. To explore larger problems. To think beyond the small fixes and start looking at the project from a bigger picture.

That conversation changed something in me.

Up until that point, I had been contributing with my head down, focusing on one task at a time. After that conversation, I started seeing the project differently. I started looking for problems that hadn't been solved yet, ideas that could genuinely improve things, work that was a little bigger than anything I had attempted before.

When a maintainer tells you they trust your judgment, it reshapes how you see yourself.

## Building Something Real

A group of us decided to build an AI project together inside Alpha One Labs.

We called it ScholarAI.

The problem was simple to describe and surprisingly hard to solve. Research papers are long. Reading through pages of dense academic content to extract the key ideas takes a lot of time, even for people who do it regularly. Students and researchers were drowning in literature. We wanted to build something that could help.

The idea: an AI-powered research assistant that could take long academic documents and intelligently summarize them, help with paper discovery, and let you actually query the content. Not just keyword extraction. Actual comprehension. Something that understood context.

We explored RAG. We worked with LLMs. We figured out how to process long-form text, chunk it meaningfully, retrieve relevant sections, and generate summaries that actually made sense.

It wasn't perfect.

Looking back, the implementation had gaps. There were architectural decisions we would make differently today. As an open-source contribution, it probably needed more polish before it was truly production-ready.

But that wasn't really the point.

The point was that we had stopped thinking like contributors who fixed bugs and started thinking like people who built products. We had looked at a real problem, designed a solution, and seen it through from idea to working prototype.

> That shift in thinking — from fixing what's broken to building what's missing — is one of the most important things open source gave me.

## GSoC Wasn't Even on My Mind

Here's the part that surprises most people when I tell this story.

Even as all of this was happening — the contributions, the conversations with Daniel, the AI project — I was not thinking about GSoC.

Not even a little.

I was not optimizing my contributions to look impressive on an application. I was not selecting issues based on what might catch a mentor's eye. I was not secretly building a strategy while pretending to just be learning.

I was just there.

Contributing because I enjoyed it. Learning because I wanted to grow. Helping because it felt good to help.

This is the exact opposite of how most people approach these programs. Most people start with the goal and work backwards. I started without a goal and let the work take me somewhere unexpected.

I have no doubt that this made a difference.

Because genuine contribution looks completely different from strategic contribution.

## Becoming a Reviewer

At some point, something quietly shifted.

I wasn't only submitting pull requests anymore.

I was reviewing them.

When new contributors opened pull requests, I was one of the people looking at their code, asking questions, offering suggestions, and helping them improve. I reviewed more than 25 pull requests over the course of my time in the organization.

That number matters more than it might seem.

Most contributors never reach this point. They contribute, they learn, and eventually they move on. Very few earn the trust of maintainers to the point where they are actively helping evaluate other people's work.

That trust was not given to me because I asked for it.

It was given because I showed up consistently, because my contributions were thoughtful, and because the community could see that I genuinely cared about the project.

> The moment you go from contributor to reviewer, you stop being a visitor and become part of the foundation.

## The Season Everything Got Loud

When GSoC season officially arrived, the entire organization changed.

New contributors appeared from everywhere. Issues that had been sitting quietly suddenly had multiple people working on them. Pull requests flooded in. Discussions became more frequent, more urgent, more competitive.

Maintainers who had been thoughtfully engaged with every contributor were now stretched thin, juggling dozens of conversations simultaneously.

And I found myself doing something I had not expected.

Helping manage the chaos.

I was answering questions from new contributors. I was helping people find the right issues to start with. I was reviewing their work and giving feedback so maintainers didn't have to field every question alone.

I had become someone the organization relied on — not because of a title, not because of a formal role, but because I had been there long enough and contributed enough that it was natural.

Looking back, this was probably the moment that made my eventual selection feel inevitable rather than surprising.

## Exams, Deadlines, and a Proposal I Almost Didn't Write

Here is where the story gets honest.

The GSoC proposal deadline was March 31, 2026.

My exams were happening at the same time.

While many other applicants had been carefully crafting and refining their proposals for weeks, I was in the middle of exam season with only a few days left before the deadline. I had been so focused on actual contribution that I had barely thought about the application itself.

There was a moment where I genuinely considered whether there was even enough time.

But I sat down and wrote it anyway.

I went back through everything. My contributions. The AI project. The PRs I had reviewed. The problems I had solved. The direction I thought the project could grow in. I tried to write a proposal that sounded like me — someone who had been in the codebase, not someone who had studied it from the outside.

Daniel reviewed it.

His feedback was direct and specific, the kind of feedback you only get from someone who knows both the project and your work well enough to tell you exactly what needs to change.

I made the edits. I read it again. I submitted it.

And then I waited.

## The Email

The results were announced on April 30, 2026.

I opened my inbox that morning without many expectations.

I had submitted my proposal. I had done everything I could do. Whatever happened next was genuinely out of my hands, and I had made peace with that.

Then I saw it.

The subject line.

The acceptance email.

I read it once. I read it again. I closed the tab and reopened it to make sure I was reading correctly.

I had been selected for Google Summer of Code 2026.

I sat there for a moment in silence.

There was no dramatic celebration. No immediate post. Just a quiet recognition of what it meant — not just the selection itself, but everything that had led to it.

> The months of learning Django from scratch. The pull requests that no one was asking me to open. The reviews I wrote because I wanted to help. The AI project we built because it was interesting. The contributions made in a season when I never once thought about this moment.

> All of it had quietly been building toward something.

## What I'm Actually Building

My GSoC project is rebuilding the Alpha One Labs website from the ground up.

The old website — the Django monolith I had been contributing to for months — works. It has features, users, a community, and years of work behind it. But the new vision is different.

The new platform is called **learn**. It is being built as a fully encrypted educational platform. Different tech stack entirely: HTML, CSS, and Python running on Cloudflare Workers. No traditional backend in the same sense. The encryption is not a feature added on top — it is built into the foundation.

It is a fundamentally different way of thinking about what a learning platform can be.

When I submitted my proposal, I was writing about a problem I had been inside for months. I wasn't describing the old codebase from the outside. I had touched views.py and models.py and templates and migrations enough to understand what the old architecture looked like, and what it would take to move to something completely new.

That context is what no amount of last-minute preparation can replace.

I will be writing a detailed blog about the proposal itself, the technical decisions, and the actual work happening inside the coding period. There is a lot more to say about the architecture, the challenges, and what encrypted-by-default actually means in practice.

That story is still being written.

## What I Know Now

If you are a student reading this hoping to get into GSoC, I understand what you are looking for.

You want the strategy. The shortcut. The formula.

But I am not sure there is one.

What I can tell you is what I experienced.

Contributing to six open-source organizations while keeping Alpha One Labs at the center. More than 10 pull requests merged. More than 25 pull requests reviewed. ScholarAI built from a real problem. Months of showing up in a community and genuinely caring about what I was building.

A maintainer who never once let me feel discouraged when I got something wrong.

None of that was done because I had a plan.

All of it was done because I was curious, because I enjoyed the work, and because Daniel and the community at Alpha One Labs made me feel like my contributions actually mattered.

GSoC became a result of those contributions.

Not the reason for them.

And I think that distinction — that quiet, almost invisible distinction between contributing because you want something and contributing because you love the work — is the thing that changes everything.

> You do not need to start with a destination. You just need to start.

The rest has a way of finding you.

*If you want to go deeper — the proposal, the technical decisions behind the learn platform, and what the actual GSoC coding period looks like — I'm writing a separate blog about all of that. The journey inside Alpha One Labs has more to it than a selection email. That story deserves its own space.*
