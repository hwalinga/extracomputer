// For connecting to Django server:
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

let gMuaatronomeSession = null;  // session name for connecting to server
let gMuaatronomeRecover = false; // set this if you to restore a session from the server
let gMuaatronomeActive = true; // Disable the code blocks that communicate with the server.
let gActionButtonsProcessed = false; // boolean to track if the action buttons have been processed
