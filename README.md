# P2P WebRTC File Sharing System 🌐📦

Select Language / בחר שפה:
*   [English](#english)
*   [עברית (Hebrew)](#hebrew)
*   [Español (Spanish)](#espanol)
*   [العربية (Arabic)](#arabic)
*   [Русский (Russian)](#russian)

---

<div id="english"></div>

## English

A premium, browser-native Peer-to-Peer (P2P) file sharing web application. Files are transferred directly between browsers without any server storage, ensuring maximum privacy and transfer speeds.

Equipped with a lightweight, Dockerized Node.js/WebSocket signaling server that supports dynamic STUN/TURN configurations to traverse strict firewalls.

### 🚀 Key Features
*   **100% Client-Free**: Works directly in modern web browsers without installations.
*   **True P2P Flow**: Files are read chunk-by-chunk and streamed directly browser-to-browser.
*   **Backpressure Aware**: Monitors WebRTC buffer levels (`onbufferedamountlow`) to prevent memory overflow, supporting multi-gigabyte files.
*   **Security & Privacy**: Zero server storage. Peer rooms are identified using secure **UUID v4** tokens.
*   **Multi-Language UI**: Glassmorphic interface supporting Hebrew, English, Spanish, Arabic, and Russian with automatic RTL/LTR swapping and language persistence.
*   **Authorized Senders**: Secured with a passcode (`${ACCESS_KEY}`) to prevent unauthorized usage.

### 🛠️ Quick Start
#### Running with Docker (Recommended)
1. Run:
   ```bash
   docker compose up --build
   ```
2. Open `http://localhost:3000` in your browser.

#### Running with Node.js
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000`.

### 🔒 Firewall & Access Control (STUN / TURN)
Configure environment variables in `docker-compose.yml` or a `.env` file:
```env
ACCESS_KEY=${ACCESS_KEY}
STUN_SERVERS=stun:stun.l.google.com:19302
TURN_SERVER_URL=turn:your-turn-server-address:3478
TURN_SERVER_USERNAME=your-username
TURN_SERVER_CREDENTIAL=your-password
```

#### 🌐 Setting up Metered.ca (Free TURN/STUN)
1. Go to [metered.ca](https://www.metered.ca/) and sign up for a free account.
2. In your dashboard, find your **API Key** and **Subdomain**.
3. Add them to your environment configuration (`docker-compose.yml` or `.env` file):
   ```env
   METERED_API_KEY=your-api-key
   METERED_SUBDOMAIN=your-subdomain
   ```

---

<div id="hebrew"></div>

## עברית (Hebrew)

מערכת אינטרנטית מתקדמת לשיתוף קבצים ישירות מדפדפן לדפדפן (P2P). הקבצים מועברים באופן מבוזר ומוצפן ישירות בין המחשבים ללא שמירה בשרת כלל – מה שמבטיח פרטיות מרבית ומהירות העברה מקסימלית.

המערכת מצוידת בשרת תיווך (Signaling Server) קל-משקל ב-Node.js/WebSocket ארוז ב-Docker, התומך בהגדרות STUN/TURN דינמיות לעקיפת פיירוולים ארגוניים קשוחים.

### 🚀 תכונות עיקריות
*   **ללא התקנות בקליינט**: פועל ישירות מכל דפדפן מודרני.
*   **העברת P2P אמיתית**: הקבצים נקראים בחתיכות (Chunks) ומוזרמים ישירות בין הדפדפנים.
*   **ניהול עומס זיכרון (Backpressure)**: ניטור זיכרון המטמון של WebRTC (`onbufferedamountlow`) למניעת קריסת הדפדפן – מאפשר העברת קבצי ענק.
*   **אבטחה ופרטיות**: הקבצים אינם עוברים בשרת. החדרים מוגנים באמצעות מזהי **UUID v4** ארוכים ובלתי ניתנים לניחוש.
*   **ממשק רב-לשוני**: עיצוב זכוכיתי (Glassmorphism) מודרני התומך בעברית, אנגלית, ספרדית, ערבית ורוסית עם התאמת כיווניות (RTL/LTR) אוטומטית ושמירת העדפת שפה.
*   **בקרת גישה**: כניסת שולח מאובטחת באמצעות קוד גישה מורשה (`${ACCESS_KEY}`) למניעת שימוש לא מורשה במערכת.

### 🛠️ הרצה מהירה
#### הרצה עם Docker (מומלץ)
1. הרץ את הפקודה בתיקיית הפרויקט:
   ```bash
   docker compose up --build
   ```
2. פתח את הדפדפן בכתובת `http://localhost:3000`.

#### הרצה מקומית עם Node.js
1. התקן תלויות:
   ```bash
   npm install
   ```
2. הרץ את השרת:
   ```bash
   npm start
   ```
3. פתח את הדפדפן בכתובת `http://localhost:3000`.

### 🔒 מעבר פיירוולים ובקרת גישה (STUN / TURN)
ניתן להגדיר משתני סביבה בקובץ `docker-compose.yml` או בקובץ `.env`:
```env
ACCESS_KEY=${ACCESS_KEY}
STUN_SERVERS=stun:stun.l.google.com:19302
TURN_SERVER_URL=turn:your-turn-server-address:3478
TURN_SERVER_USERNAME=your-username
TURN_SERVER_CREDENTIAL=your-password
```

#### 🌐 הגדרת שירות Metered.ca (TURN/STUN חינמי)
1. היכנס לאתר [metered.ca](https://www.metered.ca/) והירשם לחשבון חינמי.
2. בלוח הבקרה (Dashboard) של חשבונך, מצא את ה-**API Key** וה-**Subdomain** שלך.
3. הוסף אותם להגדרות משתני הסביבה (בקובץ `docker-compose.yml` או `.env`):
   ```env
   METERED_API_KEY=your-api-key
   METERED_SUBDOMAIN=your-subdomain
   ```

---

<div id="espanol"></div>

## Español (Spanish)

Una aplicación web premium y nativa del navegador para compartir archivos de igual a igual (P2P). Los archivos se transfieren directamente entre navegadores sin ningún tipo de almacenamiento en el servidor, lo que garantiza la máxima privacidad y velocidad de transferencia.

Equipado con un servidor de señalización WebSocket/Node.js ligero y contenedorizado en Docker que admite configuraciones STUN/TURN dinámicas para atravesar firewalls estrictos.

### 🚀 Características clave
*   **100% libre de clientes**: Funciona directamente en navegadores web modernos sin instalaciones.
*   **Flujo P2P real**: Los archivos se leen bloque por bloque y se transmiten directamente de navegador a navegador.
*   **Control de sobrecarga (Backpressure)**: Monitorea los niveles de búfer de WebRTC (`onbufferedamountlow`) para evitar el desbordamiento de memoria, soportando archivos de varios gigabytes.
*   **Seguridad y privacidad**: Almacenamiento cero en el servidor. Las salas se identifican mediante tokens seguros **UUID v4**.
*   **Interfaz multilingüe**: UI moderna con efecto de cristal (glassmorphism) compatible con hebreo, inglés, español, árabe y ruso con cambio automático de RTL/LTR.
*   **Control de acceso**: Asegurado con un código de acceso del remitente (`${ACCESS_KEY}`) para evitar el uso no autorizado.

### 🛠️ Inicio rápido
#### Ejecución con Docker (Recomendado)
1. Ejecute:
   ```bash
   docker compose up --build
   ```
2. Abra `http://localhost:3000` en su navegador.

#### Ejecución con Node.js
1. Instale las dependencias:
   ```bash
   npm install
   ```
2. Inicie la aplicación:
   ```bash
   npm start
   ```
3. Abra `http://localhost:3000`.

### 🔒 Firewall y Control de Acceso (STUN / TURN)
Configure las variables de entorno en `docker-compose.yml` o en un archivo `.env`:
```env
ACCESS_KEY=${ACCESS_KEY}
STUN_SERVERS=stun:stun.l.google.com:19302
TURN_SERVER_URL=turn:su-direccion-turn:3478
TURN_SERVER_USERNAME=su-usuario
TURN_SERVER_CREDENTIAL=su-contraseña
```

#### 🌐 Configuración de Metered.ca (TURN/STUN gratuito)
1. Vaya a [metered.ca](https://www.metered.ca/) y regístrese para obtener una cuenta gratuita.
2. En su panel de control (Dashboard), busque su **API Key** y **Subdomain**.
3. Agréguelos a sus variables de entorno (`docker-compose.yml` o archivo `.env`):
   ```env
   METERED_API_KEY=your-api-key
   METERED_SUBDOMAIN=your-subdomain
   ```

---

<div id="arabic"></div>

## العربية (Arabic)

تطبيق ويب متميز ومدمج بالمتصفح لمشاركة الملفات من نظير إلى نظير (P2P). يتم نقل الملفات مباشرة بين المتصفحات دون أي تخزين على الخادم، مما يضمن أقصى قدر من الخصوصية وسرعة النقل.

مزود بخادم إشارة WebSocket/Node.js خفيف الوزن يدعم حاويات Docker وتكوينات STUN/TURN الديناميكية لتجاوز جدران الحماية الصارمة.

### 🚀 الميزات الرئيسية
*   **خالٍ تمامًا من البرامج الإضافية**: يعمل مباشرة في متصفحات الويب الحديثة دون أي تثبيت.
*   **نقل P2P حقيقي**: يتم قراءة الملفات جزءًا تلو الآخر ودفقها مباشرة من متصفح إلى آخر.
*   **إدارة عينات الذاكرة (Backpressure)**: يراقب مستويات مخزن WebRTC المؤقت (`onbufferedamountlow`) لمنع تجاوز الذاكرة، مما يسمح بنقل ملفات بحجم عدة جيجابايت.
*   **الأمان والخصوصية**: لا يتم تخزين أي ملفات على الخادم. يتم تحديد الغرف باستخدام معرفات **UUID v4** آمنة.
*   **واجهة مستخدم متعددة اللغات**: تصميم زجاجي عصري يدعم العبرية والإنجليزية والإسبانية والعربية والروسية مع التبديل التلقائي لاتجاه النص (RTL/LTR) وحفظ تفضيلات اللغة.
*   **بكرات التحكم في الوصول**: محمي برمز مرور للمرسل (`${ACCESS_KEY}`) لمنع الاستخدام غير المصرح به.

### 🛠️ البدء السريع
#### التشغيل باستخدام Docker (موصى به)
1. قم بتشغيل الأمر:
   ```bash
   docker compose up --build
   ```
2. افتح الرمز التالي في متصفحك: `http://localhost:3000`.

#### التشغيل باستخدام Node.js
1. قم بتثبيت التبعيات:
   ```bash
   npm install
   ```
2. ابدأ التطبيق:
   ```bash
   npm start
   ```
3. افتح `http://localhost:3000`.

### 🔒 جدار الحماية والتحكم في الوصول (STUN / TURN)
قم بتهيئة متغيرات البيئة في ملف `docker-compose.yml` أو ملف `.env`:
```env
ACCESS_KEY=${ACCESS_KEY}
STUN_SERVERS=stun:stun.l.google.com:19302
TURN_SERVER_URL=turn:your-turn-server-address:3478
TURN_SERVER_USERNAME=your-username
TURN_SERVER_CREDENTIAL=your-password
```

#### 🌐 إعداد خدمة Metered.ca (TURN/STUN مجاني)
1. انتقل إلى موقع [metered.ca](https://www.metered.ca/) وقم بالتسجيل للحصول على حساب مجاني.
2. في لوحة التحكم (Dashboard) الخاصة بك، ابحث عن **API Key** و **Subdomain**.
3. أضفهم إلى تكوين البيئة الخاصة بك (ملف `docker-compose.yml` أو `.env`):
   ```env
   METERED_API_KEY=your-api-key
   METERED_SUBDOMAIN=your-subdomain
   ```

---

<div id="russian"></div>

## Русский (Russian)

Премиальное веб-приложение для обмена файлами напрямую между браузерами (P2P). Файлы передаются напрямую без сохранения на сервере, что гарантирует максимальную конфиденциальность и скорость передачи.

Оснащено легковесным сигнальным сервером Node.js/WebSocket в Docker, поддерживающим динамические конфигурации STUN/TURN для обхода строгих брандмауэров.

### 🚀 Ключевые особенности
*   **Без установки приложений**: Работает напрямую в современных браузерах без необходимости установки программ или плагинов.
*   **Настоящий P2P-поток**: Файлы считываются по частям и передаются напрямую от браузера к браузеру.
*   **Контроль перегрузки памяти (Backpressure)**: Мониторинг буфера WebRTC (`onbufferedamountlow`) предотвращает перегрузку памяти браузера, позволяя передавать файлы размером в несколько гигабайт.
*   **Безопасность и конфиденциальность**: Нулевое хранение на сервере. Комнаты идентифицируются случайными токенами **UUID v4**.
*   **Многоязычный интерфейс**: Стильный темный стеклянный интерфейс (glassmorphism) с поддержкой иврита, английского, испанского, арабского и русского языков, автоматическим переключением направления текста (RTL/LTR) и сохранением выбора.
*   **Контроль доступа**: Защищено паролем отправителя (`${ACCESS_KEY}`) для предотвращения несанкционированного использования.

### 🛠️ Быстрый старт
#### Запуск с помощью Docker (Рекомендуется)
1. Выполните команду:
   ```bash
   docker compose up --build
   ```
2. Откройте `http://localhost:3000` в браузере.

#### Запуск с помощью Node.js
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите приложение:
   ```bash
   npm start
   ```
3. Откройте `http://localhost:3000`.

### 🔒 Брандмауэр и контроль доступа (STUN / TURN)
Настройте переменные окружения в `docker-compose.yml` или файле `.env`:
```env
ACCESS_KEY=${ACCESS_KEY}
STUN_SERVERS=stun:stun.l.google.com:19302
TURN_SERVER_URL=turn:your-turn-server-address:3478
TURN_SERVER_USERNAME=your-username
TURN_SERVER_CREDENTIAL=your-password
```

#### 🌐 Настройка сервиса Metered.ca (Бесплатный TURN/STUN)
1. Перейдите на сайт [metered.ca](https://www.metered.ca/) и зарегистрируйте бесплатный аккаунт.
2. В личном кабинете (Dashboard) найдите ваши **API Key** и **Subdomain**.
3. Добавьте их в конфигурацию переменных окружения (`docker-compose.yml` или файл `.env`):
   ```env
   METERED_API_KEY=your-api-key
   METERED_SUBDOMAIN=your-subdomain
   ```
