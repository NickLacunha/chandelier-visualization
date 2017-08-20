Goal: Build a data visualization scaffold in Node.js using MongoDB as the store, D3.js and Dc.js for the frontend, mongoose.js doc-obj mapping to drive scaffolding.

Current state:

3/19/2017
Following the tutorial at https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/ to set up a basic data visualization project that I can use as a point of reference (to write a scaffolder that can build up essentially the same project from just a data model). Roadblock right now is that the stripped-down dataset the tutorial was written for has disappeared from the author's dropbox and the source is more difficult to get data directly from than I'd like. So, I found some baseball data and I'm going to do the sample project on the Salary figures. Look in node-dc-mongo/samples_data/ for more info.

The data component is wired now; I have to refactor the api slightly then make the appropriate changes to the frontend so it consumes baseball salary data instead of nerd data. (I'm not going to lie, I very much enjoyed getting to write that sentence.)