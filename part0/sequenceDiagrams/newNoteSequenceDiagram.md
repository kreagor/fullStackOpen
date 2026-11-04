newNoteSequenceDiagram
  participant server
  participant browser

  browser->>>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note payload: note=Hello new note
  activate server
  server->>>browser: 302 Redirect
  deactivate server

  Note right of server: The server creates a new note object and pushes it to its notes array

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: the css file
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server-->>browser: the JavaScript file
  deactivate server

  Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: [{ "content": "Hello new note", "date": "2025-1-12" }, ... ]
  deactivate server

  Note right of browser: The browser executes the callback function that renders the notes