# CoSchedule Takehome Project: 🎥 GIPHY Gallery
 
This project was part of a take-home programming technical challenge. The requirements were to build a fullstack application that interfaced with another popular API data source. From there, the app would extend the data to create a platform where users could rate and comment on the media. For this exercise, I chose to build 🎥`GIPHY Gallery`, a website all about GIFs!

# 🔧 Technical Details
## 🎨 Front end
The front end is a `React` app utilizing a variety of packages. These include the standard `react-router` and other utilities, but also some unique integrations for styling. The gradient effect on the logo and login background use [Granim.js](https://sarcadass.github.io/granim.js/), a sweet library I've been trying to find a use for. Meanwhile, the majority of the app's visual flair comes from an extended them atop of the [Chakra-UI](https://chakra-ui.com/) framework. The front end is hosted on `Netlify` at: [https://giphy-gallery-site.netlify.app/](https://giphy-gallery-site.netlify.app/).

## 📂 Back end
The backend of the application is a `Node.js` project scaffolded with `Express`. For a database provider, I went with a NoSQL `MongoDB` solution, which the server interfaces with using `Mongoose`. While testing, I relied heavily on both `MongoDB Compass` as well as `Postman`. The server interfaces with the GIPHY Developer API to collect it's media and metadata, which can be found at: [https://developers.giphy.com/](https://developers.giphy.com/). The server is hosted on a `Heroku` Node.js Dyno.

# 👟 Running the Project
If you'd like to run the project locally, I would recommend cloning the entire repository and opening it (as well as editting it) as a mono-repo project. This allows you to access everything in the stack at once as well as use cool IDE integrations! This project was developed in `Visual Studio Code`, which I set up with several extensions to handle `ESLint`, `prettier`, and other project-level utilities. I would highly recommend configuring your IDE to use the preset configs I have set up for each half of the app!
## 🎨 Front end
The front end can be run locally by using `yarn start` in your development terminal. If you do not have `yarn` installed, you can also run it with `npm start`. The React project will be run on a local development server at `http://localhost:3000`. To close the live preview, simply press `CTRL + C` in the terminal the project was started it.

## 📂 Back end
Running the backend is a bit tricky compared to the front end. The back end is also run with an `npm` command, but it requires some additional config first.

1. Creating an `.env` file
The server utilizes a `.env` file to store important information for use on the `Heroku` dyno, but it is not checked into source control to perserve the security of the API and databse keys. The tokens that should be added to the `.env` are:
- `GIPHY_API_KEY` - an API key from GIPHY to access their library of gifs. A development-tier key can be generated at: [https://developers.giphy.com/dashboard](https://developers.giphy.com/dashboard)
- `MONGO_URI` - A URI string that connects a user to a MongoDB database. This URI includes the database cluster, user, and password all in the string. A MongoDB instance can be generated at: [https://www.mongodb.com/](https://www.mongodb.com/)
- `PORT` - Any port number you would like the project to run on (I used 2222)

2. Setting up a MongoDB Cluster
To truly test the functionality of the server, it is recommended to have a live MongoDB that you can view the data changes on. Luckily, MongoDB supplies free low-level database clusters for hobbyist use. Once you have a cluster generated, create a new user with appropriate read/write permissions for the app. Then add the URI to the `.env` file and everything should connect happily. You shouldn't need to specifiy any database schemas, as `Mongoose` handles that the first time data is created in a new table/collection. 

Once both of these steps are done, you can run the Back end server with `npm start`.