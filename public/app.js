const translations = {
  he: {
    title: "ShareThis | שיתוף קבצים ישיר ומאובטח",
    tagline: "שיתוף קבצים ישיר ומאובטח מקצה לקצה, ישירות מהדפדפן ללא שרת תיווך באמצע.",
    status_disconnected: "לא מחובר",
    status_connecting: "מתחבר לשרת התיווך...",
    status_conn_error: "שגיאת חיבור לשרת",
    status_waiting_peer: "ממתין לצד השני...",
    status_peer_connected: "מחובר למשתמש השני",
    status_p2p_active: "חיבור ישיר (P2P) פעיל",
    status_p2p_failed: "החיבור הישיר נכשל",
    status_relay_active: "ממסר שרת (HTTPS) פעיל",
    mode_send_title: "שלח קובץ",
    mode_send_desc: "העלה קובץ וקבל קישור או קוד שיתוף מיידי",
    mode_receive_title: "קבל קובץ",
    mode_receive_desc: "הזן מזהה שיתוף כדי להתחבר לשולח ולהוריד קובץ",
    mode_request_title: "בקש קובץ",
    mode_request_desc: "צור קישור מאובטח שמאפשר לאחרים לשלוח לך קובץ",
    auth_placeholder: "הזן קוד גישה מורשה לשולח",
    btn_submit_auth: "אישור",
    btn_back: "חזור לבחירה",
    join_placeholder: "הזן מזהה שיתוף (UUID)",
    btn_connect: "התחבר",
    drag_zone_title: "גרור לכאן קובץ או לחץ לבחירה",
    drag_zone_desc: "תומך בכל סוגי הקבצים ובכל הגדלים",
    btn_remove_title: "הסר קובץ",
    share_id_label: "מזהה השיתוף שלך:",
    share_link_label: "קישור לשיתוף:",
    btn_copy_title: "העתק קישור",
    status_waiting_peer_tip: "ממתין לחיבור של הצד השני...",
    btn_cancel_sender: "חזור לתפריט",
    waiting_connecting_title: "מתחבר לשולח...",
    waiting_connecting_desc: "יוצר חיבור ישיר ומאובטח. אנא המתן.",
    waiting_connecting_title_receiver: "מתחבר למבקש הקובץ...",
    waiting_connecting_desc_receiver: "יוצר חיבור ישיר ומאובטח. אנא המתן.",
    btn_cancel: "ביטול",
    transfer_title_receiving: "מקבל קובץ...",
    transfer_title_sending: "שולח קובץ...",
    transfer_dir_download: "הורדה",
    transfer_dir_upload: "העלאה",
    transfer_bytes_label: "גודל שהועבר:",
    transfer_eta_label: "זמן נותר משוער:",
    btn_abort_transfer: "ביטול העברה",
    complete_title_sender: "הקובץ נשלח בהצלחה!",
    complete_desc_sender: "הקובץ {filename} הועבר ישירות ובצורה מאובטחת.",
    complete_title_receiver: "הקובץ התקבל בהצלחה!",
    complete_desc_receiver: "הקובץ {filename} מוכן להורדה.",
    btn_download: "הורד קובץ באופן ידני",
    btn_share_new: "שתף קובץ חדש",
    footer_privacy_tip: "פרטיות מקסימלית: הקבצים מועברים ישירות בצורה מוצפנת ומבוזרת (P2P) ולא נשמרים בשרת שלנו.",
    alert_signaling_disconnected: "החיבור לשרת התיווך נותק.",
    alert_room_full: "החדר מלא או לא זמין.",
    alert_unauthorized: "קוד גישה לשולח שגוי או פג תוקף.",
    alert_peer_disconnected: "הצד השני התנתק. ההעברה בוטלה.",
    alert_p2p_disconnected: "חיבור ה-P2P נותק.",
    alert_transfer_aborted: "הצד השני ביטל את ההעברה.",
    alert_enter_passcode: "אנא הזן קוד גישה מורשה",
    alert_enter_valid_code: "אנא הזן מזהה שיתוף תקין (מינימום 8 תווים)",
    speed_suffix: "לשנייה",
    eta_calculating: "מחשב...",
    eta_seconds: "כ-{seconds} שניות",
    eta_minutes_seconds: "כ-{minutes} דקות ו-{seconds} שניות",
    modal_approval_title: "בקשת התחברות",
    modal_approval_desc: "משתמש מרוחק מעוניין להתחבר לחדר שלך. האם לאשר?",
    btn_approve: "אשר חיבור",
    btn_reject: "דחה",
    alert_peer_rejected: "החיבור נדחה על ידי מנהל החדר."
  },
  en: {
    title: "ShareThis | Direct and Secure File Sharing",
    tagline: "Direct end-to-end (P2P) file sharing, straight from your browser with no intermediary server.",
    status_disconnected: "Disconnected",
    status_connecting: "Connecting to signaling server...",
    status_conn_error: "Connection error",
    status_waiting_peer: "Waiting for peer...",
    status_peer_connected: "Connected to peer",
    status_p2p_active: "Direct connection (P2P) active",
    status_p2p_failed: "Direct connection failed",
    status_relay_active: "Server Relay (HTTPS) active",
    mode_send_title: "Send File",
    mode_send_desc: "Upload a file and get a link or direct sharing code",
    mode_receive_title: "Receive File",
    mode_receive_desc: "Enter a sharing ID to connect to the sender and download the file",
    mode_request_title: "Request File",
    mode_request_desc: "Create a secure link for others to send you a file",
    auth_placeholder: "Enter authorized sender passcode",
    btn_submit_auth: "Confirm",
    btn_back: "Back to selection",
    join_placeholder: "Enter sharing ID (UUID)",
    btn_connect: "Connect",
    drag_zone_title: "Drag and drop a file here or click to select",
    drag_zone_desc: "Supports all file types and sizes",
    btn_remove_title: "Remove file",
    share_id_label: "Your Sharing ID:",
    share_link_label: "Link to share:",
    btn_copy_title: "Copy link",
    status_waiting_peer_tip: "Waiting for the other side to connect...",
    btn_cancel_sender: "Back to menu",
    waiting_connecting_title: "Connecting to sender...",
    waiting_connecting_desc: "Establishing a direct and secure connection. Please wait.",
    waiting_connecting_title_receiver: "Connecting to requester...",
    waiting_connecting_desc_receiver: "Establishing a direct and secure connection. Please wait.",
    btn_cancel: "Cancel",
    transfer_title_receiving: "Receiving file...",
    transfer_title_sending: "Sending file...",
    transfer_dir_download: "Download",
    transfer_dir_upload: "Upload",
    transfer_bytes_label: "Transferred size:",
    transfer_eta_label: "Estimated remaining time:",
    btn_abort_transfer: "Abort transfer",
    complete_title_sender: "File sent successfully!",
    complete_desc_sender: "The file {filename} was transferred directly and securely.",
    complete_title_receiver: "File received successfully!",
    complete_desc_receiver: "The file {filename} is ready for download.",
    btn_download: "Download file manually",
    btn_share_new: "Share new file",
    footer_privacy_tip: "Maximum privacy: Files are transferred directly in an encrypted and decentralized (P2P) manner and are not stored on our server.",
    alert_signaling_disconnected: "Connection to signaling server disconnected.",
    alert_room_full: "Room is full or unavailable.",
    alert_unauthorized: "Invalid or expired sender access code.",
    alert_peer_disconnected: "The other party disconnected. Transfer cancelled.",
    alert_p2p_disconnected: "P2P connection disconnected.",
    alert_transfer_aborted: "The other party aborted the transfer.",
    alert_enter_passcode: "Please enter authorized access code",
    alert_enter_valid_code: "Please enter a valid sharing ID (minimum 8 characters)",
    speed_suffix: "per second",
    eta_calculating: "Calculating...",
    eta_seconds: "About {seconds} seconds",
    eta_minutes_seconds: "About {minutes} minutes and {seconds} seconds",
    modal_approval_title: "Connection Request",
    modal_approval_desc: "A remote peer wants to connect to your room. Approve?",
    btn_approve: "Approve",
    btn_reject: "Reject",
    alert_peer_rejected: "Connection request rejected by the room owner."
  },
  es: {
    title: "ShareThis | Compartir Archivos de Forma Directa y Segura",
    tagline: "Comparta archivos de extremo a extremo (P2P) directamente desde su navegador, sin servidor intermediario.",
    status_disconnected: "Desconectado",
    status_connecting: "Conectando al servidor de señalización...",
    status_conn_error: "Error de conexión",
    status_waiting_peer: "Esperando al otro usuario...",
    status_peer_connected: "Conectado al otro usuario",
    status_p2p_active: "Conexión directa (P2P) activa",
    status_p2p_failed: "Conexión directa fallida",
    status_relay_active: "Servidor intermedio (HTTPS) activo",
    mode_send_title: "Enviar Archivo",
    mode_send_desc: "Suba un archivo y obtenga un enlace o código de intercambio directo",
    mode_receive_title: "Recibir Archivo",
    mode_receive_desc: "Ingrese un ID de intercambio para conectarse al remitente y descargar el archivo",
    mode_request_title: "Solicitar Archivo",
    mode_request_desc: "Cree un enlace seguro para que otros le envíen un archivo",
    auth_placeholder: "Ingrese el código de acceso del remitente",
    btn_submit_auth: "Confirmar",
    btn_back: "Volver a la selección",
    join_placeholder: "Ingrese el ID de intercambio (UUID)",
    btn_connect: "Conectar",
    drag_zone_title: "Arrastre un archivo aquí o haga clic para seleccionar",
    drag_zone_desc: "Soporta todos los tipos de archivos y tamaños",
    btn_remove_title: "Eliminar archivo",
    share_id_label: "Su ID de intercambio:",
    share_link_label: "Enlace para compartir:",
    btn_copy_title: "Copiar enlace",
    status_waiting_peer_tip: "Esperando a que el otro usuario se conecte...",
    btn_cancel_sender: "Volver al menú",
    waiting_connecting_title: "Conectando al remitente...",
    waiting_connecting_desc: "Estableciendo una conexión directa y segura. Por favor espere.",
    waiting_connecting_title_receiver: "Conectando al solicitante...",
    waiting_connecting_desc_receiver: "Estableciendo una conexión directa y segura. Por favor espere.",
    btn_cancel: "Cancelar",
    transfer_title_receiving: "Recibiendo archivo...",
    transfer_title_sending: "Enviando archivo...",
    transfer_dir_download: "Descarga",
    transfer_dir_upload: "Subida",
    transfer_bytes_label: "Tamaño transferido:",
    transfer_eta_label: "Tiempo restante estimado:",
    btn_abort_transfer: "Abortar transferencia",
    complete_title_sender: "¡Archivo enviado con éxito!",
    complete_desc_sender: "El archivo {filename} fue transferido directa y seguramente.",
    complete_title_receiver: "¡Archivo recibido con éxito!",
    complete_desc_receiver: "El archivo {filename} está listo para descargar.",
    btn_download: "Descargar archivo manualmente",
    btn_share_new: "Compartir nuevo archivo",
    footer_privacy_tip: "Privacidad máxima: Los archivos se transfieren directamente de manera cifrada y descentralizada (P2P) y no se guardan en nuestro servidor.",
    alert_signaling_disconnected: "Se desconectó la conexión con el servidor de señalización.",
    alert_room_full: "La sala está llena o no está disponible.",
    alert_unauthorized: "Código de acceso del remitente incorrecto o vencido.",
    alert_peer_disconnected: "La otra parte se desconectó. Transferencia cancelada.",
    alert_p2p_disconnected: "Conexión P2P desconectada.",
    alert_transfer_aborted: "La otra parte abortó la transferencia.",
    alert_enter_passcode: "Por favor, ingrese el código de acceso autorizado",
    alert_enter_valid_code: "Por favor, ingrese un ID de intercambio válido (mínimo 8 caracteres)",
    speed_suffix: "por segundo",
    eta_calculating: "Calculando...",
    eta_seconds: "Aproximadamente {seconds} segundos",
    eta_minutes_seconds: "Aproximadamente {minutes} minutos y {seconds} segundos",
    modal_approval_title: "Solicitud de Conexión",
    modal_approval_desc: "¿Un usuario remoto desea conectarse a su sala. Aprobar?",
    btn_approve: "Aprobar",
    btn_reject: "Rechazar",
    alert_peer_rejected: "Solicitud de conexión rechazada por el propietario de la sala."
  },
  ar: {
    title: "ShareThis | مشاركة الملفات بشكل مباشر وآمن",
    tagline: "مشاركة الملفات مباشرة من طرف إلى طرف (P2P) بدون الحاجة لخدمة وسيطة، مباشرة من المتصفح.",
    status_disconnected: "غير متصل",
    status_connecting: "جاري الاتصال بخادم الإشارة...",
    status_conn_error: "خطأ في الاتصال",
    status_waiting_peer: "بانتظار الطرف الآخر...",
    status_peer_connected: "متصل بالطرف الآخر",
    status_p2p_active: "الاتصال المباشر (P2P) نشط",
    status_p2p_failed: "فشل الاتصال المباشر",
    status_relay_active: "مرحل الخادم (HTTPS) نشط",
    mode_send_title: "إرسال ملف",
    mode_send_desc: "قم برفع ملف واحصل على رابط أو رمز مشاركة مباشر",
    mode_receive_title: "استلام ملف",
    mode_receive_desc: "أدخل معرف المشاركة للاتصال بالمرسل وتحميل الملف",
    mode_request_title: "طلب ملف",
    mode_request_desc: "أنشئ رابطًا آمنًا للآخرين لإرسال ملف إليك",
    auth_placeholder: "أدخل رمز المرور المخول للمرسل",
    btn_submit_auth: "تأكيد",
    btn_back: "العودة للاختيار",
    join_placeholder: "أدخل معرف المشاركة (UUID)",
    btn_connect: "اتصال",
    drag_zone_title: "اسحب الملف إلى هنا أو انقر للاختيار",
    drag_zone_desc: "يدعم جميع أنواع وأحجام الملفات",
    btn_remove_title: "إزالة الملف",
    share_id_label: "معرف المشاركة الخاص بك:",
    share_link_label: "رابط المشاركة:",
    btn_copy_title: "نسخ الرابط",
    status_waiting_peer_tip: "بانتظار اتصال الطرف الآخر...",
    btn_cancel_sender: "العودة للقائمة",
    waiting_connecting_title: "جاري الاتصال بالمرسل...",
    waiting_connecting_desc: "جاري إنشاء اتصال مباشر وآمن. يرجى الانتظار.",
    waiting_connecting_title_receiver: "جاري الاتصال بطالب الملف...",
    waiting_connecting_desc_receiver: "جاري إنشاء اتصال مباشر وآمن. يرجى الانتظار.",
    btn_cancel: "إلغاء",
    transfer_title_receiving: "جاري استلام الملف...",
    transfer_title_sending: "جاري إرسال الملف...",
    transfer_dir_download: "تنزيل",
    transfer_dir_upload: "رفع",
    transfer_bytes_label: "الحجم المنقول:",
    transfer_eta_label: "الوقت المتبقي المقدر:",
    btn_abort_transfer: "إلغاء النقل",
    complete_title_sender: "تم إرسال الملف بنجاح!",
    complete_desc_sender: "تم نقل الملف {filename} بشكل مباشر وآمن.",
    complete_title_receiver: "تم استلام الملف بنجاح!",
    complete_desc_receiver: "الملف {filename} جاهز للتنزيل.",
    btn_download: "تنزيل الملف يدويًا",
    btn_share_new: "مشاركة ملف جديد",
    footer_privacy_tip: "أقصى درجات الخصوصية: يتم نقل الملفات مباشرة بشكل مشفر ولامركزي (P2P) ولا يتم حفظها على خادمنا.",
    alert_signaling_disconnected: "تم قطع الاتصال بخادم الإشارة.",
    alert_room_full: "الغرفة ممتلئة أو غير متاحة.",
    alert_unauthorized: "رمز مرور المرسل غير صالح أو منتهي الصلاحية.",
    alert_peer_disconnected: "انفصل الطرف الآخر. تم إلغاء النقل.",
    alert_p2p_disconnected: "انقطع اتصال P2P.",
    alert_transfer_aborted: "ألغى الطرف الآخر عملية النقل.",
    alert_enter_passcode: "يرجى إدخال رمز المرور المعتمد",
    alert_enter_valid_code: "يرجى إدخال معرف مشاركة صالح (8 رموز على الأقل)",
    speed_suffix: "في الثانية",
    eta_calculating: "جاري الحساب...",
    eta_seconds: "حوالي {seconds} ثوانٍ",
    eta_minutes_seconds: "حوالي {minutes} دقائق و {seconds} ثوانٍ",
    modal_approval_title: "طلب اتصال",
    modal_approval_desc: "يرغب مستخدم مروّس بالاتصال بغرفتك. هل توافق؟",
    btn_approve: "موافقة",
    btn_reject: "رفض",
    alert_peer_rejected: "تم رفض طلب الاتصال من قبل مالك الغرفة."
  },
  ru: {
    title: "ShareThis | Прямой и безопасный обмен файлами",
    tagline: "Прямой одноранговый (P2P) обмен файлами прямо из браузера без промежуточного сервера.",
    status_disconnected: "Не подключено",
    status_connecting: "Подключение к серверу сигнализации...",
    status_conn_error: "Ошибка подключения",
    status_waiting_peer: "Ожидание второго участника...",
    status_peer_connected: "Подключено к участнику",
    status_p2p_active: "Прямое подключение (P2P) активно",
    status_p2p_failed: "Прямое подключение не удалось",
    status_relay_active: "Ретрансляция сервера (HTTPS) активна",
    mode_send_title: "Отправить файл",
    mode_send_desc: "Загрузите файл и получите ссылку или код совместного доступа",
    mode_receive_title: "Получить файл",
    mode_receive_desc: "Введите идентификатор доступа для подключения к отправителю и скачивания файла",
    mode_request_title: "Запросить файл",
    mode_request_desc: "Создайте безопасную ссылку, чтобы другие могли отправить вам файл",
    auth_placeholder: "Введите код доступа отправителя",
    btn_submit_auth: "Подтвердить",
    btn_back: "Назад к выбору",
    join_placeholder: "Введите идентификатор доступа (UUID)",
    btn_connect: "Подключиться",
    drag_zone_title: "Перетащите файл сюда или нажмите для выбора",
    drag_zone_desc: "Поддерживаются файлы любых типов и размеров",
    btn_remove_title: "Удалить файл",
    share_id_label: "Ваш идентификатор доступа:",
    share_link_label: "Ссылка для общего доступа:",
    btn_copy_title: "Копировать ссылку",
    status_waiting_peer_tip: "Ожидание подключения другого участника...",
    btn_cancel_sender: "Вернуться в меню",
    waiting_connecting_title: "Подключение к отправителю...",
    waiting_connecting_desc: "Установление прямого и безопасного соединения. Пожалуйста, подождите.",
    waiting_connecting_title_receiver: "Подключение к запрашивающему...",
    waiting_connecting_desc_receiver: "Установление прямого и безопасного соединения. Пожалуйста, подождите.",
    btn_cancel: "Отмена",
    transfer_title_receiving: "Получение файла...",
    transfer_title_sending: "Отправка файла...",
    transfer_dir_download: "Скачивание",
    transfer_dir_upload: "Загрузка",
    transfer_bytes_label: "Передано:",
    transfer_eta_label: "Оставшееся время:",
    btn_abort_transfer: "Прервать передачу",
    complete_title_sender: "Файл успешно отправлен!",
    complete_desc_sender: "Файл {filename} был успешно передан напрямую и безопасно.",
    complete_title_receiver: "Файл успешно получен!",
    complete_desc_receiver: "Файл {filename} готов к скачиванию.",
    btn_download: "Скачать файл вручную",
    btn_share_new: "Поделиться новым файлом",
    footer_privacy_tip: "Максимальная конфиденциальность: файлы передаются напрямую в зашифрованном и децентрализованном виде (P2P) и не сохраняются на нашем сервере.",
    alert_signaling_disconnected: "Соединение с сервером сигнализации разорвано.",
    alert_room_full: "Комната заполнена или недоступна.",
    alert_unauthorized: "Неверный или истекший код доступа отправителя.",
    alert_peer_disconnected: "Второй участник отключился. Передача отменена.",
    alert_p2p_disconnected: "P2P соединение разорвано.",
    alert_transfer_aborted: "Второй участник отменил передачу.",
    alert_enter_passcode: "Пожалуйста, введите авторизованный код доступа",
    alert_enter_valid_code: "Пожалуйста, введите корректный идентификатор (минимум 8 символов)",
    speed_suffix: "в секунду",
    eta_calculating: "Расчет...",
    eta_seconds: "Около {seconds} сек.",
    eta_minutes_seconds: "Около {minutes} мин. и {seconds} сек.",
    modal_approval_title: "Запрос на подключение",
    modal_approval_desc: "Удаленный пользователь хочет подключиться к вашей комнате. Разрешить?",
    btn_approve: "Разрешить",
    btn_reject: "Отклонить",
    alert_peer_rejected: "Запрос на подключение отклонен владельцем комнаты."
  }
};

const rtlLanguages = ['he', 'ar'];

function getCurrentLanguage() {
  return localStorage.getItem('preferred_lang') || 'he';
}

function updateLanguage(lang) {
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
  
  const t = translations[lang] || translations['he'];
  document.title = t.title;

  // Static translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Title translations
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key]) {
      el.title = t[key];
    }
  });

  // Dynamic UI state translation
  // 1. Connection Status Badge
  const statusKey = statusBadge.getAttribute('data-status-key');
  if (statusKey && t[statusKey]) {
    statusText.textContent = t[statusKey];
  }

  // 2. Active Transfer Screen
  if (sectionTransfer.classList.contains('active')) {
    if (role === 'sender') {
      transferTitle.textContent = t.transfer_title_sending;
      transferDirection.textContent = t.transfer_dir_upload;
    } else {
      transferTitle.textContent = t.transfer_title_receiving;
      transferDirection.textContent = t.transfer_dir_download;
    }
    
    // Re-trigger progress display update using current values if possible
    if (role === 'sender' && selectedFile) {
      updateTransferProgress(lastTransferredBytes, selectedFile.size);
    } else if (role === 'receiver' && expectedFileInfo) {
      updateTransferProgress(receivedSize, expectedFileInfo.size);
    }
  }

  // 3. Complete Screen
  if (sectionComplete.classList.contains('active')) {
    const fileName = completeFileName.textContent;
    if (btnDownloadFile.classList.contains('hidden')) {
      // Sender
      completeTitle.textContent = t.complete_title_sender;
      completeDesc.textContent = t.complete_desc_sender.replace('{filename}', fileName);
    } else {
      // Receiver
      completeTitle.textContent = t.complete_title_receiver;
      completeDesc.textContent = t.complete_desc_receiver.replace('{filename}', fileName);
    }
  }
}

// Helper to generate cryptographically secure UUID v4
function generateUUID() {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback for non-secure/older browser contexts
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Initialize Lucide Icons
lucide.createIcons();

// Elements
const statusBadge = document.getElementById('connection-status');
const statusText = document.getElementById('status-text');
const langSelect = document.getElementById('lang-select');

// Welcome Section
const sectionWelcome = document.getElementById('step-welcome');
const btnModeSend = document.getElementById('btn-mode-send');
const btnModeReceive = document.getElementById('btn-mode-receive');
const btnModeRequest = document.getElementById('btn-mode-request');
const senderAuthContainer = document.getElementById('sender-auth-container');
const senderAuthInput = document.getElementById('sender-auth-input');
const btnSubmitAuth = document.getElementById('btn-submit-auth');
const btnBackAuth = document.getElementById('btn-back-auth');
const joinCodeContainer = document.getElementById('join-code-container');
const joinCodeInput = document.getElementById('join-code-input');
const btnSubmitCode = document.getElementById('btn-submit-code');
const btnBackWelcome = document.getElementById('btn-back-welcome');

// Sender Select Section
const sectionSenderSelect = document.getElementById('step-sender-select');
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const selectedFileCard = document.getElementById('selected-file-card');
const selectedFileName = document.getElementById('selected-file-name');
const selectedFileSize = document.getElementById('selected-file-size');
const selectedFileHash = document.getElementById('selected-file-hash');
const btnRemoveFile = document.getElementById('btn-remove-file');
const shareInfoCard = document.getElementById('share-info-card');
const shareCodeDisplay = document.getElementById('share-code-display');
const shareLinkInput = document.getElementById('share-link-input');
const btnCopyLink = document.getElementById('btn-copy-link');
const btnCancelSender = document.getElementById('btn-cancel-sender');

// Receiver Waiting Section
const sectionReceiverWaiting = document.getElementById('step-receiver-waiting');
const btnCancelReceiver = document.getElementById('btn-cancel-receiver');

// Transfer Progress Section
const sectionTransfer = document.getElementById('step-transfer');
const transferTitle = document.getElementById('transfer-title');
const transferDirection = document.getElementById('transfer-direction');
const transferFileName = document.getElementById('transfer-file-name');
const transferFileSize = document.getElementById('transfer-file-size');
const progressFill = document.getElementById('progress-fill');
const progressPct = document.getElementById('progress-pct');
const progressSpeed = document.getElementById('progress-speed');
const transferBytes = document.getElementById('transfer-bytes');
const transferEta = document.getElementById('transfer-eta');
const btnAbortTransfer = document.getElementById('btn-abort-transfer');

// Complete Section
const sectionComplete = document.getElementById('step-complete');
const completeTitle = document.getElementById('complete-title');
const completeDesc = document.getElementById('complete-desc');
const completeFileName = document.getElementById('complete-file-name');
const completeFileSize = document.getElementById('complete-file-size');
const btnDownloadFile = document.getElementById('btn-download-file');
const btnReset = document.getElementById('btn-reset');

// Security & Integrity Elements
const approvalModal = document.getElementById('approval-modal');
const btnApprovePeer = document.getElementById('btn-approve-peer');
const btnRejectPeer = document.getElementById('btn-reject-peer');
const integrityBadgeContainer = document.getElementById('integrity-badge-container');

// Constants
const CHUNK_SIZE = 16384; // 16 KB chunks for WebRTC Data Channel
const BUFFERED_AMOUNT_LOW_THRESHOLD = 65536; // 64 KB threshold for backpressure

// State variables
let role = null; // 'sender' or 'receiver'
let roomId = null;
let ws = null;
let peerConnection = null;
let dataChannel = null;
let selectedFile = null;
let isHost = false;
let pendingMode = null; // 'send' or 'request'
let senderAccessKey = ''; // In-memory passcode storage (OWASP mitigation)
let useWebsocketRelay = false;
let connectionTimeout = null;

// Transfer state
let receivedChunks = [];
let receivedSize = 0;
let expectedFileInfo = null;
let transferStartTime = null;
let speedCalcInterval = null;
let heartbeatInterval = null;
let lastTransferredBytes = 0;
let lastSpeedCalcTime = null;

// Language dropdown event listener
langSelect.addEventListener('change', (e) => {
  updateLanguage(e.target.value);
});

// Init
window.addEventListener('DOMContentLoaded', () => {
  // Initialize language selector
  const savedLang = getCurrentLanguage();
  langSelect.value = savedLang;
  updateLanguage(savedLang);

  // Check if Hash is present (i.e. joined via direct link)
  const hash = window.location.hash.substring(1);
  if (hash) {
    if (hash.startsWith('req-')) {
      const realRoomId = hash.substring(4);
      if (/^[a-f0-9-]{8,40}$/i.test(realRoomId)) {
        roomId = realRoomId;
        isHost = false;
        role = 'sender';
        pendingMode = 'request';
        
        // Show file selection screen first, do NOT connect signaling yet!
        showSection(sectionSenderSelect);
        shareInfoCard.classList.add('hidden');
        dropZone.style.display = 'flex';
      }
    } else if (/^[a-f0-9-]{8,40}$/i.test(hash)) {
      roomId = hash;
      joinRoom(roomId);
    }
  }
});

// Navigation Helpers
function showSection(section) {
  [sectionWelcome, sectionSenderSelect, sectionReceiverWaiting, sectionTransfer, sectionComplete].forEach(s => {
    s.classList.remove('active');
  });
  section.classList.add('active');
  lucide.createIcons();
}

function updateStatus(state, textOrKey) {
  statusBadge.className = `status-badge ${state}`;
  statusBadge.setAttribute('data-status-key', textOrKey);
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations['he'];
  statusText.textContent = t[textOrKey] || textOrKey;
}

// Format size
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Reset client state
function resetState() {
  cleanupConnections();
  useWebsocketRelay = false;
  clearTimeout(connectionTimeout);
  role = null;
  roomId = null;
  selectedFile = null;
  receivedChunks = [];
  receivedSize = 0;
  expectedFileInfo = null;
  isHost = false;
  pendingMode = null;
  
  // Reset UI elements
  fileInput.value = '';
  selectedFileCard.classList.add('hidden');
  selectedFileHash.classList.add('hidden');
  selectedFileHash.textContent = '';
  shareInfoCard.classList.add('hidden');
  approvalModal.classList.add('hidden');
  integrityBadgeContainer.classList.add('hidden');
  integrityBadgeContainer.innerHTML = '';
  dropZone.style.display = 'flex';
  joinCodeInput.value = '';
  window.location.hash = '';
  
  // Reset waiting state translation keys back to default
  const waitingTitle = sectionReceiverWaiting.querySelector('.waiting-state h3');
  const waitingDesc = sectionReceiverWaiting.querySelector('.waiting-state p');
  if (waitingTitle && waitingDesc) {
    waitingTitle.setAttribute('data-i18n', 'waiting_connecting_title');
    waitingDesc.setAttribute('data-i18n', 'waiting_connecting_desc');
  }

  updateStatus('disconnected', 'status_disconnected');
  showSection(sectionWelcome);
  updateLanguage(getCurrentLanguage());
}

// Cleanup WebRTC and WebSocket connections
function cleanupConnections() {
  clearInterval(speedCalcInterval);
  clearInterval(heartbeatInterval);
  clearTimeout(connectionTimeout);
  if (dataChannel) {
    dataChannel.close();
    dataChannel = null;
  }
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }
  if (ws) {
    ws.close();
    ws = null;
  }
}

function startHeartbeat() {
  clearInterval(heartbeatInterval);
  heartbeatInterval = setInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'ping' }));
    }
  }, 20000); // Send ping every 20 seconds
}

// WebSocket connection
function connectSignaling(onConnectCallback) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}`;
  
  updateStatus('connecting', 'status_connecting');
  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('Connected to signaling server');
    startHeartbeat();
    if (onConnectCallback) onConnectCallback();
  };

  ws.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      handleSignalingMessage(message);
    } catch (err) {
      console.error('Signaling parse error:', err);
    }
  };

  ws.onclose = () => {
    console.log('Signaling server connection closed');
    if (role && (sectionTransfer.classList.contains('active') || sectionReceiverWaiting.classList.contains('active'))) {
      // If we are in the middle of waiting or transferring, notify user
      const lang = getCurrentLanguage();
      const t = translations[lang] || translations['he'];
      alert(t.alert_signaling_disconnected);
      resetState();
    }
  };

  ws.onerror = (err) => {
    console.error('Signaling error:', err);
    updateStatus('disconnected', 'status_conn_error');
  };
}

// Join room as guest (assigned role dynamically by server)
function joinRoom(code) {
  roomId = code;
  isHost = false;
  role = 'receiver'; // Default placeholder, will be updated by server
  
  showSection(sectionReceiverWaiting);
  connectSignaling(() => {
    ws.send(JSON.stringify({
      type: 'join',
      roomId: roomId
    }));
  });
}

// Send Mode: Generate code and connect
function initSenderMode() {
  isHost = true;
  role = 'sender';
  roomId = generateUUID(); // Generate unguessable UUID v4
  
  showSection(sectionSenderSelect);
  connectSignaling(() => {
    const accessKey = senderAccessKey;
    ws.send(JSON.stringify({
      type: 'join',
      roomId: roomId,
      accessKey: accessKey,
      hostRole: 'sender'
    }));
  });
}

// Request Mode: Generate code and connect as receiver
function initRequestMode() {
  isHost = true;
  role = 'receiver';
  roomId = generateUUID(); // Generate unguessable UUID v4
  
  showSection(sectionSenderSelect);
  connectSignaling(() => {
    const accessKey = senderAccessKey;
    ws.send(JSON.stringify({
      type: 'join',
      roomId: roomId,
      accessKey: accessKey,
      hostRole: 'receiver'
    }));
  });
}

// Handle signaling messages
function handleSignalingMessage(message) {
  const { type, role: assignedRole, iceServers, data } = message;
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations['he'];

  switch (type) {
    case 'joined':
      updateStatus('connecting', 'status_waiting_peer');
      role = assignedRole; // Update local role to what was assigned by the server
      
      if (isHost) {
        shareCodeDisplay.textContent = roomId;
        if (role === 'receiver') {
          shareLinkInput.value = `${window.location.origin}/#req-${roomId}`;
        } else {
          shareLinkInput.value = `${window.location.origin}/#${roomId}`;
        }
        shareInfoCard.classList.remove('hidden');
        if (role === 'receiver') {
          // Host is receiver, so hide the drag-and-drop zone
          dropZone.style.display = 'none';
        } else {
          dropZone.style.display = 'flex';
        }
      } else {
        // Guest
        console.log(`Guest joined room with role ${role}. Initializing WebRTC...`);
        if (role === 'sender') {
          // Guest is sender, show selection and hide link card
          showSection(sectionSenderSelect);
          shareInfoCard.classList.add('hidden');
          dropZone.style.display = 'flex';
        }
        initiateWebRTC(iceServers);
      }
      break;

    case 'peer-joined':
      updateStatus('connected', 'status_peer_connected');
      console.log('Receiver connected. Initializing WebRTC...');
      initiateWebRTC(iceServers);
      break;

    case 'signal':
      handleWebRTCSignal(data);
      break;

    case 'full':
      alert(t.alert_room_full);
      resetState();
      break;

    case 'peer-request':
      console.log('Peer requesting join. Showing approval modal.');
      approvalModal.classList.remove('hidden');
      lucide.createIcons();
      break;

    case 'rejected':
      alert(t.alert_peer_rejected);
      resetState();
      break;

    case 'unauthorized':
      alert(t.alert_unauthorized);
      senderAccessKey = '';
      resetState();
      break;

    case 'peer-left':
      console.log('Peer disconnected');
      if (sectionTransfer.classList.contains('active')) {
        alert(t.alert_peer_disconnected);
      }
      resetState();
      break;

    case 'relay-msg':
      handleRelayedMessage(data);
      break;
  }
}

// WebRTC Signaling Handler
function handleWebRTCSignal(data) {
  if (data.sdp) {
    console.log('Received remote SDP:', data.sdp.type);
    peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp))
      .then(() => {
        if (data.sdp.type === 'offer') {
          peerConnection.createAnswer()
            .then(answer => peerConnection.setLocalDescription(answer))
            .then(() => {
              ws.send(JSON.stringify({
                type: 'signal',
                roomId: roomId,
                data: { sdp: peerConnection.localDescription }
              }));
            });
        }
      })
      .catch(err => console.error('Error handling SDP:', err));
  } else if (data.candidate) {
    console.log('Received remote ICE Candidate');
    peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate))
      .catch(err => console.error('Error adding ICE Candidate:', err));
  }
}

// Initialize WebRTC connection
function initiateWebRTC(iceServers) {
  const configuration = {
    iceServers: iceServers
  };

  useWebsocketRelay = false;
  clearTimeout(connectionTimeout);

  // Set a fallback timeout: if WebRTC does not connect in 8 seconds, switch to WebSocket relay
  connectionTimeout = setTimeout(() => {
    if (peerConnection && peerConnection.connectionState !== 'connected') {
      console.log('WebRTC connection timed out. Switching to WebSocket relay fallback.');
      switchToWebsocketRelay();
    }
  }, 8000);

  peerConnection = new RTCPeerConnection(configuration);

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      ws.send(JSON.stringify({
        type: 'signal',
        roomId: roomId,
        data: { candidate: event.candidate }
      }));
    }
  };

  peerConnection.onconnectionstatechange = () => {
    console.log('WebRTC Connection State:', peerConnection.connectionState);
    if (peerConnection.connectionState === 'connected') {
      clearTimeout(connectionTimeout);
      updateStatus('connected', 'status_p2p_active');
    } else if (peerConnection.connectionState === 'disconnected' || peerConnection.connectionState === 'failed') {
      clearTimeout(connectionTimeout);
      if (sectionTransfer.classList.contains('active')) {
        updateStatus('disconnected', 'status_p2p_failed');
        const lang = getCurrentLanguage();
        const t = translations[lang] || translations['he'];
        alert(t.alert_p2p_disconnected);
        resetState();
      } else {
        // Switch to WebSocket relay fallback
        switchToWebsocketRelay();
      }
    }
  };

  if (role === 'sender') {
    // Sender creates the data channel
    dataChannel = peerConnection.createDataChannel('fileTransfer', {
      ordered: true
    });
    setupDataChannel(dataChannel);

    peerConnection.createOffer()
      .then(offer => peerConnection.setLocalDescription(offer))
      .then(() => {
        ws.send(JSON.stringify({
          type: 'signal',
          roomId: roomId,
          data: { sdp: peerConnection.localDescription }
        }));
      })
      .catch(err => console.error('Error creating offer:', err));
  } else {
    // Receiver listens to incoming data channel
    peerConnection.ondatachannel = (event) => {
      dataChannel = event.channel;
      setupDataChannel(dataChannel);
    };
  }
}

// Setup Data Channel event listeners
function setupDataChannel(channel) {
  channel.binaryType = 'arraybuffer';
  channel.bufferedAmountLowThreshold = BUFFERED_AMOUNT_LOW_THRESHOLD;

  channel.onopen = () => {
    console.log('Data channel is open!');
    if (role === 'sender' && selectedFile) {
      startSendingFile();
    }
  };

  channel.onclose = () => {
    console.log('Data channel closed');
  };

  channel.onerror = (err) => {
    console.error('Data channel error:', err);
  };

  channel.onmessage = (event) => {
    if (typeof event.data === 'string') {
      try {
        const message = JSON.parse(event.data);
        handleControlMessage(message);
      } catch (err) {
        console.error('Error parsing channel message:', err);
      }
    } else {
      handleIncomingChunk(event.data);
    }
  };
}

// Global Message handlers for both WebRTC and WebSocket Relay
function handleControlMessage(message) {
  if (message.type === 'metadata') {
    expectedFileInfo = message;
    receivedChunks = [];
    receivedSize = 0;
    
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];

    // Show transfer progress screen
    showSection(sectionTransfer);
    transferTitle.textContent = t.transfer_title_receiving;
    transferDirection.textContent = t.transfer_dir_download;
    transferDirection.style.background = 'linear-gradient(135deg, var(--color-cyan), hsl(190, 95%, 45%))';
    transferFileName.textContent = expectedFileInfo.name;
    transferFileSize.textContent = formatBytes(expectedFileInfo.size);
    
    startTransferStats(expectedFileInfo.size);
  } else if (message.type === 'abort') {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    alert(t.alert_transfer_aborted);
    resetState();
  }
}

function handleIncomingChunk(arrayBuffer) {
  receivedChunks.push(arrayBuffer);
  receivedSize += arrayBuffer.byteLength;
  
  updateTransferProgress(receivedSize, expectedFileInfo.size);
  
  // Overflow protection: abort if peer sends more data than declared (DoS prevention)
  if (receivedSize > expectedFileInfo.size) {
    console.error('Data overflow: received more bytes than declared in metadata.');
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    alert(lang === 'he' ? 'שגיאת אבטחה: התקבל יותר מידע מהגודל המוצהר!' : 'Security error: Received more data than declared!');
    resetState();
    return;
  }
  
  if (receivedSize >= expectedFileInfo.size) {
    completeTransferReceiver();
  }
}

// Send Data (encapsulates WebSocket relay vs. WebRTC data channel)
function sendData(data) {
  if (useWebsocketRelay) {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      // Convert ArrayBuffer to Base64 string
      const bytes = new Uint8Array(data);
      let binary = '';
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const base64 = btoa(binary);
      ws.send(JSON.stringify({
        type: 'relay-msg',
        roomId: roomId,
        data: {
          type: 'chunk',
          base64: base64
        }
      }));
    } else {
      // Control message
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
      ws.send(JSON.stringify({
        type: 'relay-msg',
        roomId: roomId,
        data: parsedData
      }));
    }
  } else {
    dataChannel.send(data);
  }
}

// Receive Relayed WebSocket Messages
function handleRelayedMessage(payload) {
  if (payload.type === 'chunk') {
    const base64 = payload.base64;
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    handleIncomingChunk(bytes.buffer);
  } else {
    handleControlMessage(payload);
  }
}

// Fallback Switcher
function switchToWebsocketRelay() {
  if (useWebsocketRelay) return;
  useWebsocketRelay = true;
  console.log('WebRTC failed/timed out. Switching to WebSocket Relay fallback...');
  
  clearTimeout(connectionTimeout);
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }
  
  // Update status UI
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations['he'];
  updateStatus('connected', 'status_relay_active');
  
  // If we are the sender and have selected a file, start sending now!
  if (role === 'sender' && selectedFile) {
    startSendingFile();
  }
}

// SENDER: Start File Transmission
function startSendingFile() {
  if (!selectedFile) return;

  // Send metadata
  sendData({
    type: 'metadata',
    name: selectedFile.name,
    size: selectedFile.size,
    fileType: selectedFile.type,
    hash: selectedFile.sha256 || null
  });

  const lang = getCurrentLanguage();
  const t = translations[lang] || translations['he'];

  showSection(sectionTransfer);
  transferTitle.textContent = t.transfer_title_sending;
  transferDirection.textContent = t.transfer_dir_upload;
  transferDirection.style.background = 'linear-gradient(135deg, var(--color-purple), hsl(263, 85%, 55%))';
  transferFileName.textContent = selectedFile.name;
  transferFileSize.textContent = formatBytes(selectedFile.size);

  startTransferStats(selectedFile.size);

  let offset = 0;
  const fileReader = new FileReader();

  const sendNextChunk = () => {
    while (offset < selectedFile.size) {
      const currentBufferAmount = useWebsocketRelay ? ws.bufferedAmount : dataChannel.bufferedAmount;
      const threshold = useWebsocketRelay ? 65536 : dataChannel.bufferedAmountLowThreshold;
      
      if (currentBufferAmount > threshold) {
        if (useWebsocketRelay) {
          // Poll until WebSocket buffer clears
          setTimeout(sendNextChunk, 10);
        }
        return;
      }
      
      const slice = selectedFile.slice(offset, offset + CHUNK_SIZE);
      fileReader.readAsArrayBuffer(slice);
      return; // Wait for onload event to proceed
    }

    if (offset >= selectedFile.size) {
      console.log('File transmission complete!');
      completeTransferSender();
    }
  };

  fileReader.onload = (event) => {
    const buffer = event.target.result;
    sendData(buffer);
    offset += buffer.byteLength;
    
    updateTransferProgress(offset, selectedFile.size);
    sendNextChunk();
  };

  if (!useWebsocketRelay && dataChannel) {
    dataChannel.onbufferedamountlow = () => {
      sendNextChunk();
    };
  }

  // Start sending
  sendNextChunk();
}

// Transfer Statistics tracking
function startTransferStats(totalSize) {
  transferStartTime = Date.now();
  lastTransferredBytes = 0;
  lastSpeedCalcTime = Date.now();
  
  clearInterval(speedCalcInterval);
  speedCalcInterval = setInterval(() => {
    const now = Date.now();
    const timeDelta = (now - lastSpeedCalcTime) / 1000; // seconds
    const currentBytes = (role === 'sender') ? (selectedFile ? selectedFile.size * (parseFloat(progressPct.textContent) / 100) : 0) : receivedSize;
    const byteDelta = currentBytes - lastTransferredBytes;
    
    if (timeDelta > 0) {
      const speedBytesPerSec = byteDelta / timeDelta;
      const lang = getCurrentLanguage();
      const t = translations[lang] || translations['he'];
      
      progressSpeed.textContent = `${formatBytes(speedBytesPerSec)} ${t.speed_suffix}`;
      
      // Calculate ETA
      const remainingBytes = totalSize - currentBytes;
      if (speedBytesPerSec > 0) {
        const etaSeconds = Math.ceil(remainingBytes / speedBytesPerSec);
        if (etaSeconds > 60) {
          const minutes = Math.floor(etaSeconds / 60);
          const seconds = etaSeconds % 60;
          transferEta.textContent = t.eta_minutes_seconds.replace('{minutes}', minutes).replace('{seconds}', seconds);
        } else {
          transferEta.textContent = t.eta_seconds.replace('{seconds}', etaSeconds);
        }
      } else {
        transferEta.textContent = t.eta_calculating;
      }
    }
    
    lastTransferredBytes = currentBytes;
    lastSpeedCalcTime = now;
  }, 1000);
}

// Update UI progress bar and fields
function updateTransferProgress(current, total) {
  const pct = Math.min(Math.round((current / total) * 100), 100);
  progressFill.style.width = `${pct}%`;
  progressPct.textContent = `${pct}%`;
  
  const lang = getCurrentLanguage();
  const outOfText = lang === 'he' ? 'מתוך' : 
                    lang === 'es' ? 'de' : 
                    lang === 'ar' ? 'من' : 
                    lang === 'ru' ? 'из' : 'out of';
  transferBytes.textContent = `${formatBytes(current)} ${outOfText} ${formatBytes(total)}`;
}

// Sender completion
function completeTransferSender() {
  clearInterval(speedCalcInterval);
  setTimeout(() => {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    completeTitle.textContent = t.complete_title_sender;
    completeDesc.textContent = t.complete_desc_sender.replace('{filename}', selectedFile.name);
    completeFileName.textContent = selectedFile.name;
    completeFileSize.textContent = formatBytes(selectedFile.size);
    btnDownloadFile.classList.add('hidden');
    
    showSection(sectionComplete);
  }, 500);
}

// Receiver completion
// Verify hash of received file
async function verifyReceivedFileHash(blob, expectedHash) {
  if (!expectedHash) {
    return { status: 'skipped', message: getCurrentLanguage() === 'he' ? 'לא סופק מזהה אבטחה מהשולח' : 'No integrity hash provided by sender' };
  }
  if (blob.size > 150 * 1024 * 1024) {
    return { status: 'skipped', message: getCurrentLanguage() === 'he' ? 'קובץ גדול מדי לחישוב מזהה אבטחה' : 'File too large for local integrity hashing' };
  }
  try {
    const arrayBuffer = await blob.arrayBuffer();
    let hashHex = '';
    if (typeof crypto !== 'undefined' && crypto.subtle && typeof crypto.subtle.digest === 'function') {
      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } else {
      console.log("Non-secure context or Web Crypto API missing. Using pure-JS SHA-256 fallback for verification.");
      hashHex = sha256Fallback(arrayBuffer);
    }
    
    if (hashHex === expectedHash) {
      return { status: 'success', hash: hashHex };
    } else {
      return { status: 'failed', hash: hashHex };
    }
  } catch (err) {
    console.error("Failed to compute hash:", err);
    return { status: 'error', message: err.message };
  }
}

// Receiver completion
function completeTransferReceiver() {
  clearInterval(speedCalcInterval);
  setTimeout(async () => {
    const fileBlob = new Blob(receivedChunks);
    const downloadUrl = URL.createObjectURL(fileBlob);
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    
    completeTitle.textContent = t.complete_title_receiver;
    completeDesc.textContent = t.complete_desc_receiver.replace('{filename}', expectedFileInfo.name);
    completeFileName.textContent = expectedFileInfo.name;
    completeFileSize.textContent = formatBytes(expectedFileInfo.size);
    
    // Configure download button
    btnDownloadFile.href = downloadUrl;
    btnDownloadFile.download = expectedFileInfo.name;
    btnDownloadFile.classList.remove('hidden');
    
    // Automatically trigger download
    btnDownloadFile.click();
    
    showSection(sectionComplete);

    // Perform integrity check asynchronously
    integrityBadgeContainer.className = 'hash-badge';
    integrityBadgeContainer.classList.remove('hidden');
    integrityBadgeContainer.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>${lang === 'he' ? 'מחשב מזהה אבטחה...' : 'Calculating integrity check...'}</span>`;
    lucide.createIcons();
    
    const result = await verifyReceivedFileHash(fileBlob, expectedFileInfo.hash);
    if (result.status === 'success') {
      integrityBadgeContainer.className = 'hash-badge success';
      integrityBadgeContainer.innerHTML = `<i data-lucide="shield-check"></i> <span>${lang === 'he' ? 'אימות שלמות קובץ תקין (SHA-256 תואם)' : 'File integrity verified (SHA-256 matches)'}</span>`;
    } else if (result.status === 'failed') {
      integrityBadgeContainer.className = 'hash-badge failed';
      integrityBadgeContainer.innerHTML = `<i data-lucide="shield-alert"></i> <span>${lang === 'he' ? 'שגיאה: אימות שלמות נכשל! הקובץ עלול להיות פגום.' : 'Warning: Integrity check failed! File may be corrupted.'}</span>`;
    } else {
      integrityBadgeContainer.className = 'hash-badge';
      integrityBadgeContainer.innerHTML = `<i data-lucide="shield-question"></i> <span>${result.message || (lang === 'he' ? 'לא ניתן לבדוק שלמות' : 'Integrity check skipped')}</span>`;
    }
    lucide.createIcons();
  }, 500);
}

// Event Listeners for UI
btnModeSend.addEventListener('click', () => {
  pendingMode = 'send';
  const savedKey = senderAccessKey;
  if (savedKey) {
    initSenderMode();
  } else {
    senderAuthContainer.classList.remove('hidden');
    joinCodeContainer.classList.add('hidden'); // Ensure receiver input is closed
    btnModeSend.parentElement.style.opacity = '0.3';
  }
});

btnModeRequest.addEventListener('click', () => {
  pendingMode = 'request';
  const savedKey = senderAccessKey;
  if (savedKey) {
    initRequestMode();
  } else {
    senderAuthContainer.classList.remove('hidden');
    joinCodeContainer.classList.add('hidden'); // Ensure receiver input is closed
    btnModeSend.parentElement.style.opacity = '0.3';
  }
});

btnSubmitAuth.addEventListener('click', () => {
  const key = senderAuthInput.value.trim();
  if (key) {
    senderAccessKey = key;
    senderAuthContainer.classList.add('hidden');
    btnModeSend.parentElement.style.opacity = '1';
    senderAuthInput.value = '';
    if (pendingMode === 'request') {
      initRequestMode();
    } else {
      initSenderMode();
    }
  } else {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    alert(t.alert_enter_passcode);
  }
});

senderAuthInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnSubmitAuth.click();
  }
});

btnBackAuth.addEventListener('click', () => {
  senderAuthContainer.classList.add('hidden');
  btnModeSend.parentElement.style.opacity = '1';
  senderAuthInput.value = '';
  pendingMode = null;
});

btnModeReceive.addEventListener('click', () => {
  joinCodeContainer.classList.remove('hidden');
  senderAuthContainer.classList.add('hidden'); // Ensure sender input is closed
  btnModeSend.parentElement.style.opacity = '0.3';
  btnModeReceive.classList.add('active'); // CSS style hook if needed
});

btnBackWelcome.addEventListener('click', () => {
  joinCodeContainer.classList.add('hidden');
  btnModeSend.parentElement.style.opacity = '1';
  joinCodeInput.value = '';
});

btnSubmitCode.addEventListener('click', () => {
  const code = joinCodeInput.value.trim();
  if (code.length >= 8 && /^[a-f0-9-]{8,40}$/i.test(code)) {
    joinRoom(code);
  } else {
    const lang = getCurrentLanguage();
    const t = translations[lang] || translations['he'];
    alert(t.alert_enter_valid_code);
  }
});

joinCodeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnSubmitCode.click();
  }
});

// Drag and Drop Logic
dropZone.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFileSelection(e.target.files[0]);
  }
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFileSelection(e.dataTransfer.files[0]);
  }
});

// Fallback pure-JS SHA-256 implementation for non-secure contexts (HTTP)
function sha256Fallback(buffer) {
  const words = [];
  const dt = new DataView(buffer);
  const byteLength = buffer.byteLength;
  for (let i = 0; i < byteLength; i += 4) {
    if (i + 4 <= byteLength) {
      words.push(dt.getUint32(i, false));
    } else {
      let w = 0;
      for (let j = 0; j < byteLength - i; j++) {
        w |= dt.getUint8(i + j) << (24 - j * 8);
      }
      words.push(w);
    }
  }
  
  const totalBits = byteLength * 8;
  const remBytes = byteLength % 4;
  if (remBytes === 0) {
    words.push(0x80000000);
  } else {
    words[words.length - 1] |= 0x80 << (24 - remBytes * 8);
  }
  
  while ((words.length * 4) % 64 !== 56) {
    words.push(0);
  }
  words.push((totalBits / 0x100000000) | 0);
  words.push(totalBits | 0);

  const h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];
  
  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  function rotr(n, x) { return (x >>> n) | (x << (32 - n)); }

  for (let i = 0; i < words.length; i += 16) {
    const w = new Array(64);
    for (let t = 0; t < 16; t++) w[t] = words[i + t];
    for (let t = 16; t < 64; t++) {
      const s0 = rotr(7, w[t-15]) ^ rotr(18, w[t-15]) ^ (w[t-15] >>> 3);
      const s1 = rotr(17, w[t-2]) ^ rotr(19, w[t-2]) ^ (w[t-2] >>> 10);
      w[t] = (w[t-16] + s0 + w[t-7] + s1) | 0;
    }

    let [a, b, c, d, e, f, g, h_val] = h;

    for (let t = 0; t < 64; t++) {
      const S1 = rotr(6, e) ^ rotr(11, e) ^ rotr(25, e);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h_val + S1 + ch + k[t] + w[t]) | 0;
      const S0 = rotr(2, a) ^ rotr(13, a) ^ rotr(22, a);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;

      h_val = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }

    h[0] = (h[0] + a) | 0;
    h[1] = (h[1] + b) | 0;
    h[2] = (h[2] + c) | 0;
    h[3] = (h[3] + d) | 0;
    h[4] = (h[4] + e) | 0;
    h[5] = (h[5] + f) | 0;
    h[6] = (h[6] + g) | 0;
    h[7] = (h[7] + h_val) | 0;
  }

  return h.map(x => {
    let hex = (x >>> 0).toString(16);
    return hex.padStart(8, '0');
  }).join('');
}

// Calculate SHA-256 checksum of a file
async function calculateHash(file) {
  if (file.size > 150 * 1024 * 1024) {
    console.log("File too large for memory-based SHA-256 hashing.");
    return null;
  }
  try {
    const arrayBuffer = await file.arrayBuffer();
    if (typeof crypto !== 'undefined' && crypto.subtle && typeof crypto.subtle.digest === 'function') {
      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } else {
      console.log("Non-secure context or Web Crypto API missing. Using pure-JS SHA-256 fallback.");
      return sha256Fallback(arrayBuffer);
    }
  } catch (err) {
    console.error("Failed to calculate file hash:", err);
    return null;
  }
}

async function handleFileSelection(file) {
  selectedFile = file;
  selectedFileName.textContent = file.name;
  selectedFileSize.textContent = formatBytes(file.size);
  
  selectedFileCard.classList.remove('hidden');
  dropZone.style.display = 'none'; // Hide drop target visual

  // Calculate file hash asynchronously
  selectedFileHash.classList.remove('hidden');
  const lang = getCurrentLanguage();
  selectedFileHash.textContent = lang === 'he' ? 'מחשב מזהה אבטחה SHA-256...' : 'Calculating SHA-256 checksum...';
  
  calculateHash(file).then(hash => {
    if (hash) {
      selectedFile.sha256 = hash;
      selectedFileHash.textContent = `SHA-256: ${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
    } else {
      selectedFileHash.textContent = lang === 'he' ? 'אימות אבטחה: קובץ גדול מדי' : 'Security hash: File too large to hash';
    }
  });

  // If we are in pending request mode and not connected yet, initiate connection now!
  if (pendingMode === 'request' && !ws) {
    const t = translations[lang] || translations['he'];
    
    // Dynamically change waiting section texts for sender
    const waitingTitle = sectionReceiverWaiting.querySelector('.waiting-state h3');
    const waitingDesc = sectionReceiverWaiting.querySelector('.waiting-state p');
    if (waitingTitle && waitingDesc) {
      waitingTitle.setAttribute('data-i18n', 'waiting_connecting_title_receiver');
      waitingTitle.textContent = t.waiting_connecting_title_receiver;
      
      waitingDesc.setAttribute('data-i18n', 'waiting_connecting_desc_receiver');
      waitingDesc.textContent = t.waiting_connecting_desc_receiver;
    }
    
    showSection(sectionReceiverWaiting);
    
    connectSignaling(() => {
      ws.send(JSON.stringify({
        type: 'join',
        roomId: roomId
      }));
    });
  }

  // If the WebRTC connection is already established and channel is open, start sending immediately
  if (role === 'sender' && dataChannel && dataChannel.readyState === 'open') {
    startSendingFile();
  }
}

btnRemoveFile.addEventListener('click', (e) => {
  e.stopPropagation(); // Avoid triggering file selection click
  selectedFile = null;
  fileInput.value = '';
  selectedFileCard.classList.add('hidden');
  dropZone.style.display = 'flex';
});

// Copy link button
btnCopyLink.addEventListener('click', () => {
  shareLinkInput.select();
  shareLinkInput.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(shareLinkInput.value)
    .then(() => {
      // Dynamic button state update
      const icon = document.getElementById('copy-icon');
      icon.setAttribute('data-lucide', 'check');
      lucide.createIcons();
      btnCopyLink.style.color = 'var(--color-success)';
      setTimeout(() => {
        icon.setAttribute('data-lucide', 'copy');
        lucide.createIcons();
        btnCopyLink.style.color = '';
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
    });
});

// Abort/Cancel actions
btnCancelSender.addEventListener('click', () => {
  resetState();
});

btnCancelReceiver.addEventListener('click', () => {
  resetState();
});

btnAbortTransfer.addEventListener('click', () => {
  if (useWebsocketRelay || (dataChannel && dataChannel.readyState === 'open')) {
    sendData({ type: 'abort' });
  }
  resetState();
});

btnReset.addEventListener('click', () => {
  resetState();
});

// Host Approval Button Listeners
btnApprovePeer.addEventListener('click', () => {
  approvalModal.classList.add('hidden');
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: 'approve-peer',
      roomId: roomId
    }));
  }
});

btnRejectPeer.addEventListener('click', () => {
  approvalModal.classList.add('hidden');
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: 'reject-peer',
      roomId: roomId
    }));
  }
});

// Test Mode helper
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('test') === 'true') {
  const testBtn = document.getElementById('btn-test-mock-file');
  if (testBtn) {
    testBtn.style.display = 'block';
    testBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop from opening file dialog
      const mockFile = new File(["This is a test file for P2P sharing verification."], "p2p-test-file.txt", {
        type: "text/plain"
      });
      handleFileSelection(mockFile);
    });
  }
}
