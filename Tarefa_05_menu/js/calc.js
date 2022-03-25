function calc(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("e-mail").value;

    var prods = [
            {id: 1, name :"Bife com Batata", price: 30.00 },
            {id: 2, name :"Coxa de frango crocante", price: 25.00 },
            {id: 3, name :"Carne de panela", price: 22.00 },
            {id: 4, name :"Farofa", price: 10.00 },
            {id: 5, name :"Salada", price: 8.00 },
            {id: 6, name :"Toresmo", price: 12.00 },
        ];


    document.getElementById("request").innerHTML += "<p>" + "Caro " + "<strong>" + name + "</strong>" + "</p>" + "<p>" +
    "Segue os dados do seu pedido." + "</p>" + "<p>" + "O seu pedido é."+ "</p>";
        
    
            
        
    
}