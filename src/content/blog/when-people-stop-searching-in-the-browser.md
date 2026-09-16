---
title: "When People Stop Searching in the Browser"
date: 2026-08-24
series: "Noises of AI"
tags: [agentic browser, search, trend analysis]
excerpt: "Search is leaving the browser. Everything that happens after the search is not. Three companies made three different bets about which half to keep."
---

In May 2025, Apple's Eddy Cue sat in a Washington courtroom and said that searches in Safari had gone down the previous month. He added that it had not happened in twenty-two years, and that the reason was that people were using ChatGPT and Perplexity. Google's stock fell that afternoon.

Google pushed back. Its statement said total queries were still growing, including queries coming from Apple's devices and platforms. It did not address Safari specifically.

Both statements can be true at the same time. Search is not shrinking. It is separating by purpose.

When I want to understand something, I no longer start in a search field. I ask an assistant, because the thing I want back is a synthesis, not ten links I have to read and reconcile myself. When I want something specific, I still go to the browser. An address. A store's hours. A site I already know the name of. The bank.

The split is not about which tool is better. It is about how much work I want done before the answer reaches me.

That behaviour has been changing for about two years now, and it has been read mostly as a story about Google losing search. I think it is a story about browsers, and it is more interesting than it looks.

## A browser has always done two jobs

The first job is search.

The second job is everything that happens after the search. Logging in. Filling the form. Comparing what is in two tabs. Booking the thing. Paying for it. Coming back a week later to check on it. Keeping the password, the receipt, the session, the tab you have not closed since March.

Only the first job is being taken away.

And it was always the most portable of the two. Nothing about asking a question requires a browser. Search lived there because that was where the web was, not because the two belonged together. Once a model could answer directly, the question had no reason to stay.

The second job has not moved, and the reason is specific. For software to do something on your behalf, it has to be you. It needs to be logged in as you, holding the session that proves it. Today that identity lives in the browser. There is no other place it is kept.

That is the part I keep coming back to. Answers can leave because an answer only needs a model and an index. Actions stay because an action needs your identity, and your identity is still sitting in the browser.

Over the past year, three companies have made very different bets about what to do with that. None of them agree on the strategy. All of them are acting as though the two jobs have already come apart.

## OpenAI kept the answers and let the shell go

ChatGPT Atlas launched on 21 October 2025. It was macOS only. It stopped working on 9 August 2026, 292 days later. It never shipped on Windows or mobile.

OpenAI's explanation was that browser-based agentic capability was moving into ChatGPT and Codex, and that the lighter parts would live on as a Chrome extension and inside the ChatGPT desktop app. The line from the shutdown note that got quoted everywhere was that an AI browser should be a feature, not a destination.

It is worth being precise about what was abandoned. OpenAI is still building software that acts on the web. What it stopped doing was maintaining its own browser to do it in. The answers stay in ChatGPT, where OpenAI already has the users. The acting happens inside a browser that someone else pays to maintain.

## Apple put a product on each side of the split

At WWDC in June 2026, Apple introduced Siri AI, a rebuilt assistant that holds multi-turn conversations, reads what is on your screen, and pulls current information from the web. The detail that matters most is that it comes with its own standalone app, with conversation history that persists and syncs through iCloud. On the Mac it also sits in Spotlight. On the iPhone it lives in the Dynamic Island.

Old Siri answered and disappeared. The new one is a place you go back to. That is the shape of a chat assistant, and it puts Siri in the same position on the phone that ChatGPT, Claude and Gemini already occupy. Apple built the underlying models with Google, using Gemini technologies for the next generation of its foundation models, while keeping the models and the privacy architecture its own.

In the same keynote, Safari got three new things.

Automatic Tab Groups, which sorts open tabs into topics. Notify Me, which watches a page and tells you when it changes. Describe an Extension, which lets you generate a Safari extension by describing what you want it to do.

Tab management. Monitoring. Extending. All three sit after the search. The search field itself was not touched.

I want to be clear that this is my reading and not something Apple has said. But the pattern is legible enough. Apple watched the same behaviour split that Cue described in court, and rather than defending the search field, it shipped a product on each side. The asking goes to Siri AI, where it can compete for the query directly. Everything after the asking stays in Safari, which is where the logins and the sessions already are.

## Then a company went the other way

Polar launched at the end of July 2026, built by a startup called Recursive Intelligence. Before Polar, the company's product was an AI agent called Composer. In May they dropped it and built a browser instead.

The browser is Chromium based and macOS only. It raised a $5.7 million seed round led by Madrona. Its CEO, Kevin Jiang, spent a year at Perplexity working on Comet before leaving to build a competitor.

What it does is narrow. It does not summarise pages or answer questions. It clicks, types, and navigates inside websites where you are already signed in, and it keeps going: the company says users ran more than 4.5 million actions across the web in seven months, and that some tasks have run for over fifteen hours without a person watching.

An assistant became a browser in the same year a browser became a feature inside an assistant. The two products moved in opposite directions and arrived at the same conclusion about where the work happens.

Looking at how Polar is positioned, two things read as deliberate choices and two read as costs that came with the choice.

**They chose a narrow audience.** Polar is for people in sales, recruiting, marketing, research and operations. Jiang's stated reason is frequency: ordinary consumers do not book a flight or make a reservation every week, so there was never a strong enough pull for them to switch browsers. If acting on your behalf only pays off at the frequency of professional work, then this is not a mass feature. It is a work tool that happens to look like a browser.

**They chose not to be your browser.** Most Polar users keep their existing browser as the daily driver and open Polar when they have something to automate. That is a real finding, and it does not describe a browser war. It describes people keeping a daily browser and a work robot side by side. If that pattern holds, the interesting question stops being which browser wins and becomes how many browsers a person is willing to run.

**What it needs is not your data. It is your identity.** The reason Polar does not need a connector for every service is that it operates inside sessions you have already authenticated. That is elegant, and it is also the whole exposure. An agent working inside your logged-in state can do anything you can do, on every site you are signed into, for as long as the session lasts. The permission model available today is close to all or nothing. There is no obvious way to grant one site, for one task, for one hour.

**The engine is not theirs to decide.** Polar is a Chromium fork, and so was Atlas, and so is almost everything in this category. They are desktop first. *(Speculation from here: I read this as a structural constraint rather than a preference. How much control an engine exposes, and on which devices, is decided by whoever owns the engine, not by the company building on top of it. If the action layer turns out to be the valuable half of the browser, that decision stops being a technical detail.)*

## What I think is actually happening

The courtroom line from May 2025 was reported as bad news for Google. Read again a year later, it was describing something about browsers: a change in why people open one at all, which happened to show up first in a search volume number.

Since then, three companies have answered it three different ways. One pulled the answers back into its own app and gave up on owning a browser. One shipped an assistant and a browser in the same keynote and let each take half. One started as an assistant and turned itself into a browser so it could act as its user. The strategies do not agree. The premise underneath them does. Searching and everything after searching are no longer the same product.

The browser was never the destination. It was the place where the web became yours: where you logged in, where your things were kept, where anything actually got done. Search was a tenant, and a portable one. It has moved out.

What is left is not a smaller product. It is the half that was always doing the heavier work, finally being looked at on its own.

---

## Sources

- Eddy Cue testimony, DOJ v. Alphabet, May 2025: https://fortune.com/2025/05/08/apple-eddy-cue-testimony-google-alphabet-safari-ai-search-features
- Google's response on query growth: https://searchengineland.com/google-searches-apple-safari-fall-455161
- ChatGPT Atlas shutdown: https://www.techradar.com/pro/openai-shuts-down-its-atlas-browser-after-not-even-a-year
- OpenAI folding Atlas capability into ChatGPT and Codex: https://www.techzine.eu/news/applications/142826/openai-is-discontinuing-atlas-but-its-ai-browser-strategy-remains/
- Siri AI announcement and standalone app: https://www.macrumors.com/2026/06/20/apple-unveiled-these-five-new-apps/
- Siri AI app details and Spotlight integration: https://www.mediaweek.com.au/apple-unveils-new-siri-ai-at-wwdc-2026/
- Apple foundation models and Gemini collaboration: https://www.idc.com/resource-center/blog/wwdc-2026-apples-ai-credibility-test/
- WWDC 2026 Safari features: https://www.itechpost.com/articles/236257/20260609/wwdc-2026-apple-macos-27-golden-gate-brings-new-safari-features.htm
- Polar launch and funding: https://www.businesswire.com/news/home/20260729290277/en/Polar-the-AI-Browser-That-Does-Real-Work-Raises-$5.7M
- Polar replacing the Composer agent, Chromium and macOS detail: https://www.techrepublic.com/article/news-polar-ai-browser-security/
- Jiang on consumer frequency: https://piunikaweb.com/2026/07/30/polar-ai-browser-review-first-impressions/
- Polar users keeping a separate daily browser: https://www.digitaltoday.co.kr/en/view/86985/perplexity-alumnus-launches-polar-ai-browser-for-knowledge-workers
