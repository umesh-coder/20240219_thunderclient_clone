function fetch_data() {
  var link = document.getElementById("link").value;

  console.log("link:-" + link);

  // https://jsonplaceholder.typicode.com/users

  // Fetch JSON data from the API
  fetch(link)
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      // Check if data is an array
      if (Array.isArray(data)) {
        // Convert each JSON object to a string and concatenate them
        var concatenatedJSON = "";
        data.forEach(function (obj, index) {
          concatenatedJSON += JSON.stringify(obj, null, 2);
          if (index < data.length - 1) {
            concatenatedJSON += ",\n"; // Add a comma and a new line if it's not the last object
          }
        });

        // Display concatenated JSON data in a <pre> element for better formatting
        document.getElementById("json-data").innerHTML =
          "<pre>" + concatenatedJSON + "</pre>";

          console.log("It is an array:-"+concatenatedJSON);
      } else {
        // If data is not an array, display it directly

        document.getElementById("json-data").innerHTML = JSON.stringify(
          data,
          null,
          2
        ).replace(/\n/g, "<br>");

        console.log("Not an Array :-"+data);
      }
    })
    .catch((error) => {
      document.getElementById("json-data").innerHTML = "<h1>" + error + "</h1>";
      console.error("Error fetching data:", error);
    });
}
