

Szerver oldal
Itt állíts be egy tesztszervert, ami szép JSON adatokat küld a kliensnek. A lépések mondjuk lehetnek ezek is:
NPM project beállítása, package.json generálása.
json-server telepítése.
data.json fájl létrehozása és feltöltése dummy adatokkal (valami kitalált adat, lényeg hogy minél sokfélébb legyen a teszteléshez).
json-server indítása és tesztelése egyszerű böngészőben megnyitással, hogy mennek-e a végpontok?
Kliens oldal
HTML struktúra menüvel, lábléccel, hogy nézzen ki valahogy.
Egy táblázat az adatoknak, én üresen hagynám a <tbody></tbody> elemet, ezt majd a js kitölti a kapott adatokból.
Függvény, ami egy tömb alapján képes kitölteni a táblázatot adatsorokkal. Itt érdemes lehet a document.createElement és .appendChild metódusokat használni.
Fetch kérés indítása a json-server felé.
A kapott válasz tömbjét kéne átadni a függvénynek, ami a táblázatot generálja.
Ha minden oké, akkor szépen meg fognak jelenni az adatok a táblázatban.
Sok sikert!