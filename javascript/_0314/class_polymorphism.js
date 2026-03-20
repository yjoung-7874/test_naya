/* 2026. 03. 14. 
Naya Kim
CS Tutoring day #13 assignment
- part 1
*/

// 천체 정의
class CelestialBodies {
	constructor(name, mass) {
		this._name = name;
		this._mass = mass;
	}
	get name() {
		return this._name;
	}
	get mass() {
		return this._mass;
	}
	set mass(newMass) {
		this._mass = newMass;
	}
	rotate() {
		console.log(this._name + ' is rotating.');
	}
}

// 하위 개념 1 - 은하 정의
class Galaxies extends CelestialBodies {
	constructor(name, mass, type) {
		super(name, mass);
		this._type = type;
	}
	set name(newName) {
		this._name = newName;
	}
	get type() {
		return this._type;
	}
	merge(anotherGalaxy, newName = this.name, type) {
		this._name = newName;
		this._mass = this.mass + anotherGalaxy._mass; // anotherGalaxy.mass ?
		this._type = type;
		anotherGalaxy = null;
	}
}

// 은하 인스턴스 3개
const triangulumGalaxy = new Galaxies('Triangulum Galaxy', 5 * 1.98e40, 'spiral');
const andromedaGalaxy = new Galaxies('Andromeda Galaxy', 1.98e42, 'barred spiral');
const milkyWay = new Galaxies('Milky Way Galaxy', 1.5 * 1.98e42, 'spiral');

// 하위 개념 2 - 항성 정의
class Stars extends CelestialBodies {
	constructor(name, mass, type, color) {
		super(name, mass);
		this._type = type;
		this._color = color;
	}
	get type() {
		return this._type;
	}
	set type(newType) {
		this._type = newType;
	}
	get color() {
		return this._color;
	}
	set color(newColor) {
		this._color = newColor;
	}
	rotateAndRevolve() {
		super.rotate();
		console.log(`Star ${this._name} is orbitting in the Milky Way Galaxy.`);
	}
	explode(remainingMass) {
		if (remainingMass < 3 * 1.98e30) {
			console.log(this._name + ' is now a neutron star.');
		} else {
			console.log(this._name + ' is now a black hole.');
		}
	}
}

// 항성 인스턴스 3개
const spica = new Stars('Spica', 11 * 1.98e30, 'blue giant', 'blue');
const betelgeuse = new Stars('Betelgeuse', 20 * 1.98e30, 'red supergiant', 'red');
const sun = new Stars('Sun', 1.98e30, 'main sequence star', 'white');

// 하위 개념 - 행성 정의
class Planets extends CelestialBodies {
	constructor(name, mass, distance, habitable = false, moons = 0) {
		super(name, mass);
		this._distance = distance;
		this._habitable = habitable;
		this._moons = moons;
	}
	get distance() {
		return this._distance;
	}
	set distance(newDist) {
		this._distance = newDist;
	}
	get habitable() {
		return this._habitable;
	}
	get moons() {
		return this._moons;
	}
	set moons(count) {
		this.moons = this._distancecount;
	}
	rotateAndRevolve() {
		super.rotate();
		console.log(`Planet ${this._name} is revolving around the Sun.`);
	}
	revolvingMoons() {
		console.log(`${this._moons} moons revolve around planet ${this._name}.`);
	}
}

// 행성 인스턴스 3개
const venus = new Planets('Venus', 4.86e24, 1.08e8);
const earth = new Planets('Earth', 5.97e24, 1.5e8, true, 1);
const jupiter = new Planets('Jupiter', 1.9e27, 7.78e8, false, 97);

// 몇 가지 수행

andromedaGalaxy.rotate(); // 안드로메다 자전
spica.rotateAndRevolve(); // 스피카 자전 및 공전
betelgeuse.explode(1.5 * 1.98e30); // 베텔기우스 폭발
venus.rotateAndRevolve(); // 금성 자전 및 공전
jupiter.revolvingMoons(); // 목성의 위성
milkyWay.merge(andromedaGalaxy, 'Milkomeda', 'elliptical');
// 우리은하와 안드로메다은하 충돌 시나리오
console.log(`[after collision] ${milkyWay._name} : ${milkyWay.mass} kg, ${milkyWay._type} galaxy now`);
// 출력
