# CoSchedule Takehome Project: 🎥 GIPHY Gallery
 
This project was part of a take-home programming technical challenge. The requirements were to build a fullstack application that interfaced with another popular API data source. From there, the app would extend the data to create a platform where users could rate and comment on the media. For this exercise, I chose to build 🎥`GIPHY Gallery`, a website all about GIFs!

# 🔧 Technical Details
## 🎨 Front end
The front end is a `React` app utilizing a variety of packages. These include the standard `react-router` and other utilities, but also some unique integrations for styling. The gradient effect on the logo and login background use [Granim.js](https://sarcadass.github.io/granim.js/), a sweet library I've been trying to find a use for. Meanwhile, the majority of the app's visual flair comes from an extended them atop of the [Chakra-UI](https://chakra-ui.com/) framework. The front end is hosted on `Netlify` at: [https://giphy-gallery-site.netlify.app/](https://giphy-gallery-site.netlify.app/).

## 📂 Back end
The backend of the application is a `Node.js` project scaffolded with `Express`. For a database provider, I went with a NoSQL `MongoDB` solution, which the server interfaces with using `Mongoose`. While testing, I relied heavily on both `MongoDB Compass` as well as `Postman`. The server interfaces with the GIPHY Developer API to collect it's media and metadata, which can be found at: [https://developers.giphy.com/](https://developers.giphy.com/). The server is hosted on a `Heroku` Node.js Dyno.