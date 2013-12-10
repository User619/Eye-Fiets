 
 $(document).ready(function() {
   
   
    var vragenNiveau1 = '{"generated":"2013-12-10T03:50:08","Tabel1":[{"Id":"1","vraag":"Moet een fiets vaste werkende verlichting hebben?","a":"Ja","b":"Neen","c":"pas","correct":"b","uitleg":"Fietsers moeten tussen het vallen van de avond en het aanbreken van de dag, en in alle omstandigheden waarin het niet meer mogelijk is duidelijk te zien tot op een afstand van 200 meter, vooraan een niet verblindend wit of geel licht en achteraan een rood licht voeren. De lichten mogen los (op kledij, rugzak, …) of vast (op de fiets) zijn. Bij helder weer mag je dus strikt genomen wel rondrijden met een fiets waarvan de vaste lichten niet werken. Je hebt in dat geval wel best losse verlichting bij. Knipperlichten zijn in België toegestaan. Het rode achterlicht moet ‘s nachts, bij helder weer, zichtbaar zijn van op een afstand van 100 meter minimum.","photonr":"1"},{"Id":"2","vraag":"Wanneer moet je je fietsverlichting aanzetten?","a":"Enkel ’s avonds en ‘s nachts.","b":"Telkens wanneer ik onvoldoende zichtbaar ben voor andere weggebruikers.","c":"Wanneer ik zelf onvoldoende zie.","correct":"b","uitleg":"Strikt juridisch moeten fietsers de lichten aansteken tussen het vallen van de avond en het aanbreken van de dag, en in alle omstandigheden waarin het niet meer mogelijk is duidelijk te zien tot op een afstand van ongeveer 200 meter. De straatverlichting of de vraag of je zelf nog voldoende ziet, doen er niet toe. Je moet altijd voldoende zichtbaar zijn voor andere weggebruikers.","photonr":"2"},{"Id":"3","vraag":"Rijdt de fietser op de juiste plaats?","a":"Ja","b":"Neen","c":"pas","correct":"a","uitleg":"Het blauwe verkeersbord wijst op een verplicht fietspad. Als het bord naar jou toegekeerd staat, ben je verplicht het fietspad te gebruiken, ook al ligt dat links van de baan. Deze fietser moet dus het fietspad volgen.","photonr":"3"},{"Id":"4","vraag":"Mag de fietser deze straat in?","a":"Ja","b":"Neen","c":"pas","correct":"b","uitleg":"Dit verbodsbord geldt voor alle bestuurders. Dus ook voor fietsers. Als fietser mag je een éénrichtingsstraat enkel tegen de rijrichting inrijden als dat is aangegeven met het onderbord “uitgezonderd fietsers”. Een foto hoort bij deze","photonr":"4"},{"Id":"5","vraag":"De fietser nadert het kruispunt. Wat moet de fietser doen?","a":"Het is een gevaarlijk kruispunt, de fietser moet gewoon extra opletten.","b":"Aan dit kruispunt moet de fietser voorrang geven aan alle bestuurders die van rechts komen.","c":"pas","correct":"b","uitleg":"De omgekeerde driehoek betekent dat je voorrang moet verlenen. Verlenen aan alle bestuurders op de rijbaan, of ze nu van links of van rechts komen. Je moet enkel stoppen als dat nodig is.","photonr":"5"},{"Id":"6","vraag":"Wat moet de fietser doen bij dit verkeersbord? De fietser …","a":".. moet voorrang verlenen aan wie van rechts komt.","b":"... moet voorrang verlenen aan wie van links of van rechts komt.","c":"... heeft voorrang en mag gewoon doorfietsen.","correct":"a","uitleg":"Het ronde verkeersbord verbiedt de toegang aan alle bestuurders, dus ook aan fietsers. Alleen voetgangers mogen hier in. Enkel met de fiets aan de hand mag je er dus in, omdat je dan als voetganger wordt beschouwd.","photonr":"6"},{"Id":"7","vraag":"De fietser wil deze straat in. Wat moet ze doen? De fietser wil deze straat in. Wat moet ze doen?","a":"Ze mag deze straat al fietsend in.","b":"Ze moet afstappen en mag enkel te voet verder.","c":"pas","correct":"a","uitleg":"Alle voorrangsregels gelden evenzeer voor fietsers als voor automobilisten. Fietsers hebben zeker niet altijd voorrang. Op dit kruispunt staan geen borden of markeringen; hier geldt dus de voorrang-aan-rechts-regel. De automobilist heeft voorrang op de fietser.","photonr":"7"},{"Id":"8","vraag":"Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil linksaf en de automobilist wil rechtdoor. Wie moet wie voorrang verlenen? Deze fietser wil rechtdoor, de autobestuurder ook. Wie moet wie voorrang verlenen?","a":"De fietser moet de automobilist voorrang geven.","b":"De automobilist moet de fietser voor laten.","c":"pas","correct":"a","uitleg":"Alle voorrangsregels gelden evenzeer voor fietsers als automobilist voor automobilisten. Fietsers hebben zeker niet altijd voorrang. Aangezien de automobilist rechtdoor rijdt, heeft die voorrang op de fietser. De fietser voert een manoeuvre uit en moet daarom voorrang verlenen.","photonr":"8"},{"Id":"9","vraag":"De tram komt van links, de fietser wil naar links: wie heeft voorrang?","a":"De fietser","b":"De tram","c":"pas","correct":"a","uitleg":"De tram heeft altijd voorrang tenzij het verkeer geregeld wordt door lichten of bevoegde personen.","photonr":"9"},{"Id":"10","vraag":"Mag de automobilist hier geparkeerd staan?","a":"Ja, hier wel.","b":"Neen, want hij mag niet op een fietspad parkeren.","c":"pas","correct":"a","uitleg":"Deze strook is geen fietspad, maar een fietssuggestiestrook, ook al is de rode kleur verwarrend. Een fietspad is altijd aangeduid met 2 witte evenwijdige onderbroken strepen of met één van deze verkeersborden. Wanneer geen van deze twee zaken te zien zijn, is de strook geen fietspad, maar een fietssuggestiestrook. Auto’s mogen er dan op rijden, stilstaan of parkeren. een foto hoort bij deze(blauw borden)","photonr":"10"},{"Id":"11","vraag":"De fietser rijdt hier rechtdoor. Wie heeft voorrang?","a":"De fietser","b":"De automobilist die van rechts komt.","c":"pas","correct":"a","uitleg":"Dit is een doorlopend fietspad (te herkennen aan de 2 parallelle onderbroken witte strepen). Bestuurders die een verplicht fietspad dwarsen, moeten voorrang geven aan de fietsers die het fietspad volgen. De automobilist die van rechts komt, moet de fietser dus voorlaten. Let op! Weinig automobilisten weten dit. Wees voorzichtig en probeer steeds oogcontact met de bestuurder te maken als je een zijstraat nadert.","photonr":"11"},{"Id":"12","vraag":"De fietser moet hier de baan oversteken om links op het tweerichtingsfietspad te rijden. Wie heeft voorrang?","a":"De fietser.","b":"De automobilist.","c":"pas","correct":"a","uitleg":"Dit is een oversteekplaats voor fietsers (te herkennen aan de 2 parallelle lijnen met witte vierkanten of parallellogrammen op de weg). Aan een fietsoversteekplaats hebben fietsers geen voorrang. Dit in tegenstelling tot een zebrapad waar een voetganger wel voorrang heeft. De fietser moet de automobilist dus voorrang geven. Eens zij op de oversteekplaats zijn, mogen autobestuurders fietsers natuurlijk niet hinderen.","photonr":"12"},{"Id":"13","vraag":"De fietser denkt dat het veiliger is om over het zebrapad te fietsen. Wanneer heeft ze voorrang?","a":"Altijd.","b":"Alleen als ze afstapt en te voet oversteekt.","c":"pas","correct":"b","uitleg":"Alleen voetgangers hebben voorrang op een zebrapad. Fietst men over een zebrapad, dan heeft men geen voorrang. Bovendien dreigt men ook nog eens de voetgangers die zich er p bevinden in gevaar te brengen, en dat is een overtreding van de wegcode. Fietsers hebben dus alleen voorrang op een zebrapad als ze oversteken met de fiets aan de hand.","photonr":"13"},{"Id":"14","vraag":"Wie heeft voorrang?","a":"De fietser","b":"De automobilist","c":"pas","correct":"a","uitleg":"Deze strook is geen fietspad, maar een fietssuggestiestrook, ook al is de rode kleur verwarrend. Een fietspad is altijd aangeduid met 2 evenwijdige onderbroken witte lijnen of het blauwe, ronde bord. Wanneer een van deze twee zaken niet te zien zijn, dan is de strook geen fietspad maar een fietssuggestiestrook. Een fietser heeft enkel voorrang op een echt fietspad. Hier dus niet, hier geldt de gewone voorrang-aan-rechts-regel.","photonr":"14"},{"Id":"15","vraag":"Deze fietser …","a":"… moet links op het voorziene fietspad rijden.","b":"… moet rechts op de rijbaan rijden.","c":"… mag kiezen waar zij fietst.","correct":"a","uitleg":"Deze fietser moet rechts op de rijbaan fietsen, want er is geen fietspad in de rijrichting van de fietser. Een fietspad enkel aangeduid met de typische evenwijdige witte onderbroken lijnen mag je nooit links op de rijbaan volgen. Je moet steeds op het rechtsgelegen fietspad of rechts op de rijbaan rijden, tenzij borden het anders aanduiden. Dit fietspad is er dus alleen voor de fietsers die in de andere richting fietsen.","photonr":"15"},{"Id":"16","vraag":"De fietser wil links afslaan. Mag ze hier in de linkse rijstrook voorsorteren?","a":"Ja.","b":"Neen.","c":"pas","correct":"b","uitleg":"In deze straat is er geen fietspad. De fietser mag, net als andere bestuurders, voorsorteren in de linkerrijstrook. Ook als er een verplicht fietspad is, mag de fietser dat verlaten om voor te sorteren. Vergeet niet om de beweging tijdig aan te kondigen.","photonr":"16"},{"Id":"17","vraag":"Deze fietser voelt zich onveilig op de rijbaan tussen de tramsporen. Mag ze op het voetpad fietsen?","a":"Ja, als dat veiliger is voor haar.","b":"Neen.","c":"pas","correct":"a","uitleg":"Dit is een zeer oncomfortabele situatie voor fietsers. Het is begrijpelijk dat sommigen liever op het voetpad fietsen, maar eigenlijk mag dat niet. Binnen de bebouwde kom is fietsen op het voetpad enkel toegestaan aan kinderen jonger dan 9 jaar die rijden op een fiets met een wieldiameter van maximum 50cm. Vind je het als fietser omwille van druk verkeer, tramsporen of kasseien niet veilig om op de rijbaan te fietsen, dan ga je te voet op het voetpad verder. Zo breng je anderen niet in gevaar. Buiten de bebouwde kom is het wel toegestaan op het voetpad te fietsen als er geen fietspad is. Het is begrijpelijk dat sommigen liever op het voetpad fietsen, maar eigenlijk mag dat niet. Binnen de bebouwde kom is fietsen op het voetpad enkel toegestaan aan kinderen jonger dan 9 jaar die rijden op een fiets met een wieldiameter van maximum 50cm. Vind je het als fietser omwille van druk verkeer, tramsporen of kasseien niet veilig om op de rijbaan te fietsen, dan ga je te voet op het voetpad verder. Zo breng je anderen niet in gevaar.","photonr":"17"},{"Id":"18","vraag":"Deze twee fietsers fietsen naast elkaar in een éénrichtingsstraat binnen de bebouwde kom. Mogen zij naast elkaar blijven fietsen, ook al kan de auto hen niet inhalen?","a":"Ja.","b":"Neen.","c":"pas","correct":"a","uitleg":"Binnen de bebouwde kom mag je met maximum 2 naast elkaar fietsen op voorwaarde dat tegenliggers door kunnen. In deze éénrichtingsstraat zijn er geen auto’s als tegenligger. Als er een achteropkomende auto nadert, ben je niet verplicht achter elkaar te gaan rijden. Het is natuurlijk hoffelijker om dat wél te doen. Automobilisten die een fietser willen inhalen, mogen dat enkel doen als zij 1 meter zijdelingse afstand van de fietser kunnen bewaren.","photonr":"18"},{"Id":"19","vraag":"Mogen fietsers buiten de bebouwde kom met twee naast elkaar rijden? Mogen fietsers buiten de bebouwde kom met twee naast elkaar rijden?","a":"Ja, behalve wanneer het kruisen met een tegenligger onmogelijk is.","b":"Ja, behalve wanneer het kruisen met een tegenligger onmogelijk is of wanneer er achteropkomend verkeer is.","c":"pas","correct":"a","uitleg":"Buiten de bebouwde kom mag je met maximum 2 naast elkaar fietsen op voorwaarde dat tegenliggers door kunnen. Als er een achteropkomende auto nadert, ben je wel verplicht achter elkaar te gaan rijden. (In tegenstelling tot binnen de bebouwde kom, waar je dat niet verplicht bent.) Automobilisten die een fietser willen inhalen, mogen dat enkel doen als zij 1 meter zijdelingse afstand van de fietser kunnen bewaren.","photonr":"19"},{"Id":"20","vraag":"De vrachtwagen stond al aan de lichten te wachten, toen de fietser kwam aangefietst. De fietser wil rechtdoor. Staat zij daar veilig?","a":"Ja, ze staat zeker zichtbaar voor de chauffeur.","b":"Neen, ze is wellicht niet zichtbaar voor de vrachtwagenchauffeur.","c":"pas","correct":"b","uitleg":"Vermijd deze situatie. Als je komt aangereden terwijl er voor je al een vrachtwagen staat te wachten, blijf dan rechts achter de vrachtwagen. Je weet immers niet of de vrachtwagen is uitgerust met een dodehoekcamera of –spiegel, noch of die goed is afgesteld. Naast de cabine wachten, kan je fataal worden als jij rechtdoor wil en de vrachtwagen rechts afslaat. Pas op: dit geldt ook voor vrachtwagens die naar links afslaan, omdat zij eerst altijd even naar rechts uitwijken vóórdat ze de bocht nemen. Ga daarom steeds op een plaats staan waar je de chauffeur zelf kan zien, door de spiegels of door de ruiten. Alleen als jij de chauffeur kan zien, weet je zeker dat hij je ook kan zien. Vermijd deze situatie. Als je komt aangereden terwijl er voor je al een vrachtwagen staat te wachten, blijf dan rechts achter de vrachtwagen. Je weet immers niet of de vrachtwagen is uitgerust met een dodehoekcamera of –spiegel, noch of die goed is afgesteld. Naast de cabine wachten, kan je fataal worden als jij rechtdoor wil en de vrachtwagen rechts afslaat. Pas op: dit geldt ook voor vrachtwagens die naar links afslaan, omdat zij eerst altijd even naar rechts uitwijken vóórdat ze de bocht nemen. Ga daarom steeds op een plaats staan waar je de chauffeur zelf kan zien, door de spiegels of door de ruiten. Alleen als jij de chauffeur kan zien, weet je zeker dat hij je ook kan zien.","photonr":"20"},{"Id":"21","vraag":"Deze fietser rijdt door het rode licht en wordt aangereden door een auto die groen licht had. Wie draait op voor de schade aan de auto en de fiets?","a":"De fietser betaalt de schade aan de auto en draait op voor de schade aan de eigen fiets.","b":"De automobilist betaalt alle schade.","c":"pas","correct":"a","uitleg":"Volgens het principe van de objectieve aansprakelijkheid betaalt de autoverzekering steeds de lichamelijke schade aan de zwakke weggebruiker, ongeacht of de zwakke weggebruiker in fout was. Denk echter niet dat je daarom alles mag. Als je in fout bent als fietser, betaal je de materiële schade die je aan de auto veroorzaakt hebt, en natuurlijk ook die aan je eigen fiets.","photonr":"21"}]}';
    
     var niveau = 1;
    var selectedNiveau = 1;
    var niveauTimer=1500;
    
    if (localStorage.getItem('niveau') !== null) {
        niveau = localStorage.getItem('niveau');
        if(niveau>=1 && niveau<=4){
            niveauTimer=1500;
            $('#progressbar').attr('max',niveauTimer);
            
        }
         if(niveau>=5 && niveau<=7){
            niveauTimer=1200;
              $('#progressbar').attr('max',niveauTimer);
        }
        if(niveau>=8 && niveau<=10){
            niveauTimer=1000;
            $('#progressbar').attr('max',niveauTimer);
        }
            
    }
    
    if (localStorage.getItem('selectedNiveau') !== null) {
        selectedNiveau = localStorage.getItem('selectedNiveau');
        $("#leveltop-text").html("Niveau " + selectedNiveau); 
    }
    for (var lvl = 0; lvl < niveau; lvl++) {
        $("#box" + lvl).removeClass("boxlock");
        $("#box" + lvl).addClass("boxunlock");
        $("#box" + lvl).css("background-image","url('img/"+lvl+".jpg')");
    }
    $("#box" + niveau).css("background-color","green");
    $("#Terug").click(function() {
        window.location.href = "index.html";
    });
    
    
    function selected( nummer ) {
        if (!(nummer > niveau)) {
            localStorage.setItem("selectedNiveau", ""+nummer+"");
              $("#errorContainer").remove();
              $("body").append('<div id="errorContainer"><div id="error" style class="clearfix"><h2>Klaar!</h2></div><div id="css3button">Go!</div></div>');
            
             
            $("#css3button").click(function() {
                $("#errorContainer").remove();
               window.location.href = "vragen.html";
            });
             
        }
    }
    $("#box1").click(function() {selected(1);});
    $("#box2").click(function() {selected(2);});
    $("#box3").click(function() {selected(3);});
    $("#box4").click(function() {selected(4);});
    $("#box5").click(function() {selected(5);});
    $("#box6").click(function() {selected(6);});
    $("#box7").click(function() {selected(7);});
    $("#box8").click(function() {selected(8);});
    $("#box9").click(function() {selected(9);});
    $("#box10").click(function() {selected(10);});

// de volgende dient voor geneleren van een willekeurige vraag 
    var vragenLijst = JSON.parse(vragenNiveau1);
    var tel = 0;
    var vragenArray = [];
    var RVN; //randomVraagNummer
    var RVNOK = true; //randomVraagNummer ok?
    while (tel < 19) {
        RVN = "" + (Math.floor(Math.random() * 10) + 1) + "";
        for (var vragen in vragenArray) {
            if (vragen === RVN)
            {
                RVNOK = false;
            }
            else {
                RVNOK = true;
            }
        }

        if (RVNOK) {
            vragenArray[ tel ] = RVN;
        }
        tel++;
    }
// de volgende dient om inhoud van vragen pagina invullen en interactief maken
    var huidigeVraag = 0;
    var result = vragenLijst["Tabel1"][vragenArray[huidigeVraag]].vraag;
    $("#vraag-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].vraag);
    $("#a-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].a);
    $("#b-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].b);
    $("#c-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].c);
    $("#foto").attr("src", "img/" + vragenLijst['Tabel1'][vragenArray[huidigeVraag]].photonr + ".jpg");
    var antwoorden = [];
    var huidigeAntwoord = '';
    $("#a").click(function() {
        huidigeAntwoord = 'a';
      
        var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
        antwoorden.push(VEA);
        volgende();
    });
    $("#b").click(function() {
        huidigeAntwoord = 'b';
        var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
        antwoorden.push(VEA);
        volgende();
    });
    $("#c").click(function() {
        huidigeAntwoord = 'c';
        var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
        antwoorden.push(VEA);
        volgende();
    });
    var sec = 0;
    var timer;
    var timeOut=false;
    if ($("pagina").attr("value") === "vragen") {
        timer = setInterval(function() {
            if (sec <= 0) {
                sec = niveauTimer;
                timeOut=true;
                huidigeAntwoord = 'null';
                var VEA = {vraagid: vragenLijst["Tabel1"][vragenArray[huidigeVraag]].Id, antwoord: huidigeAntwoord};
                antwoorden.push(VEA);
                volgende();
            }else{timeOut=false;$("#progressbar").attr("value", "" + (sec--) + "");}
            
        }, 30);
    }
    
    function volgende() {
         sec = niveauTimer;
        if (vragenLijst["Tabel1"][vragenArray[huidigeVraag]].correct !== huidigeAntwoord && !timeOut) {
            $("#errorContainer").remove();
            $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
            $("#error").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].uitleg);
            $("#css3button").click(function() {
                $("#errorContainer").remove();
            });
        }
        

        $("#vraag-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].vraag);
        $("#a-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].a);
        $("#b-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].b);
        $("#c-text").html(vragenLijst["Tabel1"][vragenArray[huidigeVraag]].c);
        $("#vraagtop-text").html("Vraag " + (huidigeVraag + 1) + " / 15");
        $("#foto").attr("src", "img/" + vragenLijst['Tabel1'][vragenArray[huidigeVraag]].photonr + ".jpg");
      
    
        if (huidigeVraag >= 14) {
            clearInterval(timer);
            localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
            $("#errorContainer").remove();
             $("#Foto-div").remove();
             $("#progress").remove();
             $("#vraag").remove();
             $("#antwoorden").remove();
            
            
            
             var antwoordenWraper=" <div id='wrapper' class='clearfix'><div id='scroller' class='clearfix'></div></div>";
             $("#screen").append(antwoordenWraper ); 
            //$("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
            var antwoordenText = '';
            var vragenTeller=1;
            var correctAntwordenTeller=0;
            var  antwordedDiv=''; 
            for (var antwoord in antwoorden) {
                //alert(JSON.stringify(antwoorden[antwoord].vraagid));
               
               //$("#vraag"+vragenTeller+"").css("background-image","url('img/"+vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr+".jpg'");
                if (
                        vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].correct
                        !== antwoorden[antwoord].antwoord) {
                     antwordedDiv += "<div id='vraag"+vragenTeller+"' class='clearfix , boxlock  ' \n\
                                   style='background-image: url(\"img/"+vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr+".jpg\");\n\
                                   background-size: auto 100%  ;\n\
                                   background-repeat:no-repeat;\n\
                                   background-position:center; \n\
                                   -moz-box-shadow: 0px 0px 26px #fc0303;\n\
                                   -webkit-box-shadow: 0px 0px 26px #fc0303;\n\
                                   box-shadow: 0px 0px 26px #fc0303;'>\n\
                                    <span>Vraag "+vragenTeller+"</span>\n\
                                 </div>";
                    
                    antwoordenText += "<h3>Vraag " + vragenTeller + "<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/" + vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr + ".jpg'></img></div><br/></h3>" + vragenLijst["Tabel1"][ antwoorden[antwoord].vraagid].uitleg + "<br/>";
//                    $("#errorContainer").remove();
//                  var antwoordenText ="<h3>Vraag "+vragenTeller+"<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/"+ vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr + ".jpg'></img></div><br/></h3>"+ vragenLijst["Tabel1"][ antwoorden[antwoord].vraagid].uitleg + "<br/>";
//                    $("#vraag" + vragenTeller + "").click(function() {
//                        $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
//                    
//                        $("#error").html(antwoordenText);  
//                    }); 
//                    $("#css3button").click(function() {
//                        $("#errorContainer").remove();
//                    });
                }else{
                     antwordedDiv += "<div id='vraag"+vragenTeller+"' class='clearfix , boxlock  ' \n\
                                   style='background-image: url(\"img/"+vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr+".jpg\");\n\
                                   background-size: auto 100%  ;\n\
                                   background-repeat:no-repeat;\n\
                                   background-position:center; \n\
                                   -moz-box-shadow: 0px 0px 26px #03fc03; \n\
                                    -webkit-box-shadow: 0px 0px 26px #03fc03; \n\
                                     box-shadow: 0px 0px 26px #03fc03;'>\n\
                                   <span>Vraag "+vragenTeller+"</span>\n\
                                 </div>";
//                    $("#errorContainer").remove();
//                    var antwoordenText ="<h3>Vraag "+vragenTeller+"<br/><div id='Foto-div' class='clearfix'> <img id='foto' class='image' src='img/"+ vragenLijst["Tabel1"][antwoorden[antwoord].vraagid].photonr + ".jpg'></img></div><br/></h3>"+ vragenLijst["Tabel1"][ antwoorden[antwoord].vraagid].uitleg + "<br/>";
//                    $("#vraag" + vragenTeller + "").click(function() {
//                        $("body").append('<div id="errorContainer"><div id="error" class="clearfix"></div><div id="css3button">OK</div></div>');
//                    
//                        $("#error").html(antwoordenText);  
//                    }); 
//                    $("#css3button").click(function() {
//                            $("#errorContainer").remove();
//                        });
                    correctAntwordenTeller++;
                }
                vragenTeller++; 
            }
            //$("#error").html(antwoordenText);
             
            $("#scroller").append(antwordedDiv);
             var myScroll;
               var myScroll2;
               var myScroll3;
              function load (){
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
           
            

           
            var ant=[];
            var i=0;
            for (i; i < 15; i++) {
                ant[i] = " \n\
                            <h3>Vraag " + (i + 1) + "<br/>\n\
                            <div id='Foto-div' class='clearfix'> \n\
                            <img id='fotoAnt' class='image' src='img/" + 
                            vragenLijst["Tabel1"][antwoorden[i].vraagid].photonr + 
                            ".jpg'></img></div><br/></h3>\n\
                             <div id='accordion'class='accordion vertical'>\n\
                            <section id='vertabout'>\n\
                            <h2><a href='#vertabout'>De vraag was?</a></h2>\n\
                            <p>"+ 
                            vragenLijst["Tabel1"][ antwoorden[i].vraagid].vraag + 
                            " </p></section>\n\
                            <section id='vertuitleg'>\n\
                            <h2><a href='#vertuitleg'>Uitleg</a></h2>\n\
                            <p>"+ 
                            vragenLijst["Tabel1"][ antwoorden[i].vraagid].uitleg + 
                            " </p></section>\n\\n\
                            </div>"; 
                $("#vraag" + (i + 1) + "").attr("data-vraag", i);
                $("#vraag" + (i + 1) + "").click(function() {
                    $("body").append('<div id="errorContainer">\n\
                                        <div id="error" class="clearfix">\n\
                                          </div>   <div id="css3button">OK</div></div>\n\
                                        \n\
                                        </div>');
            
                   
                    
                    $("#error").html(''+
                                    ant[$(this).data('vraag')]+
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
            $("#ac").click(function (){ $("#ac").hide('slow');});
             $(".vertical").click(function() {
                           $.ajax({
                        url: "iscroll.js",
                        dataType: "script",
                        success: load()
                    });
                    });
          $.ajax({
                url: "iscroll.js" ,
                dataType: "script",
                success: load()
            });
            
            if(correctAntwordenTeller>3 && (parseInt(niveau)== selectedNiveau)){
                    niveau=parseInt(niveau)+1; 
                    localStorage.setItem("niveau",""+niveau+"");
                }  
//            $("#css3button").click(function() {
//                if(correctAntwordenTeller>3 && (parseInt(niveau)== selectedNiveau)){
//                    niveau=parseInt(niveau)+1; 
//                    localStorage.setItem("niveau",""+niveau+"");
//                }  
//                window.location.href = "home.html";
//                $("#errorContainer").remove();
//            });
        } 
         huidigeVraag++;  
      
    }


//    $.each(vragenArray , function(index, value){
//     console.log(index + ':' + value);
//});
});
