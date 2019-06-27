class Garden { 
    constructor () { 
      this.trees = [];
      this.dayCounter = 0;
      for (let i = 0; i < randomInteger(1,10); i++) { 
        this.addTree();
      }
    }
    showTree () { 
      return this.trees;
    }
    addTree () { 
      let tree = new Tree();
      this.trees.push(tree); 
    }
    passDay() { 
        for (let i = 0; i < this.trees.length; i++) { 
          this.trees[i].passDay();
        }
      this.dayCounter++;
      console.log(`Прошло ${this.dayCounter} день`);
      
    }
    getCountApples() { 
        for (let i = 0; i < this.trees.length; i++) { 
            return this.trees[i].showApples();
        }
    }
}
class Tree { 
    constructor () { 
      this.dayCounter = 0;
      this.apples = [];
      for (let i = 0; i < randomInteger(1,10); i++) { 
        this.addApple();
      }
    }
    addApple() { 
        let apple = new Apple();
        this.apples.push(apple);
    }
    showApples() { 
        return this.apples;
    }
    passDay() { 
        this.dayCounter++;
    }
}
class Apple { 
    constructor (age = randomInteger(1,10), color = randomArr(['green','white','red']),size = randomArr(['big','small']), spoiled = randomArr([true, false]), down = randomArr([true, false])) { 
      this.age = age;
      this.color = color;
      this.size = size;
      this.spoiled = spoiled;
      this.down = down;

    }
    spoiledApple() { 
      this.spoiled = true;
    }
    downApple() { 
      this.down = true;
    }
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function randomArr(arr) { 
    return arr[randomInteger(0, arr.length-1)];
}

 
let gd = new Garden();

gd.passDay();
console.log(gd.trees[1])