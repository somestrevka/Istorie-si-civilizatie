 <html>
    <head >
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
    Verificare</title>
        <link rel="stylesheet" href="verificare.css">
        <style>
            div#test { border: #000 1px solid; padding: 10px 40px 40px 10px;  }
        </style>
        <script>
            var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
            var questions = [
                [ "În ce an s-a relizat Marea Unire?", "1919", "1918", "1917", "B" ],
                [ "Cine a fost asasinat la Sarajevo?", "Conrad von Hotsendorf", "Franz Ferdinand", "Franz Iosef", "B" ],
                [ "Cine este considerat eroul Bătăliei de la Tanenberg?", "Paul von Hindemburg", "Eremia Grigorescu", "Alexei Brusilov", "A" ],
                [ "Unde a fost semnat tratatul de pace de la finalul conflictului?", "Versailles", "Moscova", "Viena", "A" ],
                [ "Cine este arhitectul Bătăliei de pe Somme?", "Kaizerul Wilhelm", "Henri Berthelot", "Sir Douglas Heig", "C" ],
                [ "Câți ani a durat războiul?", "2", "1.5", "4", "C" ],
                [ "Unde a fost oprită prima ofensivă germană în Franța?", "Marna", "Verdun", "Somme", "A" ]
    
            ];
            function f(x) {
                use strict return document.getElementById(x);
            }
             function renderQuestion(){
                 test=_("test");
                 _("test_status").innerHTML= "Question"+(pos+1)+ "of "+ questions.lenght;
                 question=questions[pos][0];
                 chA=questions[pos][1];
                 chB=questions[pos][2];
                 chC=questions[pos][3];
                 test.innerHTML ="<h3>"+question+"</h3>";
                 test.innerHTML +="<input type='radio name='choices' value='A'>" +chA +"<br>";
                 test.innerHTML +="<input type='radio name='choices' value='B'>" +chB +"<br>";
                 test.innerHTML +="<input type='radio name='choices' value='C'>" +chC +"<br><br>";
                 test.innerHTML +="<button onclick='checkAnswer()'>Trimite răspunsul</button>";
             }
            function checkAnswer(){
                alert("ok we will");
            }
            window.addEventListener("Load" renderQuestion, false);
        </script>
    </head>
    <body class="corp">
        
    <ul class="meniu">
        <li><a href="cauze.html">Cauze</a>
            
        </li>
        <li><a href="file:///D:/lucr%C4%83ri/Proiect%20istorie/Acasa.html#">Prezenatare</a>
             <ul class="content">
                 <li><a href="batalii.html">Bătălii</a></li>
                 <li><a href="personalitati.html">Personalități</a></li>
                 <li><a href="evenimente.html">Evenimente</a></li>
            </ul>
        </li>
        <li><div class="ceva">Urmări</div>
            <ul class="content"> 
             <li><a href="state_noi.html">Noi state</a></li>
                <li><a href="Marea%20Unire.html">Marea Unire</a></li>
             <li><a href="oameni_si_curente_politice_noi.html">Oameni și idei noi</a></li>
            </ul>
        </li>
        <li><a href="verificare.html">Verificare</a></li>
         <li><a href="bibliografie.html">Bibliografie</a></li>
         </ul>
        <div class="bg">
        <h2 id="test_status"> Nu face nimic.</h2>
        <div id="test"> </div>
            </div>
    </body>
        </DOCTYPE>

