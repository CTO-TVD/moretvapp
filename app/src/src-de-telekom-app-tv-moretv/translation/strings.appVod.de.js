define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GermanTranslationTable = void 0;
    var GermanTranslationTable = (function () {
        function GermanTranslationTable() {
        }
        GermanTranslationTable.get = function () {
            return {
                appVod: {
                    STB_CR_TI017: "\"{title}\" hat die Alterskennzeichnung \"{rating}\".",
                    STB_CR_TI017p2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    STB_CR_TI021: "Das Ausf\u00FChren dieser Funktion ist gesperrt.",
                    STB_CR_TI021p2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    STB_CR_TI022: "Die Sichtbarkeit dieser Angebote ist gesperrt.",
                    STB_CR_TI022p2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    STB_CR_TI023: "Der Zugriff auf \"{name}\" ist gesperrt.",
                    STB_CR_TI023p2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    STB_PH_TI001: "Benutzer-PIN erforderlich",
                    STB_GN_TI013: "Passwort oder pers\u00F6nliches Kennwort erforderlich",
                    STB_GN_TI014: "Bitte geben Sie Ihr Passwort oder pers\u00F6nliches Kennwort ein, um eine neue Benutzer-PIN zu vergeben.",
                    STB_GN_TI015: "Hinweis: Das pers\u00F6nliche Kennwort haben Sie per Post als vertrauliche Mitteilung mit den Einrichtungsunterlagen f\u00FCr Ihren Anschluss erhalten. Das Passwort haben Sie selbst festgelegt, um Telekom Dienste mit dem Telekom Login nutzen zu k\u00F6nnen.",
                    STB_VD_TI071: "Alle anzeigen",
                    STB_PD_TI004: "Episode {episodeNo}",
                    STB_PD_TI004c: "Video {episodeNo}",
                    STB_PD_TI004d: "Sendung {episodeNo}",
                    CONTENT_INFO_QUALITY: "Qualit\u00E4t",
                    CONTENT_INFO_ORIGINALTITLE: "Originaltitel",
                    CONTENT_INFO_COUNTRY: "Land",
                    CONTENT_INFO_RATING: "Bewertung",
                    STB_VD_TI013: "Untertitel",
                    CONTENT_INFO_LABEL: "Label",
                    STB_VD_TI019: "{runtime} Min.",
                    STB_VD_TI027: "Genre",
                    STB_VD_TI028: "Alterskennzeichnung",
                    STB_VD_TI028_short: "Alterskennz.",
                    STB_VD_TI029: "Sprache",
                    STB_VD_TI030: "Dauer",
                    STB_VD_TI031: "Sendezeit",
                    STB_VD_TI032: "Details",
                    STB_VD_TI032b: "Mehr Infos",
                    STB_VD_TI033: "Personen",
                    STB_VD_TI034: "Trailer",
                    STB_VD_TI035: "Merken",
                    STB_VD_TI036: "Alle Episoden",
                    STB_VD_TI036_: "Alle\r\n Episoden",
                    STB_VD_TI036b: "Alle Sendungen",
                    STB_VD_TI036b_: "Alle\r\n Sendungen",
                    STB_VD_TI036c: "Alle Videos",
                    STB_VD_TI037: "Alle Staffeln",
                    STB_VD_TI037_: "Alle\r\n Staffeln",
                    STB_VD_TI037c: "Alle Begegnungen",
                    STB_VD_TI042: "Ab {price} mieten",
                    STB_VD_TI043: "Ab {price} kaufen",
                    STB_VD_TI042_UI20_L1: "Ab {price} mieten",
                    STB_VD_TI042_UI20_L2a: "bei ",
                    STB_VD_TI042_UI20_L2b: "{partner}",
                    STB_VD_TI043_UI20_L1: "Ab {price} kaufen",
                    STB_VD_TI043_UI20_L2a: "bei ",
                    STB_VD_TI043_UI20_L2b: "{partner}",
                    STB_VD_BOOKING: "mieten",
                    STB_VD_BUYING: "kaufen",
                    STB_VD_DEFAULT_SPECIAL_ACTION: "Angebot",
                    STB_VD_TI044: "Im TV verf\u00FCgbar",
                    STB_VD_TI047: "Staffeln",
                    STB_VD_TI048: "Episoden",
                    STB_VD_TI048b: "Sendungen",
                    STB_VD_TI048c: "Videos",
                    STB_VD_TI048d: "Begegnungen",
                    STB_VD_TI049: "Clips",
                    STB_VD_TI049a: "Inhalte",
                    AT_PARTNERS_ui20: "Erh\u00E4ltlich bei: {partners}",
                    STB_VD_TI073: "Erwachsenenangebote",
                    STB_VD_TI073_text: "{count} {count, plural, one {gesperrter Inhalt} other {gesperrte Inhalte}} gefunden,\r\n bitte geben Sie Ihre Erwachsenen-PIN ein.",
                    STB_VD_TI073c: "Erwachsenen- angebote ({count})",
                    STB_VD_TI096: "Noch {number} Std.",
                    STB_VD_TI096b: "Noch {number} Min.",
                    STB_VD_TI096c: "Noch {number} Tage",
                    STB_VD_TI096_ui20: "Noch {number} Std. verf\u00FCgbar",
                    STB_VD_TI096_p1: "Noch",
                    STB_VD_TI096_p2: "{number} Std. verf\u00FCgbar",
                    STB_VD_TI096b_ui20: "Noch {number} Min. verf\u00FCgbar",
                    STB_VD_TI096b_p1: "Noch",
                    STB_VD_TI096b_p2: "{number} Min. verf\u00FCgbar",
                    STB_VD_TI096c_ui20: "Noch {number} Tage verf\u00FCgbar",
                    STB_VD_TI096c_p1: "Noch",
                    STB_VD_TI096c_p2: "{number} Tage verf\u00FCgbar",
                    OFFER_PURCHASED: "Gekauft am {date}",
                    STB_VD_TI099: "Im Abo",
                    STB_VD_TI099_UI20_L1: "Im TV-Paket",
                    STB_VD_TI099_UI20_L2: "{partner}",
                    STB_VD_TI039: "Ab {date} verf\u00FCgbar",
                    STB_VD_TI039h: "Ab {time} Uhr verf\u00FCgbar",
                    STB_VD_TI040: "Ab {date} zu kaufen",
                    STB_VD_TI040h: "Ab {time} Uhr zu kaufen",
                    STB_VD_TI040_soon: "Demn\u00E4chst zu kaufen",
                    STB_VD_TI041: "Ab {date} zu mieten",
                    STB_VD_TI041h: "Ab {time} Uhr zu mieten",
                    STB_VD_TI041_soon: "Demn\u00E4chst zu mieten",
                    AVAILABLE_SOON: "Demn\u00E4chst verf\u00FCgbar",
                    AVAILABLE_SOON_tile: "Demn\u00E4chst",
                    AVAILABLE_AT_tile: "Ab {date}",
                    NOT_AVAILABLE: "Nicht verf\u00FCgbar",
                    AVAILABLE_ALL_EPISODES: "Alle Episoden verf\u00FCgbar",
                    AVAILABLE_SINGLE_EPISODE: "Nur Episode {number}",
                    AVAILABLE_FROM_EPISODE: "Episode {number} und weitere",
                    AVAILABLE_ALL_TVBROADCASTS: "Alle Sendungen verf\u00FCgbar",
                    AVAILABLE_SINGLE_TVBROADCAST: "Nur Sendung {number}",
                    AVAILABLE_FROM_TVBROADCASTS: "Sendung {number} und weitere",
                    AVAILABLE_SEASONS: "{number} von {totalcount} Staffeln",
                    REMOVE_FROM_WATCHLIST: "Nicht merken",
                    STB_TM101: "Video wurde zur Merkliste hinzugef\u00FCgt.",
                    STB_TM101_again: "Video wurde bereits zur Merkliste hinzugef\u00FCgt.",
                    STB_TM102: "Video konnte nicht zur Merkliste hinzugef\u00FCgt werden.",
                    STB_TM103: "Video wurde aus der Merkliste gel\u00F6scht.",
                    STB_TM104: "Video konnte nicht aus der Merkliste gel\u00F6scht werden.",
                    OPTION_FILTER: "Filtern",
                    STB_SE_TI002: "Filtern und Sortieren",
                    STB_SE_TI015: "Optionen",
                    STB_SE_TI016: "Filtern nach",
                    STB_SE_TI017: "Sortieren",
                    STB_TM027: "Sortierung ge\u00E4ndert in {sortoption}",
                    STB_TM028: "Alle Einstellungen wurden zur\u00FCckgesetzt.",
                    STB_VD_TI109: "Kritiken",
                    STB_VD_TI054: "Tipps",
                    STB_VD_TI074: "{objecttype} kaufen",
                    STB_VD_TI101: "{objecttype} mieten",
                    STB_VD_TI082: "AGB, Widerrufsrecht & Datenschutz",
                    STB_VD_TI077: "Abbrechen",
                    STB_VD_TI076: "Code einl\u00F6sen",
                    STB_VD_TI078: "Code einl\u00F6sen",
                    ANOTHER_CODE: "Weiterer Code",
                    STB_VD_TI088: "Zahlungspflichtig bestellen",
                    STB_VD_TI075: "Weiter",
                    STB_VD_TI079: "Bitte geben Sie den Code \u00FCber Ihre Fernbedienung ein.",
                    OTHER_QUALITY: "Andere Qualit\u00E4t",
                    CONFIRMATION: "Vielen Dank!",
                    STB_VD_TI090: "Um das Video sofort anzusehen, klicken Sie einfach auf \u201EAbspielen\u201C. Sp\u00E4ter finden Sie das Video im Bereich \u201EMeine Inhalte\u201C.",
                    INCLUDED_QUALITIES: "Sie k\u00F6nnen den Inhalt in folgenden Qualit\u00E4ten abspielen:",
                    FOUR_K_HINT: "Die technischen Voraussetzungen f\u00FCr Ultra-HD-Inhalte werden nicht erf\u00FCllt. Zum Abspielen von Ultra-HD-Inhalten ben\u00F6tigen Sie:",
                    PLAY_HINT_TEXT: "Die technischen Voraussetzungen f\u00FCr {quality}-Inhalte werden nicht erf\u00FCllt. Zum Abspielen von {quality}-Inhalten ben\u00F6tigen Sie:",
                    PLAY_HINT_DISPLAY_MISMATCH_TEXT: "Der verwendete HDMI-Anschluss unterst\u00FCtzt keinen HDCP 2.2 Kopierschutz bei der eingestellten Bildschirmaufl\u00F6sung des Media Receiver.<br/>\n                Bitte verwenden Sie den Media Receiver an einem anderen HDMI-Anschluss oder reduzieren Sie die Bildschirmaufl\u00F6sung unter EINSTELLUNGEN > BILD & TON > BILDFORMAT.",
                    PLAY_HINT_TITLE: "{quality} Abspielen nicht m\u00F6glich",
                    PLAY_HINT_NEXT: "Weiter",
                    PLAY_HINT_BACK: "Zur\u00FCck",
                    STB_VD_TI087_1: "Mit Klick auf \u201EZahlungspflichtig bestellen\u201C akzeptieren Sie die geltenden",
                    STB_VD_TI087_2: "AGB und Datenschutzhinweise",
                    STB_VD_TI087_3: ".",
                    STB_VD_TI081: "Restguthaben {remain}",
                    STB_VD_TI083: "Wert des Codes",
                    STB_VD_TI084: "zu zahlender Preis",
                    STB_VD_TI102: "Lizenz vorhanden",
                    ALREADY_BOUGHT: "Lizenz vorhanden",
                    INSTEAD_OF_LABEL: "statt",
                    STB_VD_TI091: "Abspielen",
                    STB_VD_TI091_UI20_L1: "Abspielen bei",
                    STB_VD_TI091_UI20_L2: "{partner}",
                    STB_VD_TI091_ui20: "Jetzt vormerken",
                    PLAYBUTTON_SUFFIX_L1: "_playbutton_line1",
                    PLAYBUTTON_SUFFIX_L2: "_playbutton_line2",
                    PLAYBUTTON_APP_L1: "In App \u00F6ffnen",
                    STB_VD_TI092: "Meine Inhalte",
                    INVALID_CODE: "Der eingegebene Code ist nicht korrekt. Bitte \u00FCberpr\u00FCfen Sie Ihre Eingabe.",
                    INSUFFICIENT_COUPON: "Der eingegebene Code ist nur f\u00FCr einen Film zum Mieten einsetzbar.",
                    OBJ_TYPE_VIDEO: "Film",
                    OBJ_TYPE_SEASON: "Staffel",
                    OBJ_TYPE_EPISODE: "Episode",
                    STB_VD_TI016: "{timeSec} Sek.",
                    STB_VD_TI006: "Details",
                    STB_VD_TI008: "Erneut abspielen",
                    STB_VD_TI009: "N\u00E4chste Episode",
                    STB_VD_TI009a: "N\u00E4chste Episoden",
                    TO_LIVE_TV: "Zum Live-TV",
                    CURRENT_CHANNEL_1: "Akt. ",
                    CURRENT_CHANNEL_2: "Sender",
                    CURRENT_CHANNEL_PREV: "Zuletzt",
                    STB_VD_TI010: "OPTIONEN",
                    STB_VD_TI011: "Video Qualit\u00E4t",
                    STB_VD_TI012: "Sprache und Ton",
                    STB_VD_TI015: "Aktuelle Einstellung:",
                    STB_VD_TI017: "HD",
                    STB_VD_TI017d: "3D",
                    STB_VD_TI017u: "UHD",
                    STB_VD_TI017u_hdr: "UHD-HDR",
                    STB_VD_TI018: "SD",
                    ERROR_SETTING: "Aktion konnte nicht ausgef\u00FChrt werden.",
                    STB_TM100: "Video wird in {quality} abgespielt.",
                    STB_TM008: "Sie haben {language_sound} ausgew\u00E4hlt.",
                    STB_TM009: "Sie haben als Untertitel {subtitle} ausgew\u00E4hlt.",
                    NO_SUBTITLES: "Keine Untertitel",
                    LANGUAGE_ger: "Deutsch",
                    LANGUAGE_eng: "Englisch",
                    LANGUAGE_ara: "Arabisch",
                    LANGUAGE_bul: "Bulgarisch",
                    LANGUAGE_dan: "D\u00E4nisch",
                    LANGUAGE_est: "Estnisch",
                    LANGUAGE_fin: "Finnisch",
                    LANGUAGE_fre: "Franz\u00F6sisch",
                    LANGUAGE_gre: "Griechisch",
                    LANGUAGE_heb: "Hebr\u00E4isch",
                    LANGUAGE_ita: "Italienisch",
                    LANGUAGE_ja: "Japanisch",
                    LANGUAGE_kor: "Koreanisch",
                    LANGUAGE_dut: "Niederl\u00E4ndisch",
                    LANGUAGE_nor: "Norwegisch",
                    LANGUAGE_pol: "Polnisch",
                    LANGUAGE_por: "Portugiesisch",
                    LANGUAGE_rum: "Rum\u00E4nisch",
                    LANGUAGE_rus: "Russisch",
                    LANGUAGE_swe: "Schwedisch",
                    LANGUAGE_gsw: "Schweizerisch",
                    LANGUAGE_srp: "Serbisch",
                    LANGUAGE_slo: "Slovakisch",
                    LANGUAGE_spa: "Spanisch",
                    LANGUAGE_cve: "Tschechisch",
                    LANGUAGE_tur: "T\u00FCrkisch",
                    LANGUAGE_hun: "Ungarisch",
                    LANGUAGE_zxx: "Verschiedene",
                    LANGUAGE_xho: "Xhosa",
                    LANGUAGE_nob: "Bokm\u00E5l",
                    LANGUAGE_isl: "Isl\u00E4ndisch",
                    LANGUAGE_zho: "Chinesisch",
                    LANGUAGE_hin: "Hindi",
                    LANGUAGE_afr: "Afrikaans",
                    LANGUAGE_ukr: "Ukrainisch",
                    LANGUAGE_tha: "Thail\u00E4ndisch",
                    LANGUAGE_kur: "Kurdisch",
                    LANGUAGE_lav: "Lettisch",
                    LANUGAGE_mul: "Mehrsprachig",
                    LANGUAGE_lat: "Latein",
                    LANGUAGE_mis: "Unbekannt",
                    SOUNDLANGUAGE_LABEL: "{language} {audiotype}",
                    DCAM_ERROR_STREAM_MGR: "Abspielen nicht m\u00F6glich. Der Inhalt wird auf einem anderen Ger\u00E4t abgespielt oder wurde bereits heruntergeladen.",
                    STB_VD_TI020: "Abspielen nicht m\u00F6glich",
                    STB_VD_TI021: "Leider reicht Ihre Bandbreite nicht aus. Bitte w\u00E4hlen Sie unter \"Optionen\" eine niedrigere Videoqualit\u00E4t aus.",
                    STB_VD_TI021_A: "Leider reicht die verf\u00FCgbare Bandbreite nicht aus, um den Film ruckelfrei abzuspielen. Sie k\u00F6nnen den Film fortsetzen oder abbrechen.",
                    STB_VD_TI022: "Optionen",
                    STB_VD_TI023: "Fortsetzen",
                    PLAYER_LOAD_ERROR: "Es ist ein Fehler aufgetreten. Bitte probieren Sie es sp\u00E4ter noch einmal.",
                    overlayPlayeGeneralError_TITLE: "Hinweis",
                    overlayPlayeGeneralError_BODY_TEXT: "Es ist ein Fehler aufgetreten. Bitte probieren Sie es sp\u00E4ter noch einmal.",
                    overlayPlayeGeneralError_SUGGESTION: "",
                    overlayPlayeGeneralError_BTN_CLOSE: "Schlie\u00DFen",
                    overlayPlayerDcamDeviceLimitExceeded_TITLE: "Abspielen nicht m\u00F6glich",
                    overlayPlayerDcamDeviceLimitExceeded_BODY_TEXT: "Sie haben bereits die maximale Anzahl von 5 Ger\u00E4ten erreicht.\n                    Damit Sie das gew\u00FCnschte Ger\u00E4t nutzen k\u00F6nnen, setzen Sie bitte auf Ihrem mobilen Endger\u00E4t\n                    unter \"Einstellungen > Ger\u00E4te\", die bereits registrierten Ger\u00E4te zur\u00FCck.",
                    overlayPlayerDcamDeviceLimitExceeded_SUGGESTION: "",
                    overlayPlayerDcamDeviceLimitExceeded_BTN_CLOSE: "Schlie\u00DFen",
                    overlayPlayerDcamAllRecoveriesUsed_TITLE: "Abspielen nicht m\u00F6glich",
                    overlayPlayerDcamAllRecoveriesUsed_BODY_TEXT: "Abspielen auf weiterem Ger\u00E4t nicht m\u00F6glich. <br>\n                    Der Inhalt wurde bereits auf der maximalen Anzahl von Ger\u00E4ten abgespielt. Bitte spielen Sie den Inhalt auf einem der f\u00FCnf zuletzt verwendeten Ger\u00E4te ab.",
                    overlayPlayerDcamAllRecoveriesUsed_SUGGESTION: "",
                    overlayPlayerDcamAllRecoveriesUsed_BTN_CLOSE: "Schlie\u00DFen",
                    Watch_Now: "Jetzt ansehen",
                    Stage_DetailsButton: "Details ansehen",
                    Stage_PlayButton: "Abspielen",
                    ChildProtectionDisplayName_Unknown: "Keine Altersangabe",
                    ChildProtectionDisplayName_0: "Ab 0 Jahren",
                    ChildProtectionDisplayName_6: "Ab 6 Jahren",
                    ChildProtectionDisplayName_12: "Ab 12 Jahren",
                    ChildProtectionDisplayName_16: "Ab 16 Jahren",
                    ChildProtectionDisplayName_18: "Ab 18 Jahren",
                    ChildProtectionDisplayName_OAF: "Erwachsenenangebot",
                    ChildProtectionDisplayName_FSK_0: "Ab 0 Jahren (FSK)",
                    ChildProtectionDisplayName_FSK_6: "Ab 6 Jahren (FSK)",
                    ChildProtectionDisplayName_FSK_12: "Ab 12 Jahren (FSK)",
                    ChildProtectionDisplayName_FSK_16: "Ab 16 Jahren (FSK)",
                    ChildProtectionDisplayName_FSK_18: "Ab 18 Jahren (FSK)",
                    ChildProtectionDisplayName_FSF_0: "Ab 0 Jahren (FSF)",
                    ChildProtectionDisplayName_FSF_6: "Ab 6 Jahren (FSF)",
                    ChildProtectionDisplayName_FSF_12: "Ab 12 Jahren (FSF)",
                    ChildProtectionDisplayName_FSF_16: "Ab 16 Jahren (FSF)",
                    ChildProtectionDisplayName_FSF_18: "Ab 18 Jahren (FSF)",
                    EMPTY_LIST: "Es wurden keine Inhalte gefunden.",
                    EMPTY_TAGLIST: "Sie haben noch keine Inhalte vorgemerkt.",
                    EMPTY_MYMOVIEWS: "Sie haben noch keine Inhalte erworben.",
                    WHATS_HOT_PREFIX: "Top ",
                    STARTING_NEXT: "N\u00E4chste Episode in {count}",
                    SKIP_RECAP: "R\u00FCckblick \u00FCberspringen",
                    SKIP_INTRO: "Intro \u00FCberspringen",
                    SKIP_CREDITS: "N\u00E4chste Episode",
                    KEEP_CREDITS: "Abspann ansehen",
                    DEL_LICENCE_BTN_TEXT: "Inhalt l\u00F6schen",
                    DEL_LICENCE_TITLE: "Inhalt l\u00F6schen",
                    DEL_LICENCE_INFO_TEXT: "Sie besitzen derzeit ein k\u00E4uflich erworbenes Nutzungsrecht (Lizenz) auf diesen Inhalt. Wenn Sie die L\u00F6schung dieser Lizenz best\u00E4tigen, verzichten Sie auf Ihr Nutzungsrecht und verlieren somit dauerhaft und unwiderruflich das Abspielrecht f\u00FCr diesen Inhalt. Mit L\u00F6schung der Lizenz wird dieser Inhalt im Men\u00FC nicht mehr angezeigt. M\u00F6chten Sie den Inhalt erneut anschauen, muss die Lizenz wieder erworben werden.",
                    DEL_LICENCE_SEASON_TITLE: "Staffel l\u00F6schen",
                    DEL_LICENCE_SEASON_INFO_TEXT: "Sie besitzen derzeit ein k\u00E4uflich erworbenes Nutzungsrecht (Lizenz) zu dieser Staffel und den dazu verf\u00FCgbaren Episoden. Wenn Sie die L\u00F6schung dieser Lizenz best\u00E4tigen, verzichten Sie auf Ihr Nutzungsrecht und verlieren somit dauerhaft und unwiderruflich das Abspielrecht f\u00FCr die gesamte Staffel. Mit L\u00F6schung der Lizenz wird diese Staffel sowie deren Episoden im Men\u00FC nicht mehr angezeigt. M\u00F6chten Sie Inhalte der Staffel erneut anschauen, muss die Lizenz wieder erworben werden.",
                    COMMON_BTN_CANCEL: "Abbrechen",
                    COMMON_BTN_CONFIRM: "Best\u00E4tigen",
                },
                appMtv: {
                    MYSUBSCRIPTIONS: "Meine Abos",
                    MYSUBSCRIPTIONS_BOOKED_AT: "Gebucht am:",
                    MYSUBSCRIPTIONS_VENDOROVERVIEW_TITLE: "Erweitern Sie Ihre Sendervielfalt",
                    MYSUBSCRIPTIONS_VENDOROVERVIEW_DESCR: "Entdecken Sie die umfangreichen TV-Pakete von MagentaTV. Buchen Sie Ihre Lieblingssender in HD oder viele zus\u00E4tzliche Sender in attraktiven Paketen.",
                    MYSUBSCRIPTIONS_PINDIALOG_TITLE: "Freischaltung mit der Benutzer-PIN",
                    MYSUBSCRIPTIONS_PINDIALOG_P1: "Der Zugriff auf meine Abos ist gesperrt.",
                    MYSUBSCRIPTIONS_PINDIALOG_P2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    ABO_INFO_SIGNOFF_dt_HEAD: "Informationen zur K\u00FCndigung von TV-Paketen",
                    ABO_INFO_SIGNOFF_dt_TEXT: "Zur K\u00FCndigung eines Telekom TV-Pakets oder bei Fragen zu Ihrer Bestellung loggen Sie sich im Telekom Kundencenter unter www.telekom.de ein oder wenden Sie sich bitte direkt an den Kundenservice der Telekom:",
                    ABO_INFO_SIGNOFF_sky_HEAD: "Informationen f\u00FCr Sky Abonnenten",
                    ABO_INFO_SIGNOFF_sky_TEXT: "Sie haben mindestens ein Sky Produkt gebucht. Zur Bestellung weiterer Sky Produkte oder bei Fragen zu Ihrer Bestellung wenden Sie sich bitte direkt an Sky unter der Hotlinenummer:",
                    PURCHASE_PINDIALOG_TITLE: "Benutzer-PIN erforderlich",
                    PURCHASE_PINDIALOG_P1: "Die Ausf\u00FChrung dieser Aktion ist gesperrt.",
                    PURCHASE_PINDIALOG_P2: "Bitte geben Sie zum Freischalten Ihre Benutzer-PIN ein.",
                    COMMON_BTN_CANCEL: "Abbrechen",
                    PACKETVIEW_CONTENT: "Inhalt",
                    PACKETVIEW_CONTRACTDETAILS: "Vertragsinformationen",
                    PACKETVIEW_INFOLINK: "INFO",
                    PACKETVIEW_INC_CHANNELS: "Enthaltene Sender",
                    PACKETVIEW_INC_CHANNELS_SUBPACKAGE: "Enthaltene Sender im",
                    PACKETVIEW_HEAD_INFOTEXT: "Enthaltene Senderpakete",
                    PACKETVIEW_BTN_ORDER: "Zur Bestellung",
                    PACKETVIEW_BTN_ORDER_INFO: "Vertragsinformation",
                    PACKAGESLISTVIEW_DESCRIPTION: "enthaltene Sender",
                    CHANNELVIEW_BUTTON: "Erh\u00E4ltlich in diesen Produkten",
                    COMMON_BACK: "Zur\u00FCck",
                    COMMON_BTN_CLOSE: "Schlie\u00DFen",
                    COMMON_BTN_NEXT: "Weiter",
                    COMMON_BTN_DONE: "Fertig",
                    PURCHASE_BTN_NEXT_X: "Weiter zu Schritt {step}",
                    PURCHASE_BTN_BACK_X: "Zur\u00FCck zu Schritt {step}",
                    PURCHASE_BTN_BEFORELAST: "Zahlungspflichtig bestellen",
                    STEP1_INFO_1: "Vertragsbedingungen",
                    STEP1_HEADLINE_1: "Vertragsbedingungen / Widerrufsrecht",
                    STEP1_CONDITIONS: "Bitte beachten Sie die Allgemeinen <span class='BLUE'>Vertragsbedingungen</span> der Telekom",
                    STEP2_HEADLINE_1: "Bestellung",
                    STEP2_FEATURESHEAD: "Wesentliche Produktmerkmale",
                    STEP2_DURATIONHEAD: "Vertragslaufzeit",
                    STEP3_HEADLINE_1: "Zusammenfassung",
                    STEP3_CONFIRMHEAD: "Vielen Dank f\u00FCr Ihre Bestellung",
                    STEP3_CONFIRMTXT_1: "Wir senden Ihnen in K\u00FCrze eine Bestellbest\u00E4tigung per E-Mail an:",
                    STEP3_CONFIRMTXT_2: "Die Inhalte des bestellten TV-Pakets werden in K\u00FCrze freigeschaltet.",
                    STEP3_BTN_NEXT: "Fertig",
                    SALUTATION_MALE: "Herr",
                    SALUTATION_FEMALE: "Frau",
                    CANCEL_TITLE: "Buchung abbrechen",
                    CANCEL_DESCRIPTION: "Wenn Sie die Buchung abbrechen, gehen alle eingegebenen Daten verloren.<br/>M\u00F6chten Sie wirklich abbrechen?",
                    CANCEL_YESBUTTON: "Ja",
                    CANCEL_NOBUTTON: "Nein",
                    overlayErrorUnknown_TITLE: "Hinweis",
                    overlayErrorUnknown_BODY_TEXT: "Es ist ein Fehler aufgetreten. Bitte probieren Sie es sp\u00E4ter noch einmal.",
                    overlayErrorUnknown_SUGGESTION: "",
                    overlayErrorUnknown_BTN_CLOSE: "Schlie\u00DFen",
                    overlayErrorNoSky_TITLE: "Buchung nicht m\u00F6glich",
                    overlayErrorNoSky_BODY_TEXT: "Leider k\u00F6nnen Sie in Ihrem Tarif keine Sky-Pakete hinzubuchen.",
                    overlayErrorNoSky_SUGGESTION: "",
                    overlayErrorNoSky_BTN_CLOSE: "Schlie\u00DFen",
                    overlayErrorBarkermap_TITLE: "Nicht buchbarer Kanal",
                    overlayErrorBarkermap_BODY_TEXT: "Dieser Kanal ist leider nicht buchbar.",
                    overlayErrorBarkermap_SUGGESTION: "",
                    overlayErrorBarkermap_BTN_CLOSE: "Schlie\u00DFen",
                    dt_PHONE: "0800 33 01000",
                    dt_PHONE_COMMENT: "kostenlos",
                    dt_ERROR_BOOKING_CONDITION_TITLE: "Hinweis",
                    dt_ERROR_BOOKING_CONDITION: "Diese Bestellung ist leider nicht m\u00F6glich. Sie haben das gew\u00FCnschte Produkt entweder bereits gebucht, oder es fehlt ein als Voraussetzung notwendiges Produkt oder die Buchung ist aufgrund des Wechsels der TV-Plattform nicht m\u00F6glich. Bitte wenden Sie sich an unseren Kundenservice:",
                    dt_ERROR_BOOKING_CONDITION_EMAIL: "Die Bestellung ist leider nicht m\u00F6glich. Sie haben noch keine E-Mail-Adresse im Kundencenter angelegt. Bitte legen Sie eine E-Mail-Adresse unter: www.telekom.de/kundencenter an oder wenden Sie sich an unseren Kundenservice:",
                    dt_ERROR_BOOKING_CONDITION_PHONE: "Die Bestellung ist leider nicht m\u00F6glich. Sie haben noch keine Telefonnummer im Kundencenter angelegt. Bitte legen Sie eine Telefonnummer unter: www.telekom.de/kundencenter an oder wenden Sie sich an unseren Kundenservice:",
                    dt_ERROR_BOOKING_CONDITION_PENDING_ORDER: "Die Bestellung ist leider nicht m\u00F6glich. Eine vorherige Buchung konnte noch nicht abgeschlossen werden. Bitte wenden Sie sich an unseren Kundenservice:",
                    dt_ERROR_BOOKING_CONDITION_BOOKED: "Sie haben das TV-Paket bereits gebucht. Wenn Sie ein anderes TV-Paket buchen m\u00F6chten, kehren Sie zur Auswahl der TV-Pakete zur\u00FCck.",
                    sky_PHONE: "0180 111111",
                    sky_PHONE_COMMENT: "\u20AC 0,20/Anruf aus dem dt. Festnetz, max. \u20AC 0,60/Anruf aus dem Mobilfunknetz",
                    sky_COMMON_BTN_CANCEL: "Abbrechen",
                    sky_COMMON_BTN_CLOSE: "Schlie\u00DFen",
                    sky_STEP1_HEADLINE_1: "Ihre Vertragsdaten",
                    sky_STEP1_CONDITIONS: "Ihre Vertragsdaten gegen\u00FCber Sky",
                    sky_STEP1_CONDITION_1: "Telekom Vertragsdaten \u00FCbernehmen",
                    sky_STEP1_CONDITION_1_RECOMMENDED: "(empfohlen)",
                    sky_STEP1_CONDITION_2: "Vertragsdaten eingeben",
                    sky_STEP1_BTN_NEXT: "Weiter zu Schritt 2",
                    sky_STEP2_HEADLINE_1: "Ihre Sky Vertragsdaten",
                    sky_STEP2_BTN_NEXT: "Weiter zu Schritt 3",
                    sky_STEP2_BTN_BACK: "Zur\u00FCck zu Schritt 1",
                    sky_STEP2_PLHO_SALUTATION: "Anrede",
                    sky_STEP2_PLHO_FAMILYNAME: "Name",
                    sky_STEP2_PLHO_FIRSTNAME: "Vorname",
                    sky_STEP2_PLHO_STREET: "Strasse",
                    sky_STEP2_PLHO_HOUSENO: "Nr.",
                    sky_STEP2_PLHO_POSTALCODE: "PLZ",
                    sky_STEP2_PLHO_CITY: "Stadt",
                    sky_STEP2_PLHO_ADDITION: "Adresszusatz (optional)",
                    sky_STEP2_PLHO_PHONE: "Rufnummer",
                    sky_STEP2_PLHO_EMAIL: "E-Mail",
                    sky_STEP2_PLHO_DATEOFBIRTH: "Geburtsdatum",
                    sky_INPUTFIELD_PLHO_DATEOFBIRTH: "TT.MM.JJJJ",
                    sky_WARN_POSTALCODE: "Bitte geben Sie eine g\u00FCltige f\u00FCnfstellige Postleitzahl ein.",
                    sky_WARN_PHONE: "Bitte geben Sie eine g\u00FCltige Rufnummer ein.",
                    sky_WARN_EMAIL: "Bitte geben Sie eine g\u00FCltige E-Mail-Adresse ein.",
                    sky_WARN_DATEOFBIRTHE: "Bitte geben Sie Ihr Geburtsdatum in dem Format TT.MM.JJJJ ein.",
                    sky_WARN_IBAN: "Bitte geben Sie eine g\u00FCltige IBAN ein.",
                    sky_WARN_BIC: "Bitte geben Sie eine g\u00FCltige BIC ein.",
                    sky_STEP2_HINT_EMPTY_FIELDS: "Bitte f\u00FCllen Sie die markierten Felder aus.",
                    sky_STEP3_HEADLINE_1: "Zahlung per Lastschrift",
                    sky_STEP3_INFO_1: "Info Bankeinzug",
                    sky_STEP3_BTN_NEXT: "Weiter zu Schritt 4",
                    sky_STEP3_BTN_BACK: "Zur\u00FCck zu Schritt 2",
                    sky_STEP3_AUTHORIZATIONTXT_1: "Hiermit erm\u00E4chtige ich Sky, gem\u00E4\u00DF der Erkl\u00E4rung unter ",
                    sky_STEP3_AUTHORIZATIONTXT_2: "Info Bankeinzug, ",
                    sky_STEP3_AUTHORIZATIONTXT_3: "zum Einzug von Zahlungen von meinem oben angegebenen Konto.",
                    sky_STEP3_PLHO_FAMILYNAME: "Name",
                    sky_STEP3_PLHO_FIRSTNAME: "Vorname",
                    sky_STEP3_PLHO_IBAN: "IBAN",
                    sky_STEP3_PLHO_BIC: "BIC",
                    sky_STEP4_HEADLINE_1: "Sky AGB & Datenschutz",
                    sky_STEP4_INFO_1: "Sky AGB & Widerrufsrecht",
                    sky_STEP4_BTN_NEXT: "Weiter zu Schritt 5",
                    sky_STEP4_BTN_BACK: "Zur\u00FCck zu Schritt 3",
                    sky_STEP4_AUTHORIZATIONTXT_1: "Einwilligung in die Datennutzung zu Marketingzwecken & Marktforschung (Optional)",
                    sky_STEP4_AUTHORIZATIONTXT_2: "Ich akzeptiere die Sky AGB & Widerrufsrechte",
                    sky_STEP4_BTN_MOREINFOS: "Mehr Infos",
                    sky_STEP5_HEADLINE_1: "Bestell\u00FCbersicht",
                    sky_STEP5_BTN_NEXT: "Zahlungspflichtig bestellen",
                    sky_STEP5_BTN_BACK: "Zur\u00FCck zu Schritt 4",
                    sky_STEP6_HEADLINE_1: "Bestellbest\u00E4tigung",
                    sky_STEP6_BTN_NEXT: "Fertig",
                    sky_STEP6_CONFIRMHEAD: "Vielen Dank f\u00FCr Ihre Bestellung bei Sky",
                    sky_STEP6_CONFIRMTXT_1: "Als N\u00E4chstes erhalten Sie eine Bestellbest\u00E4tigung an Ihre E-Mail-Adresse:",
                    sky_STEP6_CONFIRMTXT_2: "Die Freischaltung der bestellten TV-Sender erfolgt in K\u00FCrze.",
                    sky_ABO_INFO_HEAD: "Informationen f\u00FCr Sky Abonnenten",
                    sky_ABO_INFO_TEXT: "Sie haben mindestens ein Sky Produkt gebucht. Zur Bestellung weiterer Sky Produkte oder bei Fragen zu Ihrer Bestellung wenden Sie sich bitte direkt an Sky unter der Hotlinenummer:",
                    sky_ABO_INFO_PHONE: "0180 6110000*",
                    sky_ABO_INFO_SMALLPRINT: "* (\u20AC 0,20/Anruf aus dem dt. Festnetzt, max. \u20AC 0,60/Anruf aus dem Mobilfunknetz)",
                    sky_overlayErrorUnknown_TITLE: "Hinweis",
                    sky_overlayErrorUnknown_BODY_TEXT: "Es ist ein Fehler aufgetreten. Bitte probieren Sie es sp\u00E4ter noch einmal.",
                    sky_overlayErrorUnknown_SUGGESTION: "",
                    sky_overlayErrorUnknown_BTN_CLOSE: "Schlie\u00DFen",
                },
                appUac: {
                    USERPIN_TITLE: "Benutzer-PIN \u00E4ndern",
                    USERPIN_DESCRIPTION: "Bitte \u00E4ndern Sie Ihre Benutzer-PIN durch zweimalige Eingabe der neuen PIN:",
                    USERPIN_PINS_DO_NOT_MATCH: "Die eingegebenen PINs stimmen nicht \u00FCberein. Bitte geben Sie zweimal dieselbe PIN ein.",
                    USERPINCONFIRM_TITLE: "Benutzer-PIN erfolgreich ge\u00E4ndert",
                    USERPINCONFIRM_DESCRIPTION: "Ihre neue Benutzer-PIN wurde erfolgreich eingerichtet und ist ab sofort g\u00FCltig.",
                    COMMONPIN_NEWPIN: "Neue PIN vergeben",
                    COMMONPIN_REPEATPIN: "Neue PIN wiederholen",
                    COMMONPIN_OK_BUTTON: "Best\u00E4tigen",
                    COMMONPIN_CANCEL_BUTTON: "Abbrechen",
                    COMMONCONFIRM_CLOSE_BUTTON: "Schlie\u00DFen",
                    COMMONCHECKING_PIN: "PIN wird \u00FCberpr\u00FCft...",
                    COMMONCHECKING_PIN_OK: "PIN wird \u00FCberpr\u00FCft: OK",
                    ADULTPINCONFIRM_TITLE: "Erwachsenen-PIN erfolgreich ge\u00E4ndert",
                    ADULTPINCONFIRM_DESCRIPTION: "Ihre neue Erwachsenen-PIN wurde erfolgreich eingerichtet und ist ab sofort g\u00FCltig.",
                },
                errorresource: {
                    ERROR_TITLE: "Hinweis",
                    ERROR_DESCRIPTION: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es sp\u00E4ter erneut.",
                    1: "Die eingegebene Benutzer-PIN entspricht Ihrer aktuell verwendeten Benutzer-PIN. Bitte w\u00E4hlen Sie eine andere Benutzer-PIN.",
                    2: "Die Benutzer-PIN wurde zu h\u00E4ufig ge\u00E4ndert. Eine erneute \u00C4nderung ist erst am n\u00E4chsten Tag wieder m\u00F6glich.",
                    3: "Error: Invalid_Length",
                    4: "Die eingegebene Benutzer-PIN muss sich von anderen PIN-Nummern unterscheiden. Bitte w\u00E4hlen Sie eine andere Benutzer-PIN.",
                    5: "Die vergebene Benutzer-PIN ist nicht sicher, kann aber trotzdem verwendet werden.",
                    6: "Die eingegebene Benutzer-PIN ist nicht sicher. Bitte w\u00E4hlen Sie eine andere Benutzer-PIN.",
                    UNKNOWN_ERROR: "Unbekannter Fehler.",
                }
            };
        };
        return GermanTranslationTable;
    }());
    exports.GermanTranslationTable = GermanTranslationTable;
});
//# sourceMappingURL=strings.appVod.de.js.map