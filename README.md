# Idseval.com

Idseval.com is a simple looking website where I showcase my writing.

My intention when creating the website was to create a personal medium-like web-application that had a nice UI to display my readings and a nice UX to dynamically post my writings to a firebase backend.

I think I succeeded at both these objectives: on the reader side of my application, the design of the application, while simple, really reads nicely and looks and feels a lot like medium.com. One objective of mine was to include a simple monetization model. I chose the value 4 value model, where readers can decide whether they would like to pay something for the article. I did this by enabling payments in Bitcoin through a btc-pay-server.

On the writing side of my application, which can be accessed through idseval.com/new_article, you'll find a nice writing interface that looks very similar to a posted article. The interface collects an image and all the contents and styles of the dynamically generated inputs and posts them to the firbase backend, where the article data is fetched from once somebody tries to load an article. Overal I am really happy with how it turned out and I look forward to using it in the future.

## How it works.

Idseval.com is a React application. This means it is build up from multiple small components. It makes use of React-Router to handle routing.

The data flow of an article starts from the writing interface. Here I used React to dynamically generate inputfields that symbolise paragraphs or headers with multiple styling options. I really put in the effort to make it feel like a text editor, where when you create or delete a paragraph or header, you automatically focus on the intuitive paragraph.

This was all done by creating an array that represents the article's contents and mapping that to the screen. This array is really at the centre of the writing interface as it is the place where all data is collected, as where all data is mapped from.

When satisfied with the overal look of the article, including the title, an image and some side-data should be filled. When done filling in these field, all the data that's part of the article will be mapped to an object that is consequently submitted to firebase in JSON format. To submit to firebase, a authentication token is required, which only I can access by login in with my email and password at idseval.com/login.

The main page of the website gives an overview of all articles that are inside the firebase, when an article is submitted it instantly displays in the article lists. When an article is clicked, idseval.com fetches the corresponding article contents and dynamically maps them to the screen with the desired styling.

This is in a nutshell how idseval.com works. Of course a lot of React code went into creating this, but this is the main data flow.

## Future upgrades.

In the future I would like to upgrade this app to Next.js. This is mostly to allow for server side rendering, which would help with SEO.

Furthermore, I think the way in which data is fetched could be better optimized, now every load fetches data again. I think it could help reduce request traffic by handling data fetching once, in stead on every page rendering.

I would also like to make the UX of the writing interface feel even more like a text editor by introducing navigation through direction keys and by making it possible to select multiple inputs at the same time.

Overall I'm very happy with the application currently and it is a working product that I will use to display and monetize my writing.
