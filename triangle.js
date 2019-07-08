$( document ).ready(function() {
    console.log( "ready!" );
});


function TRIcalculate(){
    event.preventDefault();
        var N1 = parseInt(document.getElementById("num1").value);
        var N2 = parseInt(document.getElementById("num2").value);
        var N3 = parseInt(document.getElementById('num3').value);
        var operator = document.getElementById("operator").value;

        function isItRight(){
            if(N1<1 || N2<1 || N3<1)document.getElementById('result').value = "Not a Right Triangle";
            let[c,b,a] = [N1,N2,N3].sort((a,b)=>b-a);
            return c*c == a*a + b*b;

        }




    if( operator === "area"){

        document.getElementById('result').value = ((N1*N2)/2);
        console.log("calculating");
   
    };

    if( operator === "ThirdEdge"){
        document.getElementById('result').value = ((N1+N2)-1);
        console.log("calculating edge");
    };

    if( operator === "RightTri"){ 
        if(N1<1 || N2<1 || N3<1){
            document.getElementById('result').value = "Not a Right Triangle";
        }else{
            let[c,b,a] = [N1,N2,N3].sort((a,b)=>b-a);
            if( c*c == a*a + b*b ){
                document.getElementById('result').value = "This is a Right Triangle";

            }else{
                document.getElementById('result').value = "Not a Right Triangle";

            };

        }
        

        console.log("calculating edge");
    };
    


};

