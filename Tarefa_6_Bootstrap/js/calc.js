function calc(){
    var name = document.getElementById("inputNome").value;
    var phone = document.getElementById("inputTelefone").value;
    var email = document.getElementById("inputEmail").value;
    var total_a_pagar = (parseInt(document.getElementById("1").value)*30) + (parseInt(document.getElementById("2").value)*25) + (parseInt(document.getElementById("3").value)*22) + (parseInt(document.getElementById("4").value)*10) + (parseInt(document.getElementById("5").value)*8) + (parseInt(document.getElementById("6").value)*12);
    var prods = [
            {id: 1, name :"Bife com Batata", price: 30.00 , quant: document.getElementById("1").value, total: parseInt(document.getElementById("1").value)*30},
            {id: 2, name :"Coxa de frango crocante", price: 25.00 , quant: document.getElementById("2").value, total: parseInt(document.getElementById("2").value)*25},
            {id: 3, name :"Carne de panela", price: 22.00 , quant: document.getElementById("3").value, total: parseInt(document.getElementById("3").value)*22},
            {id: 4, name :"Farofa", price: 10.00 , quant: document.getElementById("4").value, total: parseInt(document.getElementById("4").value)*10},
            {id: 5, name :"Salada", price: 8.00 , quant: document.getElementById("5").value, total: parseInt(document.getElementById("5").value)*8},
            {id: 6, name :"Toresmo", price: 12.00 , quant: document.getElementById("6").value, total: parseInt(document.getElementById("6").value)*12},
        ];


        if (total_a_pagar === 0){
            document.getElementById("request").innerHTML += "<p>" + "<strong>" + "<font color=#990000>" + "Selecione pelo menos um prato" + "</font>" + "</strong>" + "</p>";
        }else{

        

                    document.getElementById("request").innerHTML += "<p>" + "Caro " + "<strong>" + name + "</strong>" + "</p>" + "<p>" +
                    "Segue os dados do seu pedido." + "</p>" + "<p>" + "O seu pedido é."+ "</p>";
                        
                    
                    
                    for (let prod of prods) {
                        if (prod.quant > 0) {
                                document.getElementById("request").innerHTML += ` Produto: ${prod.name}  - Preço: R$ ${prod.price}   - Quantidade: ${prods.quant}    - Total: R$ ${prod.total},00 </br>`
                                
                        }    
                    }
                            
                    document.getElementById("request").innerHTML += "<p>" + "<strong>" +"Preço final R$ " +  total_a_pagar + ",00" + "</strong>" + "</p>";
            }
}