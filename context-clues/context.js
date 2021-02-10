document.addEventListener('DOMContentLoaded', function () {

    //create arrays for friends/locations/weapons//
    var friends = ['kendall', 'ethan', 'kaleb', 'bear', 'clint', 'naenae'];
    var locations = ['bathroom', 'basement', 'kitchen', 'driveway', 'bedroom', 'livingroom', 'garage', 'foyer', 'swimmingpool', 'yard' ];
    var weapons = ['knife', 'car', 'gun', 'bleach', 'cord', 'chain', 'bat', 'hammer', 'poison', 'toothbrush', 'lawnmower', 'crowbar', 'heels', 'screwdriver', 'plasticbag', 'skillet', 'chainsaw', 'torch', 'broom', 'rzaor'];  
    var num = (i++)

 

    //create 100 h3 with 'Accusation 1-100'//
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement('h3');
        var msg = document.createTextNode('Accusation ' + i );
        document.body.appendChild(h3);
        h3.appendChild(msg);

        h3 = msg[i];
    };  
   
    var friend = friends[i % 5];
    var weapon = weapons[i % 10];
    var location = locations[i % 20]; 


    h3.addEventListener('click',function () {  
        alert(msg +  " : " + "I accuse"  + friend + " killed by using " + weapon + " while at " + location + "!");
        
    });
 
    
    



    
       
    

    
});
