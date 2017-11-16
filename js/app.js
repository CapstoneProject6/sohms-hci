// Chargement de socket.io
var io = io("http://localhost:8003", {'reconnect': true});

io.on('connect', function (data) {  
    console.log('connected: ' + data);
    io.send(1);
});

io.on("message", function (data) {
    console.log('message: ' + data);
});

var app = new Vue({
    el: '#app',
    data: {
        
    },
    methods: {
        test: function(data) {
        	io.connect("http://localhost:8003", {'reconnect': true});
        	io.emit('faitUneAlerte2', 'Je suis fou');
            console.log("here" + data);
        }
    }
});

// Fichier de conf (ressource)
// origin: origine de point d'ancrage de la piece
// matrix: Forme de la piece
// Static, dossier des pieces disponibles
/*
{
    origin: {
        x: 1,
        y: 1
    },
    matrix: [
        [1,0,0],
        [1,0,0],
        [1,1,1]
    ]
}

// Fichier conf pour un agv
// la position coresspond a l'endroit de départ de l'agv, le "3" correspond a une portion du parcours
// battery, pourcentage de battery de l'agv
{
    position: 3,
    battery: 40
}

// Ressources correspond au différentes ressources mise en place pour le scénario.
// Peuvent-être des "I_comp", "L_comp"... ainsi que des agv
{
    ressources:[
        {
            type: 1,
            nb: 3,
            conf: "../.."
        }
    ],
    orders: [
        {
            id: 1,
            start: 0,
            products_list: [
                {
                    id: 1,
                    instructions: [
                        {
                            type: 1,
                            position: {
                                x: 2,
                                y: 2,
                                d: 'w'
                            }
                        },
                        {
                            type: 2,
                            nb: 2
                        }
                    ]
                }
            ]
        }
    ]
}*/