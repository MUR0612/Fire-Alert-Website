# Fire Alert Website (Brisbane)

A web application for wildfire alerts and emergency information, specifically designed for the Brisbane area.

## Features

- **Live Wildfire Alerts:**  
  - A marquee banner on every page highlights current wildfire-affected areas in real time.
- **Emergency Contact:**  
  - "Emergency Report 000" button at the top right of every page, directly linking to emergency services.
- **Interactive Map:**  
  - Home page integrates with the Google Maps API, showing wildfire locations.
  - Users can search for recent fire incidents and check proximity to their area.
- **Emergency Checklist:**  
  - Interactive checklist for emergency preparedness, built with JavaScript.
- **Wildfire Information:**  
  - Warning levels & alerts based on QFES data.
  - Property preparation & home hardening tips.
  - Detailed preparation tips for residents.
- **Notifications:**  
  - Users can enter their postcode to get real-time wildfire alerts for their area.

## Target Audience

Residents of the Brisbane area who need timely wildfire alerts and practical safety information.

## Tech Stack

- HTML / CSS / JavaScript
- Google Maps API
- [Other APIs or libraries you used, if any]

## Demo

_Screenshots or a live demo link can be added here_

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Get your own Google Maps API key: https://developers.google.com/maps/documentation/javascript/get-api-key
4. Set up your own Google Maps API key
5. Replace `YOUR_API_KEY_HERE` in `index.html` with your own key.

## License

MIT

---

Feel free to use or adapt this text for your own README.md!  


Guidelines for Other Designers / Developers
1. To update shared UI styles: Go to /general/css/ and edit the related CSS file.
2. To update styles for a specific page: Go to /style/ and edit the matching CSS file.
3. To change HTML layout or content: Go to /pages/ and open the page you want to edit (for example, information.html).
4. To add new images: Place the image file in the /image/ folder and make sure to link it correctly in your HTML.
5. To connect to an API or handle data: Add your code to /general/js/. This keeps all scripts in one place and avoids confusion.
6. For setup instructions and data source info: Please check the README.md file. It explains how to start and understand the project.