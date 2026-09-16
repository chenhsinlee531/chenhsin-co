---
title: "When People Stop Searching in the Browser"
date: 2026-08-24
series: "Noises of AI"
tags: [agentic browser, search, trend analysis]
excerpt: "Search is leaving the browser. Everything that happens after the search is not. Three companies made three different bets about which half to keep."
---

In May 2025, Apple's Eddy Cue testified in a Washington courtroom and said that searches in Safari had dropped the previous month. He went on to say that it hadn't happened in twenty-two years, and the cause was people using ChatGPT and Perplexity. Google's shares dropped in that afternoon.

Google fought back. Its statement acknowledged growing total queries, as well as queries from Apple's platforms and devices. No reference was made to Safari.

Both statements can coexist. Search is not decreasing. It is splitting by purpose.

Nowadays if I need to learn something, I no longer start in the search field. I talk to an assistant because what I receive as a response is a synthesis, not ten links I will have to process. If I need something specific, I still go to the browser. An address, store hours, a known site, the bank.

It is not about the tool that works better. It is about the work put into the answer before it reaches you.

That user behaviour change has been occurring for about two years now, and it has been understood mostly as the story about Google losing the search. I think it is the story about browsers, and it is more interesting than it appears to be.

## There are two functions of the browser

The first function is search.

The second function is everything that happens after the search. Logging in. Filling the form. Comparing two tabs. Booking the thing. Buying it. Checking on it a week later. Storing the password, the receipt, the session, the tab that has been opened since March.

Only the first function is being stolen.

And it was always the most transportable of the two. Nothing in asking a question requires a browser. Search lived in the browser not because they belonged together, but because the web did. Once a model learned to answer the question, it lost the need to live there.

The second function has not moved. And the reason is particular. For software to do something on your behalf, it needs to be you. To be logged in as you. To have your session that proves it. Today that identity resides in the browser, and there is no other place for it.

That is the point that I am returning to constantly. The answers can leave because an answer only requires a model and an index. Actions remain because an action requires your identity, and it is still residing in the browser.

During the last year, three companies took quite different bets on how to deal with the reality. The strategies differ, and all three act like the two functions have already separated.

## OpenAI let go of the shell and kept the answers

ChatGPT Atlas was released on 21 October 2025. It was available only on macOS. It stopped working on 9 August 2026, 292 days later. It was never shipped for Windows or mobile platforms.

According to OpenAI, browser-based, agentic capabilities were moving to ChatGPT and Codex, while the lightweight components were left as a Chrome extension and part of the ChatGPT desktop application. The message in which Atlas was shut down was quoted widely, saying that an AI browser should be a feature, not a destination. OpenAI continues developing software that acts on the web. What it ceased to do was developing its own browser to perform it in. The answers remained in ChatGPT, where OpenAI has its users. The actions happen inside a browser that someone else maintains.

## Apple developed a product for each side of the split

At WWDC in June 2026, Apple introduced Siri AI, a newly rebuilt assistant able to conduct multi-turn conversations, read from your screen, and pull current information from the web. What matters here is that Siri AI is shipped as a separate standalone application, whose conversation history persists and syncs through iCloud. On the Mac it is in Spotlight. On the iPhone it lives in Dynamic Island.

The old Siri would answer and fade away. The new one is a place you will return to. That is the structure of a chat assistant, and it puts Siri in the same spot on the phone as ChatGPT, Claude, and Gemini. Apple developed the underlying models in cooperation with Google, using Gemini technologies for the next generation of its foundation models, while retaining the ownership of the models and the privacy architecture.

Also, in the same keynote, Safari received three new features.

Automatic Tab Groups, organizing open tabs by topic. Notify Me, watching the page and notifying you if it changes. Describe an Extension, allowing you to generate a Safari extension simply by describing what it should do. Tab management. Page monitoring. Extensions creating. All of them appear after the search, while the search field remains untouched.

From my perspective, Apple saw the same behaviour as Cue described in the courtroom, and instead of defending the search field, it shipped a product for each side. Asking a question moved to Siri AI, which competes for the query directly. Everything after that stay in Safari, where logins and sessions are already kept.

## But another company took a different bet

Polar was released at the end of July 2026, developed by a startup called Recursive Intelligence. Before Polar, the company released an AI assistant named Composer. In May they scrapped it and started working on a browser.

Polar is a Chromium-based browser available only on macOS. The project raised $5.7 million in its seed round, led by Madrona. Kevin Jiang, Polar's CEO, worked for a year at Perplexity developing Comet before founding his own rival.

What Polar does is limited. It does not summarize pages or give answers. It clicks, types, and navigates inside websites where you are already logged in, and it keeps going: the company reported that the users executed more than 4.5 million actions across the web in seven months, some of the tasks running for more than fifteen hours without human supervision.

An assistant turned into a browser in the same year a browser turned into a feature inside an assistant. The two products took opposite paths and came to the same conclusion about where the work happens.

## What can be observed in the positioning of Polar

**They targeted a narrow audience.** Polar is designed for people who work in sales, recruiting, marketing, research, and operations. Jiang explains it by the frequency of tasks. Ordinary consumers do not book a flight or make a reservation every week, so there is not enough pull for them to switch browsers. If acting on your behalf makes sense only if you are actively using professional work, that is not a mass feature. That is a work tool that just happens to look like a browser.

**They did not want to become your browser.** Most Polar users keep their regular browser as the default one and open Polar when they need to automate something. That is a true finding, and it is not a browser war. It describes people maintaining their daily browser and a work robot next to it. If the pattern persists, the important question becomes not which browser wins but how many browsers people are ready to maintain.

**What it needs is not your data. It is your identity.** That is why Polar does not need a connector for every service: it works inside the sessions you have already authenticated. That is elegant, and that is also an entire exposure. An agent working inside your logged-in state can do anything you can do, on every website you are logged in, for as long as the session lasts. The current permission model is all-or-nothing. There is no obvious way to give access to one site, for one task, for one hour.

## What I think is actually happening

The quote from May 2025 was bad news for Google back then. But read again a year later, it describes something about the browser: the shift in the reason why people open one. It happens to occur in the search volume metrics.

Since then, three companies answered it in three different ways. One pulled the answers back into its own app and abandoned maintaining the browser. Another shipped an assistant and a browser in the same keynote and let each of them take its half. One began as an assistant and turned into a browser, becoming a surrogate for you. But the strategies are conflicting. The underlying premise remains the same: searching and everything that happens after the search are not the same product anymore.

The browser was not the destination. It was the place where the web became truly yours: where you log in, where your stuff is, where things really get done. Search was just a tenant that moved out. What remains is not a less-valuable product. It is the half that was always doing the heavier work, finally being looked at on its own.

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
