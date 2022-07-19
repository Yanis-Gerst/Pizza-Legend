class Player extends Person{constructor(t){super(t)}update(t){t.movInput&&!1===t.map.cutscenePlaying&&(0===this.moveProgressRemain?this.startBehavior(t,{type:"walk",direction:t.movInput}):(t.movInput,this.direction)),this.updatePostion(),this.updateSprite(t)}}
//# sourceMappingURL=index.3d992fab.js.map
