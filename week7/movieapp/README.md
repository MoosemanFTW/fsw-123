# Movie App

#### In this project I used React along with the OMDb (Open Movie Database) API.

With this API I was able to get the movie name along with a poster of the movie I wanted to diplay. The app itself functions by making the API calls and returning the results and diplaying them in a flex-box to keep things nice and tidy.

For the favorites part of the app I used the ID that was provided by the API. Then I just had to use that ID in order to set the movies into a state array. After that I had the idea to store the favorited movies to the local storage. After some research and testing I learned how to use:
```javascript
localStorage.setItem();
localStorage.getItem();
```
Using these I was able to dynamicly store the favorited movies.

I used ReactRouter to handle the switching between the 3 pages.

The part that took me the longest was the styling. After many edits and changes I settled on the dark background in order to highlight the movie posters. I also kept the UI simple to make it easier to read and use.

**Thank you** for visiting my project and the start-up page 'How to use' gives good instructions on how to operate the app once you launch it.

## To launch
Navigate to the movieapp file in your code editor then enter:
```javascript
npm start
```