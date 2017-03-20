
// define our salaries model data-first
// module.exports allows us to pass this to other files when it is called
// this code must be run after connectionsubject has been initialized
// I think this is a weakness that should be refactored, personally.
module.exports = connectionsubject.model('', {}, 'salaries');
