var express=require('express');// grab package from node module
var app=express();
var body_parse = require('body-parser');
app.use(body_parse.json());
app.use(body_parse.urlencoded({extended: false}));

var items = [
    {
        "id":"232kaK",
        "text":"Eggs"
    },
    {
        "id":"dkP245",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frogs Legs"
    }
];

app.get('/items', function(request, response){
    response.send(items);
});


app.post('/items', function(request, response){
         var ingredient= request.body;
            if(!ingredient || ingredient.text===""){
                response.status(500).send({error:"your ingredient must have text"});
            }else{
                items.push(ingredient);
                response.status(200).send(items);
            }
         });

app.put('/items/:itemsId', function(request, response){
        
       // var itemsId = request.params.itemsId;
        var newText = request.body.text;
        
        if( !newText || newText=== ""){
        response.status(500).send({error: "You must provide items text"})  
} else{
        var objectFound =false; 
        for(var x=0; x<items.length; x++){

        var ing =items[x];
        if(ing.id ===request.params.itemsId){
        items[x].text= newText; 
        objectFound = true;    
        break;
    }
}
        if(!objectFound){
            response.status(500).send({error: "Items id not found"});
        } else {
        response.send(items);
        }
}

});

app.listen(3000, function(){
    
    console.log("First API running on port 3000!");
});