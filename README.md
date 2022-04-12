# shielded resource 🛡️
Group project for CS497 (W22)
with Areena [@akhterare](https://github.com/akhterare), Hannah [@hannahhungerford](https://github.com/hannahhungerford), Jaclyn [@straightupjac](https://github.com/straightupjac) and Padam [@padamchopra](https://github.com/padamchopra)

[Live Demo](https://fresh-meal.vercel.app/)

## overview  💭 
This project's goal is to create a **proof of concept site that can help educate domestic violence victims, women seeking abortions and other marginalized populations about digital privacy** and provide support for those suffering from technology enabled abuse. This is a proof-of-concept and is not meant to be used as a replacement for any professional resources. 

> This tool can also be helpful for other technologists who are hoping to gain insight into the concerns of these user groups. Understanding your user's pain points BEFORE building allows you to consider your own biases when designing the tool, rather than leaving ethical design for the post-production, evaluation stage.

## design process  🎨
#### This tool was built for CS 497, a class that asks us how we can mitigate Discrimination in Computing. Before we built this project, which is targeted at vulnerable user groups, we ensured to research the implications of our project on all stakeholders involved. Here were the steps of our design process:

* **Empathize**: Our first step was asking ourselves how we could ensure that were dealing ethically with a vulnerable population, which started by researching their experience through trauma-informed design. **From our discussions in class, we realized that our empathy was not enough to understand the user's perspective, so we conducted interviews with those who were better informed on the user group we were targeting.**
  * [User Interview with TK from the Shore Centre](https://docs.google.com/document/d/1KkCDiY0Opcf0RoWc-HqWzN5HbBiDjB0tc-pAJJgfrOc/edit?usp=sharing)
  *  [Resources on trauma-informed design](https://cotsonline.org/wp-content/uploads/2018/04/Trauma-Informed-Design.BOD_.pdf) we used to understand the user's rights we should seek to respect when building.

* **Define**: Based on our our research, we were able to define a **list of user rights** and a **set of user priorities** that we used as North Stars to follow throughout our development process. **Creating this list allowed us to avoid a “crash test dummy approach” to building, where we become so attached to the solution that we convince ourselves that we must build the initial tool we sought out to create.**
  * We determined that the features we chose to include in our tool must respect the **user’s autonomy, transparency, and safety**. 
  * We learned to prioritize that the user should:
     * Be able to access privacy resources as quickly as possible
     * Feel safe, not cognitively pressured, and like they're not giving up information about themselves
     * Know that they  are not being supervised or monitored when they’re accessing resources. 
     * Know that they will not have their search results show up in their history.
     * Know that they will not get targeted ads related to the resources they search for.
   
* **Evaluate**: This is an ethical design step that asks us to consider who might negatively be impacted by the creation of our tool, and how we might mitigate that harm. Through our research, we discovered the theory of sensible privacy, which asks us to consider how to implement 

* **Ideate**: At this point, we were able to come up with a minimum set of features for our tool. Here was our initial proposal:
> Essentially, this will be a Chrome Extension will be disguised as a regular application, that takes a “keyword” input that would turn on its privacy regulation features, which would allow the user to clear their trackers, browsing history, and access privacy features that are traditionally “hidden” or “hard to find” for users acting under stress. The goal is to enable the users to use this extension without seeming like they’re accessing sensitive information. We are going to try to mitigate the harmful design practices that surround privacy settings today (buried deep in Chrome settings, etc.) by building a simple and friendly (no dark design patterns) UI, inspired by the red button on the Choice Connect website. Finally, we would like to include an ethical "clause" with some degree of research on how we could mitigate the misuse of a tool like this one, as we believe that all solutions are vulnerable to misuse. By considering the harm that our tool could cause beforehand to vulnerable groups (through discussion and research), we hope to catch and acknowledge any shortcomings in the "design" phase. 

* **Forecast**: Here, we stopped to look at our features (before building), and consider what potential problems existed with our current solution.

* **Prototype**: This is what led us 

_In the future: before this tool can be deployed (and if we had more time to follow up with our users), we must:_
* **Test**: User testing of our tool is **critical** to understanding if they will actually be positively impacted by what we've built. Although our initial discussions informed the features we prioritized, conducting a live usability test is a real way to measure our metrics for success, such as the time it takes users to navigate our website and whether it increases their cognitive load too much. 
* **Iterate**: We would use the feedback from our usability tests to iterate on the tool until we've ensured that our tool does not add more harm than it helps. This includes forecasting user groups whow might not have been considered in our initial personas, and those who migh misuse our tool for harm. 

## roadblocks 🚧 
#### As CS students trying to build an ethical tool, we ran into interesting roadblocks when trying to do justice to our ethical design steps:
* **Finding Vulnerable Users:** We weren't able to find actual members of our target user group, and had to instead discuss their issues with individuals who would be as close to understanding the privacy issues faced by vulnerable groups as possible. When talking to TK from the Shore Centre, we were able to understand that very few individuals who accesss its resources are ever willing to participate in post-experience follow-ups, surveys, or user discussions, as these can be highly traumatic experiences to relive. The Shore Centre can never gain participants for these studies without offering financial compensation, and even then this is hard. This demonstrates a barrier that computer scientists will face in building tools for vulnerable poppulations - if there is not enough money, care and support allocated to conducting user research, 
* **Balancing time between user research and development research:

## highlights of our tool ✨
#### We practiced user-centred design by ensuring that all features were justified by thorough user research and evaluated for potential harm. Here are some of the design decisions we made when building our tool:

* The website is **disguised as a meal prep/recipe website.** 
  * _We chose this "disguise" because it was a common website that it made sense to access frequently by a large user group. This allows the user to fulfill their desire to mask their actions on the internet from people who might be surveilling their search history._

* This website’s **metadata and SEO tags were intentionally set to represent a recipe/cooking website** to mislead the browser history preview. 
  *   _This design decision was a tradeoff we made  with regard to discoverability vs. user safety, to ensure that a smaller but more targeted user group would safely be able to use our website._

* **Enter help in the search bar** to access our resources
  * _Autocomplete on the search field is turned off to prevent history of the 'help' command from being trackable._

* Users can elect to enter an **OTP (one-time-password)** so that future attempts to access help require an OTP.

* The URL for the help page is **not accessible directly**
  * Try entering fresh-meal.vercel.app/details into your browser, it will redirect you back to your main page because of the sessionStorage auth status
  * _If someone tries to look up the user's DNS records and access this page, they will be unable to access the same resources._

* **Mobile friendly**
   * _Domestic violence, abortion seekers, etc. may not have access to their own personal computers so making this mobile-friendly was a top priority. We also wanted to address users who are always supervised at home, so they might try to access the resource from someone else's mobile phone._

* We offer a **quick-leave button** so users can easily navigate away from the page
  * _This was based on the user's key objective when accessing our website being speed, from user discussions with TK about the Choice Connect website from the Shore Centre_

## running our project 💻
Getting started:
```bash
yarn install
```
Run the development server:

```bash
npm run dev
# or
yarn dev
```
