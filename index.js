        /* Adds dropdown menu 0-1 on selectCarat in HTML*/
        let selectCarat = document.getElementById("selectCarat");
        let contents;

        for (let i = 0; i <= 1.01; i = i + 0.01) {
            contents += "<option>" + i.toFixed(2) + " ct";
        }

        selectCarat.innerHTML = contents;


        /* When something is selected in the dropdown menu selectCarat, the value from the seleted option is stored in d*/

        function val() {
            d = document.getElementById("selectCarat").value;
            return d;
        }



        function operation() {

            //selected option is run and transformed to number in res without decimals
            val();
            var res = d.replace(/\D/g, "");

            let prisPerGram = 1250;

            let antalGramGuld = document.getElementById("antalGram").value;

            let prisGuld = prisPerGram * antalGramGuld;

            let prisPerCarat = 25000;


            let prisCarat = prisPerCarat * (res / 100);
          
          	let slutPris = (prisGuld + prisCarat).toFixed(2);

          document.getElementById("answer").value = Math.floor(slutPris/500) * 500;
        }

        //less errors than the inbuilt toFixed
        function toFixed(num, precision) {
            return (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(
                precision
            );
        }