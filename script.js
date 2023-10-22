//your JS code here. If required.
  function onDOMLoad() {
            // Get the body element
            var body = document.body;

            // Clear any existing content in the body
            body.innerHTML = "";

            // Create a new text node with the desired message
            var textNode = document.createTextNode("DOM load success");

            // Append the text node to the body
            body.appendChild(textNode);
        }

        // Add an event listener for the DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", onDOMLoad);
