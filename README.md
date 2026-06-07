# P2P WebRTC File Sharing System 🌐📦

[Hebrew Description Below](#עברית)

A premium, browser-native Peer-to-Peer (P2P) file sharing web application. Files are transferred directly between browsers without any server storage, ensuring maximum privacy and transfer speeds. 

Equipped with a lightweight, Dockerized Node.js/WebSocket signaling server that supports dynamic STUN/TURN configurations to traverse strict firewalls.

## 🚀 Key Features

*   **100% Client-Free**: No installations or plugins required. Works directly in modern web browsers.
*   **True P2P Flow**: Files are read chunk-by-chunk and streamed directly browser-to-browser.
*   **Backpressure Aware**: Prevents browser memory overflow by monitoring WebRTC buffer levels (`onbufferedamountlow`), enabling multi-gigabyte file transfers.
*   **Security & Privacy**: Zero storage on the server. Peer rooms are identified using secure, unguessable **UUID v4** tokens.
*   **Dockerized Server**: Easily build and run the signaling server with Docker and Docker Compose.
*   **Dynamic TURN Setup**: Simple configuration templates to plug in TURN server credentials for strict corporate environments.
*   **Premium UI**: Sleek glassmorphic dark-mode interface with custom speed, progress, and ETA indicators. Supported by full RTL/Hebrew localization.

---

## 🛠️ Quick Start

### Running with Docker (Recommended)
1.  Make sure Docker Desktop is running.
2.  Run the following command in the project directory:
    ```bash
    docker compose up --build
    ```
3.  Open `http://localhost:3000` in your browser.

### Running with Node.js locally
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the application:
    ```bash
    npm start
    ```
3.  Open `http://localhost:3000` in your browser.

---

## 🔒 Firewall & Corporate Networks (STUN / TURN)

For standard residential networks, the default public Google STUN servers work out-of-the-box. 

If you are running this system behind strict corporate firewalls (blocking UDP or using Symmetric NAT):
1.  Obtain credentials from a TURN provider (e.g., Twilio, Xirsys, Metered) or set up your own `coturn` server.
2.  Configure them in the `docker-compose.yml` or a `.env` file in the root directory:
    ```env
    STUN_SERVERS=stun:stun.l.google.com:19302
    TURN_SERVER_URL=turn:your-turn-server-address:3478
    TURN_SERVER_USERNAME=your-username
    TURN_SERVER_CREDENTIAL=your-password
    ```
3.  Restart the container. The signaling server will automatically deliver the TURN details to clients upon connection.

---

<div id="hebrew"></div>

# מערכת שיתוף קבצים P2P WebRTC 🌐📦

מערכת אינטרנטית מתקדמת לשיתוף קבצים ישירות מדפדפן לדפדפן (Peer-to-Peer). הקבצים מועברים באופן מבוזר ומוצפן ישירות בין המחשבים ללא שמירה בשרת כלל – מה שמבטיח פרטיות מרבית ומהירות העברה מקסימלית.

המערכת מצוידת בשרת תיווך (Signaling Server) קל-משקל ב-Node.js/WebSocket ארוז ב-Docker, התומך בהגדרות STUN/TURN דינמיות לעקיפת פיירוולים ארגוניים קשוחים.

## 🚀 תכונות עיקריות

*   **ללא התקנות בקליינט**: פועל ישירות מכל דפדפן מודרני.
*   **העברת P2P אמיתית**: הקבצים נקראים בחתיכות (Chunks) ומוזרמים ישירות בין הדפדפנים.
*   **ניהול עומס זיכרון (Backpressure)**: ניטור זיכרון המטמון של WebRTC (`onbufferedamountlow`) למניעת קריסת הדפדפן – מאפשר העברת קבצי ענק (של מספר ג'יגה-בייט).
*   **אבטחה ופרטיות**: הקבצים אינם עוברים בשרת. החדרים מוגנים באמצעות מזהי **UUID v4** ארוכים ובלתי ניתנים לניחוש.
*   **תמיכה ב-Docker**: הרצה קלה של שרת הסיגנלינג באמצעות Docker Compose.
*   **הגדרת TURN דינמית**: אפשרות חיבור קלה לשרתי TURN למעבר פיירוולים ברשתות חסומות.
*   **עיצוב פרימיום**: ממשק Dark-Mode זכוכיתי (Glassmorphism) מודרני בעברית (RTL) הכולל מדי מהירות, אחוזים וזמן נותר (ETA) בזמן אמת.
