const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
export let environment = {};
if(isProduction) {
      environment = {
        production: true,
        endpoint: "https://bene-bono-1-e4a9a4fef939.herokuapp.com"
    }
} else {
    environment = {
        production: true,
        endpoint: "http://localhost:3000"
    }
}
 