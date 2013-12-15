
$(document).ready(function() {


    var vragenNiveau1 = '{"generated":"2013-12-12T14:08:55","Tabel1":[\n\
{"Id":"1","vraag":"Moet een fiets vaste werkende verlichting hebben?","a":"Ja","b":"Neen","c":"pas","correct":"b","uitleg":"Fietsers moeten tussen het vallen van de avond en het aanbreken van de dag, en in alle omstandigheden waarin het niet meer mogelijk is duidelijk te zien tot op een afstand van 200 meter, vooraan een niet verblindend wit of geel licht en achteraan een rood licht voeren. De lichten mogen los (op kledij, rugzak, ...) of vast (op de fiets) zijn. Bij helder weer mag je dus strikt genomen wel rondrijden met een fiets waarvan de vaste lichten niet werken. Je hebt in dat geval wel best losse verlichting bij. Knipperlichten zijn in Belgie toegestaan. Het rode achterlicht moet nachts, bij helder weer, zichtbaar zijn van op een afstand van 100 meter minimum.","photonr":"1"},\n\
{"Id":"2","vraag":"Wanneer moet je je fietsverlichting aanzetten?","a":"Enkel s avonds en s nachts.","b":"Telkens wanneer ik onvoldoende zichtbaar ben voor andere weggebruikers.","c":"Wanneer ik zelf onvoldoende zie.","correct":"b","uitleg":"Strikt juridisch moeten fietsers de lichten aansteken tussen het vallen van de avond en het aanbreken van de dag, en in alle omstandigheden waarin het niet meer mogelijk is duidelijk te zien tot op een afstand van ongeveer 200 meter. De straatverlichting of de vraag of je zelf nog voldoende ziet, doen er niet toe. Je moet altijd voldoende zichtbaar zijn voor andere weggebruikers.","photonr":"2"},\n\
{"Id":"3","vraag":"Rijdt de fietser op de juiste plaats?","a":"Ja","b":"Neen","c":"pas","correct":"a","uitleg":"Het blauwe verkeersbord wijst op een verplicht fietspad. Als het bord naar jou toegekeerd staat, ben je verplicht het fietspad te gebruiken, ook al ligt dat links van de baan. Deze fietser moet dus het fietspad volgen.","photonr":"3"},\n\
{"Id":"4","vraag":"Mag de fietser deze straat in?","a":"Ja","b":"Neen","c":"pas","correct":"b","uitleg":"Dit verbodsbord geldt voor alle bestuurders. Dus ook voor fietsers. Als fietser mag je een eenrichtingsstraat enkel tegen de rijrichting inrijden als dat is aangegeven met het onderbord uitgezonderd fietsers. Een foto hoort bij deze","photonr":"4"},\n\
{"Id":"5","vraag":"De fietser nadert het kruispunt. Wat moet de fietser doen?","a":"Het is een gevaarlijk kruispunt, de fietser moet gewoon extra opletten.","b":"Aan dit kruispunt moet de fietser voorrang geven aan alle bestuurders die van rechts komen.","c":"pas","correct":"b","uitleg":"De omgekeerde driehoek betekent dat je voorrang moet verlenen. Verlenen aan alle bestuurders op de rijbaan, of ze nu van links of van rechts komen. Je moet enkel stoppen als dat nodig is.","photonr":"5"}]}';
    var vragenNiveau2 = '{"generated":"2013-12-12T11:36:40","Tabel1":[\n\
{"Id":"1","vraag":"Wat moet de fietser doen bij dit verkeersbord? De fietser","a":".. moet voorrang verlenen aan wie van rechts komt.","b":"... moet voorrang verlenen aan wie van links of van rechts komt.","c":"... heeft voorrang en mag gewoon doorfietsen.","correct":"a","photonr":"1","uitleg":"Het ronde verkeersbord verbiedt de toegang aan alle bestuurders, dus ook aan fietsers. Alleen voetgangers mogen hier in. Enkel met de fiets aan de hand mag je er dus in, omdat je dan als voetganger wordt beschouwd."},\n\
{"Id":"2","vraag":"De fietser wil deze straat in. Wat moet ze doen? De fietser wil deze straat in. Wat moet ze doen?","a":"Ze mag deze straat al fietsend in.","b":"Ze moet afstappen en mag enkel te voet verder.","c":"pas","correct":"a","photonr":"2","uitleg":"Alle voorrangsregels gelden evenzeer voor fietsers als voor automobilisten. Fietsers hebben zeker niet altijd voorrang. Op dit kruispunt staan geen borden of markeringen; hier geldt dus de voorrang-aan-rechts-regel. De automobilist heeft voorrang op de fietser."},\n\
{"Id":"3","vraag":"Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil rechtdoor, de autobestuurder ook. Wie moet wie voorrang verlenen?","a":"De fietser moet de automobilist voorrang geven.","b":"De automobilist moet de fietser voor laten.","c":"pas","correct":"a","photonr":"3","uitleg":"Alle voorrangsregels gelden evenzeer voor fietsers als automobilist voor automobilisten. Fietsers hebben zeker niet altijd voorrang. Aangezien de automobilist rechtdoor rijdt, heeft die voorrang op de fietser. De fietser voert een manoeuvre uit en moet daarom voorrang verlenen."},\n\
{"Id":"4","vraag":"De tram komt van links, de fietser wil naar links: wie heeft voorrang?","a":"De fietser","b":"De tram","c":"pas","correct":"a","photonr":"4","uitleg":"De tram heeft altijd voorrang tenzij het verkeer geregeld wordt door lichten of bevoegde personen."},\n\
{"Id":"5","vraag":"Mag de automobilist hier geparkeerd staan?","a":"Ja, hier wel.","b":"Neen, want hij mag niet op een fietspad parkeren.","c":"pas","correct":"a","photonr":"5","uitleg":"Deze strook is geen fietspad, maar een fietssuggestiestrook, ook al is de rode kleur verwarrend. Een fietspad is altijd aangeduid met 2 witte evenwijdige onderbroken strepen of met een van deze verkeersborden. Wanneer geen van deze twee zaken te zien zijn, is de strook geen fietspad, maar een fietssuggestiestrook. Autos mogen er dan op rijden, stilstaan of parkeren. een foto hoort bij deze(blauw borden)"}]}';
    var vragenNiveau3 = '{"generated":"2013-12-12T11:36:48","Tabel1":[\n\
{"Id":"1","vraag":"De fietser rijdt hier rechtdoor. Wie heeft voorrang?","a":"De fietser","b":"De automobilist die van rechts komt.","c":"pas","correct":"a","photonr":"1","uitleg":"Dit is een doorlopend fietspad (te herkennen aan de 2 parallelle onderbroken witte strepen). Bestuurders die een verplicht fietspad dwarsen, moeten voorrang geven aan de fietsers die het fietspad volgen. De automobilist die van rechts komt, moet de fietser dus voorlaten. Let op! Weinig automobilisten weten dit. Wees voorzichtig en probeer steeds oogcontact met de bestuurder te maken als je een zijstraat nadert."},\n\
{"Id":"2","vraag":"De fietser moet hier de baan oversteken om links op het tweerichtingsfietspad te rijden. Wie heeft voorrang?","a":"De fietser.","b":"De automobilist.","c":"pas","correct":"a","photonr":"2","uitleg":"Dit is een oversteekplaats voor fietsers (te herkennen aan de 2 parallelle lijnen met witte vierkanten of parallellogrammen op de weg). Aan een fietsoversteekplaats hebben fietsers geen voorrang. Dit in tegenstelling tot een zebrapad waar een voetganger wel voorrang heeft. De fietser moet de automobilist dus voorrang geven. Eens zij op de oversteekplaats zijn, mogen autobestuurders fietsers natuurlijk niet hinderen."},\n\
{"Id":"3","vraag":"De fietser denkt dat het veiliger is om over het zebrapad te fietsen. Wanneer heeft ze voorrang?","a":"Altijd.","b":"Alleen als ze afstapt en te voet oversteekt.","c":"pas","correct":"b","photonr":"3","uitleg":"Alleen voetgangers hebben voorrang op een zebrapad. Fietst men over een zebrapad, dan heeft men geen voorrang. Bovendien dreigt men ook nog eens de voetgangers die zich er p bevinden in gevaar te brengen, en dat is een overtreding van de wegcode. Fietsers hebben dus alleen voorrang op een zebrapad als ze oversteken met de fiets aan de hand."},\n\
{"Id":"4","vraag":"Wie heeft voorrang?","a":"De fietser","b":"De automobilist","c":"pas","correct":"a","photonr":"4","uitleg":"Deze strook is geen fietspad, maar een fietssuggestiestrook, ook al is de rode kleur verwarrend. Een fietspad is altijd aangeduid met 2 evenwijdige onderbroken witte lijnen of het blauwe, ronde bord. Wanneer een van deze twee zaken niet te zien zijn, dan is de strook geen fietspad maar een fietssuggestiestrook. Een fietser heeft enkel voorrang op een echt fietspad. Hier dus niet, hier geldt de gewone voorrang-aan-rechts-regel."},\n\
{"Id":"5","vraag":"Deze fietser ","a":"U moet links op het voorziene fietspad rijden.","b":"U moet rechts op de rijbaan rijden.","c":"U mag kiezen waar zij fietst.","correct":"a","photonr":"5","uitleg":"Deze fietser moet rechts op de rijbaan fietsen, want er is geen fietspad in de rijrichting van de fietser. Een fietspad enkel aangeduid met de typische evenwijdige witte onderbroken lijnen mag je nooit links op de rijbaan volgen. Je moet steeds op het rechtsgelegen fietspad of rechts op de rijbaan rijden, tenzij borden het anders aanduiden. Dit fietspad is er dus alleen voor de fietsers die in de andere richting fietsen."}]}';
    var vragenNiveau4 = '{"generated":"2013-12-12T11:36:55","Tabel1":[\n\
{"Id":"1","vraag":"De fietser wil links afslaan. Mag ze hier in de linkse rijstrook voorsorteren?","a":"Ja.","b":"Neen.","c":"pas","correct":"b","photonr":"1","uitleg":"In deze straat is er geen fietspad. De fietser mag, net als andere bestuurders, voorsorteren in de linkerrijstrook. Ook als er een verplicht fietspad is, mag de fietser dat verlaten om voor te sorteren. Vergeet niet om de beweging tijdig aan te kondigen."},\n\
{"Id":"2","vraag":"Deze fietser voelt zich onveilig op de rijbaan tussen de tramsporen. Mag ze op het voetpad fietsen?","a":"Ja, als dat veiliger is voor haar.","b":"Neen.","c":"pas","correct":"a","photonr":"2","uitleg":"Dit is een zeer oncomfortabele situatie voor fietsers. Het is begrijpelijk dat sommigen liever op het voetpad fietsen, maar eigenlijk mag dat niet. Binnen de bebouwde kom is fietsen op het voetpad enkel toegestaan aan kinderen jonger dan 9 jaar die rijden op een fiets met een wieldiameter van maximum 50cm. Vind je het als fietser omwille van druk verkeer, tramsporen of kasseien niet veilig om op de rijbaan te fietsen, dan ga je te voet op het voetpad verder. Zo breng je anderen niet in gevaar. Buiten de bebouwde kom is het wel toegestaan op het voetpad te fietsen als er geen fietspad is. Het is begrijpelijk dat sommigen liever op het voetpad fietsen, maar eigenlijk mag dat niet. Binnen de bebouwde kom is fietsen op het voetpad enkel toegestaan aan kinderen jonger dan 9 jaar die rijden op een fiets met een wieldiameter van maximum 50cm. Vind je het als fietser omwille van druk verkeer, tramsporen of kasseien niet veilig om op de rijbaan te fietsen, dan ga je te voet op het voetpad verder. Zo breng je anderen niet in gevaar."},\n\
{"Id":"3","vraag":"Deze twee fietsers fietsen naast elkaar in een richtingsstraat binnen de bebouwde kom. Mogen zij naast elkaar blijven fietsen, ook al kan de auto hen niet inhalen?","a":"Ja.","b":"Neen.","c":"pas","correct":"a","photonr":"3","uitleg":"Binnen de bebouwde kom mag je met maximum 2 naast elkaar fietsen op voorwaarde dat tegenliggers door kunnen. In deze eenrichtingsstraat zijn er geen autos als tegenligger. Als er een achteropkomende auto nadert, ben je niet verplicht achter elkaar te gaan rijden. Het is natuurlijk hoffelijker om dat wel te doen. Automobilisten die een fietser willen inhalen, mogen dat enkel doen als zij 1 meter zijdelingse afstand van de fietser kunnen bewaren."},\n\
{"Id":"4","vraag":"Mogen fietsers buiten de bebouwde kom met twee naast elkaar rijden? Mogen fietsers buiten de bebouwde kom met twee naast elkaar rijden?","a":"Ja, behalve wanneer het kruisen met een tegenligger onmogelijk is.","b":"Ja, behalve wanneer het kruisen met een tegenligger onmogelijk is of wanneer er achteropkomend verkeer is.","c":"pas","correct":"a","photonr":"4","uitleg":"Buiten de bebouwde kom mag je met maximum 2 naast elkaar fietsen op voorwaarde dat tegenliggers door kunnen. Als er een achteropkomende auto nadert, ben je wel verplicht achter elkaar te gaan rijden. (In tegenstelling tot binnen de bebouwde kom, waar je dat niet verplicht bent.) Automobilisten die een fietser willen inhalen, mogen dat enkel doen als zij 1 meter zijdelingse afstand van de fietser kunnen bewaren."},\n\
{"Id":"5","vraag":"De vrachtwagen stond al aan de lichten te wachten, toen de fietser kwam aangefietst. De fietser wil rechtdoor. Staat zij daar veilig?","a":"Ja, ze staat zeker zichtbaar voor de chauffeur.","b":"Neen, ze is wellicht niet zichtbaar voor de vrachtwagenchauffeur.","c":"pas","correct":"b","photonr":"5","uitleg":"Vermijd deze situatie. Als je komt aangereden terwijl er voor je al een vrachtwagen staat te wachten, blijf dan rechts achter de vrachtwagen. Je weet immers niet of de vrachtwagen is uitgerust met een dodehoekcamera of spiegel, noch of die goed is afgesteld. Naast de cabine wachten, kan je fataal worden als jij rechtdoor wil en de vrachtwagen rechts afslaat. Pas op: dit geldt ook voor vrachtwagens die naar links afslaan, omdat zij eerst altijd even naar rechts uitwijken voordat ze de bocht nemen. Ga daarom steeds op een plaats staan waar je de chauffeur zelf kan zien, door de spiegels of door de ruiten. Alleen als jij de chauffeur kan zien, weet je zeker dat hij je ook kan zien. Vermijd deze situatie. Als je komt aangereden terwijl er voor je al een vrachtwagen staat te wachten, blijf dan rechts achter de vrachtwagen. Je weet immers niet of de vrachtwagen is uitgerust met een dodehoekcamera of spiegel, noch of die goed is afgesteld. Naast de cabine wachten, kan je fataal worden als jij rechtdoor wil en de vrachtwagen rechts afslaat. Pas op: dit geldt ook voor vrachtwagens die naar links afslaan, omdat zij eerst altijd even naar rechts uitwijken voordat ze de bocht nemen. Ga daarom steeds op een plaats staan waar je de chauffeur zelf kan zien, door de spiegels of door de ruiten. Alleen als jij de chauffeur kan zien, weet je zeker dat hij je ook kan zien."}]}';
    var vragenNiveau5 = '';
    var vragenNiveau6 = '';
    var vragenNiveau7 = '';
    var vragenNiveau8 = '';
    var niveau = 1;
    var selectedNiveau = 1;
    var niveauTimer = 1500;
    if (localStorage.getItem('niveau') !== null) {
        niveau = localStorage.getItem('niveau');

        if (niveau >= 1 && niveau <= 4) {
            niveauTimer = 1500;
            $('#progressbar').attr('max', niveauTimer);

        }
        if (niveau >= 5 && niveau <= 7) {
            niveauTimer = 1200;
            $('#progressbar').attr('max', niveauTimer);
        }
        if (niveau >= 8 && niveau <= 10) {
            niveauTimer = 1000;
            $('#progressbar').attr('max', niveauTimer);
        }
    }
    var vragenLijst = JSON.parse(vragenNiveau1);
    if (localStorage.getItem('selectedNiveau') !== null) {
        selectedNiveau = localStorage.getItem('selectedNiveau');
        $("#leveltop-text").html("Niveau " + selectedNiveau);
        switch (selectedNiveau)
        {
            case "1":
                vragenLijst = JSON.parse(vragenNiveau1);
                break;
            case "2":
                vragenLijst = JSON.parse(vragenNiveau2);
                break;
            case "3":
                vragenLijst = JSON.parse(vragenNiveau3);
                break;
            case "4":
                vragenLijst = JSON.parse(vragenNiveau4);
                break;
            case "5":
                //vragenLijst = JSON.parse(vragenNiveau5);
                break;
            case "6":
                //vragenLijst = JSON.parse(vragenNiveau6);
                break;
            case "7":
                // vragenLijst = JSON.parse(vragenNiveau7);
                break;
            case "8":
                // vragenLijst = JSON.parse(vragenNiveau8);
                break;
            default:
                vragenLijst = JSON.parse(vragenNiveau1);
        }
    }
    for (var lvl = 1; lvl < niveau; lvl++) {
        $("#box" + lvl).removeClass("boxlock");
        $("#box" + lvl).addClass("boxunlock");
        $("#box" + lvl).css("background-image", "url('img/" + lvl + "/" + lvl + ".jpg')");
    }
    $("#box" + niveau).css("background-color", "green");
    $("#Terug").click(function() {
        window.location.href = "index.html";
    });


    function selected(nummer) {
        if (!(nummer > niveau)) {
            localStorage.setItem("selectedNiveau", "" + nummer + "");
            $("#errorContainer").remove();
            $("body").append('<div id="errorContainer"><div id="error" style class="clearfix"><h2>Klaar!</h2></div><div id="css3button">Go!</div></div>');

            $("#css3button").click(function() {
                $("#errorContainer").remove();
                window.location.href = "vragen.html";
            });
        }
    }
    $("#box1").click(function() {
        selected(1);
    });
    $("#box2").click(function() {
        selected(2);
    });
    $("#box3").click(function() {
        selected(3);
    });
    $("#box4").click(function() {
        selected(4);
    });
    $("#box5").click(function() {
        selected(5);
    });
    $("#box6").click(function() {
        selected(6);
    });
    $("#box7").click(function() {
        selected(7);
    });
    $("#box8").click(function() {
        selected(8);
    });
    $("#box9").click(function() {
        selected(9);
    });
    $("#box10").click(function() {
        selected(10);
    });

// de volgende dient voor geneleren van een willekeurige vraag 


    var vragenArray = [];

    function shuffle(array) {
        var currentIndex = array.length
                , temporaryValue
                , randomIndex
                ;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    vragenArray = ["0", "1", "2", "3", "4"];
    shuffle(vragenArray);
// de volgende dient om inhoud van vragen pagina invullen en interactief maken
    var huidigeVraag = 0;
    var laatsteVraag = -1;

    $("#vraag-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].vraag);
    $("#a-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].a);
    $("#b-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].b);
    $("#c-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].c);
    $("#foto").attr("src", "img/" + selectedNiveau + "/" + vragenLijst['Tabel1'][vragenArray[huidigeVraag]].photonr + ".jpg");

    var antwoorden = [];
    var huidigeAntwoord = '';

    $("#a").click(function() {
        huidigeAntwoord = 'a';
//        alert(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct +'===='+huidigeAntwoord );

        if (vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct !== huidigeAntwoord) {
            $("#errorContainer").remove();
            $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
            $("#error").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].uitleg);
            $("#css3button").click(function() {
                $("#errorContainer").remove();
                var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
                antwoorden.push(VEA);
                huidigeVraag++;
                volgende();

            });
        } else {
            var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
            antwoorden.push(VEA);
            huidigeVraag++;
            volgende();
        }


    });
    $("#b").click(function() {
        huidigeAntwoord = 'b';
//        alert(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct +'===='+huidigeAntwoord );
        if (vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct !== huidigeAntwoord) {
            $("#errorContainer").remove();
            $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
            $("#error").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].uitleg);
            $("#css3button").click(function() {
                $("#errorContainer").remove();
                var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
                antwoorden.push(VEA);
                huidigeVraag++;
                volgende();

            });
        } else {
            var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
            antwoorden.push(VEA);
            huidigeVraag++;
            volgende();
        }


    });
    $("#c").click(function() {
        huidigeAntwoord = 'c';

        if (vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct !== huidigeAntwoord) {
            $("#errorContainer").remove();
            $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
            $("#error").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].uitleg);
            $("#css3button").click(function() {
                $("#errorContainer").remove();
                var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
                antwoorden.push(VEA);
                huidigeVraag++;
                volgende();

            });
        } else {
            var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
            antwoorden.push(VEA);
            huidigeVraag++;
            volgende();
        }

    });
    var sec = 1500;
    var timer;
    var timeOut = false;
    if ($("pagina").attr("value") === "vragen") {
        timer = setInterval(function() {
            if (sec <= 0) {
                sec = niveauTimer;
                timeOut = true;
                huidigeAntwoord = 'null';
                var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
                antwoorden.push(VEA);
                volgende();
            } else {
                timeOut = false;
                $("#progressbar").attr("value", "" + (sec--) + "");
            }

        }, 30);
    }

    function volgende() {
        sec = niveauTimer;
        if (huidigeVraag <= 4) {
            $("#vraag-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].vraag);
            $("#a-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].a);
            $("#b-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].b);
            $("#c-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].c);
            $("#vraagtop-text").html("Vraag " + (huidigeVraag + 1) + " / 5");
            $("#foto").attr("src", "img/" + selectedNiveau + "/" + vragenLijst['Tabel1'][vragenArray[huidigeVraag]].photonr + ".jpg");
        }
        if (huidigeVraag > 4) {

            clearInterval(timer);
//            alert(JSON.stringify(antwoorden));
            localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
            $("#errorContainer").remove();
            $("#Foto-div").remove();
            $("#progress").remove();
            $("#vraag").remove();
            $("#antwoorden").remove();
            var antwoordenWraper = " <div id='wrapper' class='clearfix'><div id='scroller' class='clearfix'></div></div>";
            $("#screen").append(antwoordenWraper);
            var vragenTeller = 1;
            var correctAntwordenTeller = 0;
            var antwordedDiv = '';
            var teller = 0;
            for (var antwoord in antwoorden) {
//                alert(JSON.stringify(antwoorden[teller].antwoord+'===='+ vragenLijst["Tabel1"][vragenArray[antwoord]].correct));
//teller++;
                //$("#vraag"+vragenTeller+"").css("background-image","url('img/"+vragenLijst["Tabel1"][antwoorden[antwoord].vraagid-1].photonr+".jpg'");
                if (
                        vragenLijst["Tabel1"][vragenArray[antwoord]].correct
                        !== antwoorden[antwoord].antwoord) {
                    antwordedDiv += "<div id='vraag" + vragenTeller + "' class='clearfix , boxlock  ' \n\
                                   style='background-image: url(\"img/" + selectedNiveau + "/" + vragenLijst["Tabel1"][vragenArray[antwoord]].photonr + ".jpg\");\n\
                                   background-size: auto 100%  ;\n\
                                   background-repeat:no-repeat;\n\
                                   background-position:center; \n\
                                   -moz-box-shadow: 0px 0px 26px #fc0303;\n\
                                   -webkit-box-shadow: 0px 0px 26px #fc0303;\n\
                                   box-shadow: 0px 0px 26px #fc0303;'>\n\
                                    <span>Vraag " + vragenTeller + "</span>\n\
                                 </div>";

//                    antwoordenText += "<h3>Vraag " + vragenTeller + "<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/" + vragenLijst["Tabel1"][antwoorden[antwoord].vraagid-1].photonr + ".jpg'></img></div><br/></h3>" + vragenLijst["Tabel1"][ antwoorden[antwoord].vraagid].uitleg + "<br/>";
                    $("#errorContainer").remove();
                    var antwoordenText = "<h3>Vraag " + vragenTeller + "<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/" + vragenLijst["Tabel1"][vragenArray[antwoord]].photonr + ".jpg'></img></div><br/></h3>" + vragenLijst["Tabel1"][vragenArray[antwoord]].uitleg + "<br/>";
                    $("#vraag" + vragenTeller + "").click(function() {
                        $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');

                        $("#error").html(antwoordenText);
                    });
                    $("#css3button").click(function() {
                        $("#errorContainer").remove();
                    });
                } else {
                    antwordedDiv += "<div id='vraag" + vragenTeller + "' class='clearfix , boxlock  ' \n\
                                   style='background-image: url(\"img/" + selectedNiveau + "/" + vragenLijst["Tabel1"][vragenArray[antwoord]].photonr + ".jpg\");\n\
                                   background-size: auto 100%  ;\n\
                                   background-repeat:no-repeat;\n\
                                   background-position:center; \n\
                                   -moz-box-shadow: 0px 0px 26px #03fc03; \n\
                                    -webkit-box-shadow: 0px 0px 26px #03fc03; \n\
                                     box-shadow: 0px 0px 26px #03fc03;'>\n\
                                   <span>Vraag " + vragenTeller + "</span>\n\
                                 </div>";
                    $("#errorContainer").remove();
                    var antwoordenText = "<h3>Vraag " + vragenTeller + "<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/" + vragenLijst["Tabel1"][vragenArray[antwoord]].photonr + ".jpg'></img></div><br/></h3>" + vragenLijst["Tabel1"][vragenArray[antwoord]].uitleg + "<br/>";
                    $("#vraag" + vragenTeller + "").click(function() {
                        $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');

                        $("#error").html(antwoordenText);
                    });
                    $("#css3button").click(function() {
                        $("#errorContainer").remove();
                    });
                    correctAntwordenTeller++;
                }
                vragenTeller++;
//                alert(parseInt(niveau) + '=========' + selectedNiveau);

                if (correctAntwordenTeller > 3 && (parseInt(niveau) == selectedNiveau))
                {
                    niveau = parseInt(niveau) + 1;
                    localStorage.setItem("niveau", "" + niveau + "");
                }
            }
            $("#error").html(antwoordenText);

            $("#scroller").append(antwordedDiv);
            var myScroll;
            var myScroll2;
            var myScroll3;
            function load() {
                myScroll = new iScroll('wrapper');
                myScroll2 = new iScroll('error');
                //myScroll3 = new iScroll('section'); 
                $("#section").click();
                $("#section").click();
                $("#vertuitleg").click();
            }
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(loaded, 200);
            }, false);

            document.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);




            var ant = [];
            var i = 0;
            for (i; i < 5; i++) {
                ant[i] = " \n\
                            <h3>Vraag " + (i + 1) + "<br/>\n\
                            <div id='Foto-div' class='clearfix'> \n\
                            <img id='fotoAnt' class='image' src='img/" +
                        selectedNiveau + "/" + vragenLijst["Tabel1"][antwoorden[i].vraagid - 1].photonr +
                        ".jpg'></img></div><br/></h3>\n\
                             <div id='accordion'class='accordion vertical'>\n\
                            <section id='vertabout'>\n\
                            <h2><a href='#vertabout'>De vraag was?</a></h2>\n\
                            <p>" +
                        vragenLijst["Tabel1"][ antwoorden[i].vraagid - 1].vraag +
                        " </p></section>\n\
                            <section id='vertuitleg'>\n\
                            <h2><a href='#vertuitleg'>Uitleg</a></h2>\n\
                            <p>" +
                        vragenLijst["Tabel1"][ antwoorden[i].vraagid - 1].uitleg +
                        " </p></section>\n\\n\
                            </div>";
                $("#vraag" + (i + 1) + "").attr("data-vraag", i);
                $("#vraag" + (i + 1) + "").click(function() {
                    $("body").append('<div id="errorContainer">\n\
                                        <div id="error" class="clearfix">\n\
                                          </div>   <div id="css3button">OK</div></div>\n\
                                        \n\
                                        </div>');



                    $("#error").html('' +
                            ant[$(this).data('vraag')] +
                            ' ');
                    $.ajax({
                        url: "iscroll.js",
                        dataType: "script",
                        success: load()
                    });


                    $("#css3button").click(function() {
                        $("#errorContainer").remove();
                    });
                });
            }
            $("#ac").click(function() {
                $("#ac").hide('slow');
            });
            $(".vertical").click(function() {
                $.ajax({
                    url: "iscroll.js",
                    dataType: "script",
                    success: load()
                });
            });
            $.ajax({
                url: "iscroll.js",
                dataType: "script",
                success: load()
            });


//            $("#css3button").click(function() {
//                if(correctAntwordenTeller>3 && (parseInt(niveau)== selectedNiveau)){
//                    niveau=parseInt(niveau)+1; 
//                    localStorage.setItem("niveau",""+niveau+"");
//                }  
//                window.location.href = "home.html";
//                $("#errorContainer").remove();
//            });
        }



    }


//    $.each(vragenArray , function(index, value){
//     console.log(index + ':' + value);
//});
});
