// Первая задача на вторник: реализовать систему прототипов и на основе построить Млечный Путь и солнечную систему(нашу)
// количество планет 8, звезда 1, все спутники всех 8 ми планет нагулить// пару астероидов и комет
//var a = Array.prototype.slice.call(document.querySelectorAll('.standard.sortable.jquery-tablesorter tbody tr td:nth-child(1)'));
//var a = a.map(e => e.innerText);
function getClass(a) {
 return Object.prototype.toString.call(a).slice(8, -1);
}
var GalaxyBuilder = (function() {
    //Звездные тела
    var HeaventlyBody = function(setting) {
        this.id = setting.id;
        this.name = setting.name;
        this.weight = setting.weight;
        this.speed = setting.speed;
        this.position = setting.position;
        this.distance = setting.distance;
    };
    HeaventlyBody.prototype = {
        constructor : HeaventlyBody,
        fly: function(a,b,c)  {
            //console.log(this.position.x);
            var a = parseInt(a);
            var b = parseInt(b);
            var c = parseInt(c);
            var kmFly = a + b + c;
            this.distance += kmFly;
            this.position.x += a;
            this.position.y += b;
            this.position.z += c;
            console.log(this.name + ' пролетело ' + kmFly + ' км и его позиция теперь ' );
            for(key in this.position) {
                console.log(key + " " + this.position[key]);
            }
        },
        showDistance() {
            console.log(this.name + ' отдалено на ' + this.distance);
        },
        showPropertie (prop) {
            if(getClass(prop) == 'String') {
                return this.hasOwnProperty(prop) ? this[prop] : 'Нет такого';
            }
            if(getClass(prop) == 'Array') {
                var arr = [];
                for(var i = 0,len = prop.length; i < len; i++) {
                    var j = prop[i];
                    arr.push(this[j]);
                }
                return arr;
            }     
        },
        showAllProperties() {
            var arr = [];
            for(key in this) {
                arr.push(this[key]);
            }
            return arr;
        }
    };
    //Галактика(от звездных тел)
    var Galaxy = function(setting) {
        HeaventlyBody.apply(this,arguments);
        this.type = setting.type;
        this.decisionSpeed = setting.decisionSpeed;
    };
    Galaxy.prototype = HeaventlyBody.prototype;
    Galaxy.prototype.constructor = HeaventlyBody;

    //Круглые звездные тела(от звездных тел)
    var CircleHeaventlyBody = function(setting) {
        HeaventlyBody.apply(this,arguments);
        this.radius = setting.radius;
        this.decisionSpeed = setting.decisionSpeed + 'км/час';
    };
    CircleHeaventlyBody.prototype = Object.create(HeaventlyBody.prototype);
    CircleHeaventlyBody.prototype.constructor = HeaventlyBody;
    CircleHeaventlyBody.prototype.set = function() {this.diametr = this.radius * 2;}
    CircleHeaventlyBody.prototype.get = function() {return 'Диаметр ' + this.name + ' равен ' + this.diametr + ' метров';}

    //Зыезда(от круглых звездных тел)
    var Star = function(setting) {
        CircleHeaventlyBody.apply(this,arguments);
        this.starType = setting.starType;
        this.planets = setting.planets || [];//array
    };
    Star.prototype = CircleHeaventlyBody.prototype;
    Star.prototype.constructor = CircleHeaventlyBody;
    Star.prototype.pushPlanet = function() {
        for(var i = 0;i< arguments.length;i++) {
            this.planets.push(arguments[i]);
        }
    }
    Star.prototype.showPlanets = function() {
        return 'Звезде ' + this.name + ' принадлежат такие планеты: ' + this.planets.join();
    }
    Star.prototype.isPlanet = function(planet) {
        return this.planets.indexOf(planet) != -1 ? true : false;
    }
    Star.prototype.kmRadius = function() {
        return 'Радиус ' + this.name + ' равен ' + this.radius / 1000 + ' километров';
    }
    Star.prototype.mRadius = function() {
        return 'Радиус ' + this.name + ' равен '+ this.radius + ' метров';
    }

    //Планета(от круглых звездных тел)
    var Planet = function(setting) {
        CircleHeaventlyBody.apply(this,arguments);
        this.planetType = setting.planetType;
        this.life = setting.life || false;
        this.satellites = setting.satellites || [];
    };
    Planet.prototype = CircleHeaventlyBody.prototype;
    Planet.prototype.constructor = CircleHeaventlyBody;
    Planet.prototype.showPlanetType = function() {
        return this.type;
    }
    Planet.prototype.pushSatellite = function() {
        for(var i = 0;i< arguments.length;i++) {
            this.satellites.push(arguments[i]);
        }
    }
    Planet.prototype.showSatellite = function() {
        return 'Планете ' + this.name + ' принадлежат такие спутники: ' + this.satellites.join();
    }

    //Спутник(от круглых звездных тел)
    var Satellite = function(setting) {
        CircleHeaventlyBody.apply(this,arguments);
        this.distanceToPlanet = distanceToPlanet;
    };
    Satellite.prototype = CircleHeaventlyBody.prototype;
    Satellite.prototype.constructor = CircleHeaventlyBody;

    //Не круглые звездные тела(от звездных тел)
    var NoCircleHeaventlyBody = function(setting) {
        HeaventlyBody.apply(this,arguments);
        this.type = setting.type;
    };
    NoCircleHeaventlyBody.prototype = Object.create(HeaventlyBody.prototype);
    NoCircleHeaventlyBody.prototype.constructor = HeaventlyBody;
    NoCircleHeaventlyBody.prototype.showType = function() {return this.type;}

    //Комета(от некруглых звездных тел)
    var Comet = function(setting) {
        NoCircleHeaventlyBody.apply(this,arguments);
        this.type = setting.type || 'Comet';
    };
    Comet.prototype = NoCircleHeaventlyBody.prototype;
    Comet.prototype.constructor = HeaventlyBody;

    //Астероид(от некруглых звездных тел)
    var Asteroid = function(setting) {
        NoCircleHeaventlyBody.apply(this,arguments);
        this.type = setting.type || 'Asteroid';
    };
    Asteroid.prototype = NoCircleHeaventlyBody.prototype;
    Asteroid.prototype.constructor = HeaventlyBody;

    return {HeaventlyBody:HeaventlyBody, 
            Galaxy:Galaxy,
            CircleHeaventlyBody:CircleHeaventlyBody,
            Star:Star,
            Planet:Planet,
            Satellite:Satellite,
            NoCircleHeaventlyBody:NoCircleHeaventlyBody,
            Comet:Comet,
            Asteroid:Asteroid   
        };
})();
//var set1 = {id : '1',name : 'test',weight : 1200, speed : 123, position : {x:100,y:200,z:50},distance : 10000,decisionSpeed: 12000, radius = 5000};
//Array.prototype.reduce.call(arguments,(total,el)
var sun = new GalaxyBuilder.Star({id:'01',
                                name:'Sun',
                                weight:1.9885e30,
                                speed:2.2*105,
                                position:{x:1,y:1,z:1},
                                distance:2.5e20,
                                radius:6.9551e8,
                                decisionSpeed:7284,
                                starType:'G2V',
                                planets:["Меркурий", "Венера", "Земля", "Марс", "Церера", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон", "Хаумеа", "Макемаке", "Эрида"]});