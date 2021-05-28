# src-de-telekom-tv-core

Dieses Projekt enthält den Code für die Zugriffe auf das NGTV-Core Backend und auf die STB-Ressourcen (Zosa).

Folgende Haupt-Klassen sind vorhanden:

* ServiceClient - *kapselt die Rest-Zugriffe*
* ServiceClientCache - *implementiert das Caching und setzt auf dem ServiceClient auf*
* ServiceClientAuthentication - *implementiert die Authentifizierung und setzt auf dem ServiceClientCache auf*
* ApplicationClient - *implementiert die Logik/Konvertierung für das UI und setzt auf dem ServiceClientAuthentication auf*