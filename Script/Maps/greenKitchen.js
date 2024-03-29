window.overworldMaps.greenKitchen =  {
    id: "greenKitchen",
    upperSrc: "images/maps/GreenKitchenUpper.png",
    lowerSrc: "images/maps/GreenKitchenLower.png",
    gameObject: {
        hero: new Player({
            src: "/images/characters/people/hero.png",
            x: withGrid(5),
            y: withGrid(11), 
        }),
        npcG1: new Npc({
            src:"/images/characters/people/npc8.png",
            x: withGrid(4),
            y: withGrid(11),
            useShadow: true,
            direction: "right",
            talkingBox: [
                {
                    requires:["DEFEATED_GREEN_BOSS"],
                    box: [
                        {type:"textMessage", text:"I have never seen that, it was a very impressive fight!"},
                        {type:"textMessage", text:"You still have a long way to go, but you have huge potential."},
                    ]
                },
                {
                    requires:["JUMELLE1_DEFEATED", "JUMELLE2_DEFEATED"],
                    box: [
                        {type:"textMessage", text:"I'm genuinely impressed!"},
                        {type:"textMessage", text:`The master Chef is over here, you can go fight him.`},
                        {type:"textMessage", text:"But before that, get ready and make some preparations beforehand."},
                        {type:"textMessage", text:"Best luck to you!"},
                    ]
                },
                
            ]
        }),
        npcG2: new Npc({
            src:"/images/characters/people/npc5.png",
            name:"Vegan Man",
            x:withGrid(3),
            y:withGrid(5),
            useShadow: true,
            direction: "down",
            talkingBox: [
                {
                    requires:["DEFEATED_GREEN_BOSS"],
                    box: [
                        {type:"textMessage", text:`I'm just not feeling well today, but next time you are bound to lose.`},
                    ]
                },
                {
                    requires: [],
                    box: [
                        {type:"textMessage", text:"Finally you arrived, you sure made me wait.", who: primaryBoss},
                        {type:"textMessage", text:"Sorry to disapoint you, but you stand no chance.", who: primaryBoss},
                        {type:"textMessage", text:"Get ready to lose.", who: primaryBoss},
                        {type:"battle", ennemyId:"veganMan"},
                        { type:"addStoryFlags", flag: "DEFEATED_GREEN_BOSS"}
                    ]
                }
            ]
        })
    },
    caseEvent: {
        [gridWall(5, 12)]: {
            event: [
                {
                    type:"changeMap", map:'streetNorth',
                    x: withGrid(7),
                    y: withGrid(6),
                    direction: "down"
                }
            ]
        },
        [gridWall(5, 10)]: [
            {
                requires: ["JUMELLE1_DEFEATED", "JUMELLE2_DEFEATED"],
                event: []
            },
            {
                requires: [],
                event: [
                    {type:"textMessage", text:"If you don't defeat the twins, you don't deserve to come here."},
                    {type:"walk", direction:"down", who:"hero"},
                    {type:"walk", direction:"down", who:"hero"},
                    {type:"changeMap", map:"streetNorth", x:withGrid(7), y:withGrid(6), direction:"down"}
                ]
            },
        ],
        [gridWall(6, 10)]: [
            {
                requires: ["JUMELLE1_DEFEATED", "JUMELLE2_DEFEATED"],
                event: []
            },
            {
                requires: [],
                event: [
                    {type:"textMessage", text:"If you don't beat the twin you deserve to come here."},
                    {type:"walk", direction:"down", who:"hero"},
                    {type:"walk", direction:"left", who:"hero"},
                    {type:"walk", direction:"down", who:"hero"},
                    {type:"changeMap", map:"streetNorth", x:withGrid(7), y:withGrid(6), direction:"down"}
                ]
            },
        ]

        
    },
    walls: {
        //Mur en bas
        [gridWall(1, 12)]: true,
        [gridWall(2, 12)]: true,
        [gridWall(3, 12)]: true,
        [gridWall(4, 12)]: true,
        [gridWall(6, 12)]: true,
        [gridWall(7, 12)]: true,
        [gridWall(8, 12)]: true,
        [gridWall(9, 12)]: true,

        //Mur Gauche
        [gridWall(0, 11)]: true,
        [gridWall(0, 10)]: true,
        [gridWall(0, 9)]: true,
        [gridWall(0, 8)]: true,
        [gridWall(0, 7)]: true,
        [gridWall(0, 6)]: true,
        [gridWall(0, 5)]: true,
        [gridWall(0, 4)]: true,

        //Wall up  
            //Object
            [gridWall(1, 4)]: true,
            [gridWall(3, 4)]: true,
            [gridWall(4, 4)]: true,
            [gridWall(6, 4)]: true,
            [gridWall(7, 4)]: true,
            [gridWall(8, 5)]: true,

        [gridWall(2, 3)]: true,
        [gridWall(5, 3)]: true,
        [gridWall(8, 4)]: true,
        [gridWall(9, 4)]: true,

        //Wall Right
        [gridWall(10, 5)]: true,
        [gridWall(10, 6)]: true,
        [gridWall(10, 7)]: true,
        [gridWall(10, 8)]: true,
        [gridWall(10, 9)]: true,
        [gridWall(10, 10)]: true,
        [gridWall(10, 11)]: true,

        //Chairs & Table

        [gridWall(9, 10)]: true,
        [gridWall(8, 10)]: true,
        [gridWall(7, 10)]: true,

        [gridWall(4, 9)]: true,
        [gridWall(3, 9)]: true,
        [gridWall(2, 9)]: true,

        //Comptoire
        [gridWall(3, 7)]: true,
        [gridWall(4, 7)]: true,
        [gridWall(6, 7)]: true,
        
        [gridWall(6, 6)]: true,
        [gridWall(5, 6)]: true,
        [gridWall(4, 6)]: true,
        [gridWall(3, 6)]: true,
        [gridWall(2, 6)]: true,
        [gridWall(1, 6)]: true,
    }
}