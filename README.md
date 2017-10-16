## simple react playground

This is a simple react project that allows for you to mess with the basics of
React. It comes with some npm commands that make it easy to get up and running.

I have tested this on node v6.7 although I am pretty sure it works for other
versions as well!

```
# install dependencies
$ npm install

# start express server, access at http://localhost:3006/
$ npm start

# build client-side js
$ npm run build

# watch client-side js
$ npm run watch
```

### project goal

For this exercise, extend the existing React setup to toggle the 'Content' view
when a user clicks the elements on the nav bar on the left. The only
requirement is that you create a few more components that represent each of
these views. Other than that, you can approach this any way you'd like - there
is no wrong answer here.

When a user clicks on a new nav element, it should switch the content to that
view and highlight the new nav element. Don't worry about styling, this is just
to go over some basics of React.

If you have any questions, please email or shoot me a text!


### Comments from Joe:

A few things I wanted to call out:

First, I initially implemented the "tracking" of which route was the current one by basically pushing a two-way binding of sorts in to React. The React patterns seem pretty focused on one-way data flow, but it's certainly something that will come up I think, and I wanted to try it out. In any case, it worked, and I sort of wanted you to see it, but I felt that wasn't the "React way" so I implemented something else (which I think is a pretty React-y way to get it done).

Second, the components I created to actually load based on the navigation have nothing to them, just a line of text. It didn't seem like that's what you were looking for. If you want me to try something more interesting with those, just let me know.

Third, I chose to put the navigation options in a module and pass them to the navigation components via props. I wouldn't necessarily do it that was for a "real" app, but I felt it was a good way to get used to working with props and it did make the navigation options a little more orderly.
