// ----- Overview of classes -----

const bigDay = new Date(2019, 6, 19); // Date 객체 생성: Date 클래스의 인스턴스 생성
console.log(bigDay.toLocaleDateString()); // 날짜 문자열 출력:: 7/19/2019
if (bigDay.getTime() < Date.now()) {
	// 객체의 시간이 지금보다 이전이라면
	console.log('Once upon a time...'); // 출력
}

// ----- Declaring a class -----

class MyClass {
	// 클래스 선언
	constructor() {} // 생성자
	myField = 'foo'; // 인스턴스 필드
	myMethod() {} // 인스턴스 메서드
	static myStaticField = 'bar'; // 정적 필드
	static myStaticMethod() {} // 정적 메서드
	static {} // 정적 블록
	#myPrivateField = 'bar'; // 외부에서 접근할 수 없는 변수
}

function MyClass1() {
	// 함수로 생성자를 해서 클래스 선언
	this.myFiend = 'foo'; // 인스턴스 필드
}
MyClass1.myStaticField = 'bar'; // // 정적 필드
MyClass1.myStaticMethod = function () {}; // 정적 메서드
MyClass1.prototype.myMethod = function () {}; // 프로토타입에 정적 메서드
(function () {})(); // 정적 블록의 역할을 하는 즉시 실행 함수

const myInstance = new MyClass(); // MyClass의 인스턴스 생성
console.log(myInstance.myField); // 인스턴스 필드 출력: foo
myInstance.myMethod(); // 인스턴스 메서드 호출

// const myInstance1 = MyClass(); // 클래스는 new 연산자 없이 호출할 수 없음

// new MyClass2(); // MyClass2의 인스턴스 생성: ReferenceError
class MyClass2 {} // 함수와 달리 클래스 선언은 호이스팅되지 않음

const MyClass3 = class MyClass3 {}; // 클래스 표현식

const MyClass4 = class MyClassLongerName {}; // 클래스 표현식에 이름 작성 가능: 이름은
// 클래스 몸체에서만 접근 가능
// new MyClassLongerName(); // ReferenceError

// ----- Constructor -----

class Color {
	// Color 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의: r, g, b 매개변수
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
}

const red = new Color(255, 0, 0); // Color 클래스의 인스턴스 생성: 빨간색
console.log(red); // * 인스턴스 출력: 인스턴스는 객체? Color {values: Array(3)}

function createColor(r, g, b) {
	// 함수로 같은 기능을 구현
	return {
		// 반환
		values: [r, g, b], // 객체 리터럴로 인스턴스 필드 선언
	};
}

class Color1 {
	// 클래스 선언
	constructor(...values) {
		// 나머지 매개변수 사용
		this.values = values; // 인스턴스 필드 선언
	}
}
const red1 = new Color1(255, 0, 0); // 인스턴스 생성

const anotherRed = new Color(255, 0, 0); // 다른 빨간색 인스턴스
console.log(red === anotherRed); // false: 서로 다른 인스턴스

class MyClass5 {
	// 클래스 선언
	constructor() {
		// 생성자 정의
		this.myField = 'foo'; // 인스턴스 필드 선언
		return {}; // 객체 반환: 인스턴스 대신에 빈 객체를 반환
	}
}
console.log(new MyClass5().myField); // 인스턴스 필드 출력 시도: undefined

// ----- Instance methods -----

class Color2 {
	// Color2 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
	getRed() {
		// 인스턴스 메서드 정의
		return this.values[0]; // 빨간색 값 반환
	}
}
const red2 = new Color2(255, 0, 0); // 빨간색 인스턴스 생성
console.log(red2.getRed()); // 빨간색 값 출력: 255

class Color3 {
	// Color3 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
		this.getRed = function () {
			// 메서드로 생성자 밖에 정의하는 대신
			// 생성자 안에 함수로 정의
			return this.values[0]; // 빨간색 값 반환
		};
	}
}

console.log(new Color3().getRed === new Color3().getRed); // false: 서로 다른 함수
// 똑같이 작동하지만 이것은 인스턴스 생성 시마다 새로운 함수가 생성됨
// * 추가 코드: 그렇다면 메서드로 만든 경우는 어떤지 확인
console.log(new Color2().getRed === new Color2().getRed); // true: 같은 함수
// 다른 인스턴스지만 메서드로 만들었기 때문에 함수는 같은 함수로 공유됨

class Color4 {
	// Color4 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
	getRed() {
		// 인스턴스 메서드 정의
		return this.values[0]; // 빨간색 값 반환
	}
	setRed(value) {
		// 인스턴스 메서드 정의
		this.values[0] = value; // 빨간색 값 설정
	}
}
const red4 = new Color4(255, 0, 0); // 빨간색 인스턴스 생성
red4.setRed(0); // 빨간색 값을 0으로 변경
console.log(red4.getRed()); // 빨간색 값 출력: 0

// ----- Private fields -----

class Color5 {
	// Color5 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
}
const red5 = new Color5(255, 0, 0); // 빨간색 인스턴스 생성
red5.values[0] = 0; // 배열에 바로 접근하여 빨간색 값을 0으로 변경
console.log(red5.values[0]); // 배열에 바로 접근하여 빨간색 값을 출력: 0

/* class Color6 { // Color6 클래스 선언: 여기서는 HSL 색상체계 사용
	constructor(r, g, b) { // 생성자 정의
		this.values = rgbToHSL([r, g, b]); // RGB 값을 HSL로 변환하여 인스턴스 필드 선언
	}
	getRed() { // 인스턴스 메서드 정의
		return hslToRGB(this.values)[0]; // HSL 값을 RGB로 변환하여 빨간색 값 반환
	}
	setRed(value) { // 인스턴스 메서드 정의
		const rgb = hslToRGB(this.values); // HSL 값을 RGB로 변환하여 rgb 변수에 저장
		rgb[0] = value; // rgb 배열의 빨간색 값을 value로 변경
		this.values = rgbToHSL(rgb); // 변경된 rgb 값을 다시 HSL로 변경하여 저장
	}
} */ // rgbToHSL과 hslToRGB 함수가 정의되어 있지 않아서 오류 발생
// RGB 색상체계로 사용하던 유저에게 혼란을 줄 수 있음 ->
// values 필드를 private으로 만들어서 외부에서 직접 접근하지 못하게 하는 방법이 있음

class Color6 {
	// Color6 클래스 선언
	#values; // 프라이빗 필드 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.#values = [r, g, b]; // 프라이빗 필드에 RGB 값을 저장
	}
	getRed() {
		// 인스턴스 메서드 정의
		return this.#values[0]; // 프라이빗 필드에서 빨간색 값 반환
	}
	setRed(value) {
		// 인스턴스 메서드 정의
		if (value < 0 || value > 255) {
			// 값이 0 미만이나 255 초과라면
			throw new RangeError('Invalid Range'); // RangeError 예외 발생
		}
		this.#values[0] = value; // 프라이빗 필드에서 빨간색 값을 value로 변경
	}
}
const red6 = new Color6(255, 0, 0); // 빨간색 인스턴스 생성
console.log(red6.getRed()); // 빨간색 값 출력: 255

// console.log(red6.#values); // 프라이빗 필드에 직접 접근 시도: SyntaxError

// red6.setRed(1000); // RangeError

class Color7 {
	// Color7 클래스 선언
	#values; // 프라이빗 필드 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.#values = [r, g, b]; // 프라이빗 필드에 RGB 값을 저장
	}
	redDifference(anotherColor) {
		// 인스턴스 메서드 정의
		if (!(#values in anotherColor)) {
			// in 연산자로 private 필드가 있는지 확인
			throw new TypeError('Color instance expected'); // 없으면 에러 발생
		}
		return this.#values[0] - anotherColor.#values[0]; // 빨간색 차이 값 계산:
		// 다른 인스턴스여도 같은 클래스에 속했으므로 접근 가능
	}
}
const red7 = new Color7(255, 0, 0); // 빨간색 인스턴스 생성
const crimson = new Color7(220, 20, 60); // 진홍색 인스턴스 생성
red7.redDifference(crimson); // 두 색의 빨간색 값 비교: 35

/* class BadIdeas { // BadIdeas 클래스 선언
	#firstName; // 프라이빗 필드 선언
	#firstName; // 프라이빗 필드 선언: 이름이 중복되어 early syntax error
	#lastName; // 프라이빗 필드 선언
	constructor() { // 생성자 정의
		delete this.#lastName; // 프라이빗 필드 삭제할 수 없으므로 early syntax error
	}
} */

/* class Counter extends HTMLElement {
	#xValue = 0;
	constructor() {
		super();
		this.onclick = this.#clicked.bind(this);
	}
	get #x() {
		return this.#xValue;
	}
	set #x(value) {
		this.#xValue = value;
		window.requestAnimationFrame(this.#render.bind(this));
	}
	#clicked() {
		this.#x++;
	}
	#render() {
		this.textContent = this.#x.toString();
	}
	connectedCallback() {
		this.#render();
	}
}
customElements.define('num-counter', Counter); */

// ----- Accessor fields -----

class Color8 {
	// Color8 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
	get red() {
		// 접근자 필드 정의
		return this.values[0]; // 빨간색 값 반환
	}
	set red(value) {
		// 설정자 필드 정의
		this.values[0] = value; // 빨간색 값 설정
	}
}
const red8 = new Color8(255, 0, 0); // 빨간색 인스턴스 생성
red8.red = 0; //
console.log(red8.red); // 빨간색 값 출력: 0

class Color9 {
	// Color9 클래스 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.values = [r, g, b]; // 인스턴스 필드 선언
	}
	get red() {
		// 접근자 필드 정의
		return this.values[0]; // 빨간색 값 반환
	}
}
const red9 = new Color9(255, 0, 0); // 빨간색 인스턴스 생성
red9.red = 0; // 빨간색 값 변경 시도
console.log(red9.red); // 설정자 필드가 없으므로 빨간색 값을 변환할 수 없음: 255

// ----- Public fields -----

class MyClass6 {
	// MyClass6 클래스 선언
	luckyNumber = Math.random(); // 인스턴스 필드 선언
}
console.log(new MyClass6().luckyNumber); // 인스턴스 필드 출력:
console.log(new MyClass6().luckyNumber); // 매번 다른 난수 출력

class MyClass7 {
	// MyClass7 클래스 선언
	constructor() {
		// 생성자 정의
		this.luckyNumber = Math.random(); // 인스턴스 필드 선언
	}
} // 294-295행과 같은 기능을 하는 코드

// ----- Static properties -----

class Color10 {
	// Color10 클래스 선언
	static isValid(r, g, b) {
		// 정적 메서드 정의
		return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
		// RGB 값이 모두 0 이상 255 이하인지 확인하여 유효한 색상인지 반환
	}
}
Color10.isValid(255, 0, 0); // true
Color10.isValid(1000, 0, 0); // false

console.log(new Color10(0, 0, 0).isValid); // undefined: 인스턴스에서 접근 불가

class MyClass8 {
	// * 추가 코드: 필드가 메모리 영역에서 어떻게 되는지 보려고 myClass8 클래스 선언
	constructor() {
		// * 생성자 정의
		this.field = 'foo'; // * 인스턴스 필드 선언
	}
	field2 = 'bar'; // * 인스턴스 필드 선언
}
const myInstance1 = new MyClass8(); // * MyClass8의 인스턴스 생성
const myInstance2 = new MyClass8(); // * MyClass8의 또 다른 인스턴스 생성
console.log(myInstance1.field === myInstance2.field); // * true: 왜??
console.log(myInstance1.field2 === myInstance2.field2); // * true: 왜??

class MyClass9 {
	// MyClass9 클래스 선언
	static {
		// 정적 블록 정의
		MyClass9.myStaticProperty = 'foo'; // 정적 필드 정의
	}
}
console.log(MyClass9.myStaticProperty); // 출력: foo

// ----- Extends and inheritance -----

class Color11 {
	// Color11 클래스 선언: 투명도 속성이 추가
	#values; // 프라이빗 필드 선언
	constructor(r, g, b, a = 1) {
		// 생성자 정의, 투명도 기본값 설정
		this.#values = [r, g, b, a]; // 프라이빗 필드에 RGB와 투명도 값을 저장
	}
	get alpha() {
		// 접근자 필드 정의
		return this.#values[3]; // 투명도 값 반환
	}
	set alpha(value) {
		// 설정자 필드 정의
		if (value < 0 || value > 1) {
			// 투명도 값이 0 미만이나 1 초과라면
			throw new RangeError('Alpha value must be between 0 and 1');
			// RangeError 예외 발생
		}
		this.#values[3] = value; // 투명도 값 설정
	}
}

class ColorWithAlpha extends Color9 {
	// Color9을 상속하는 ColorWithAlpha 선언
	#alpha; // 프라이빗 필드 선언
	constructor(r, g, b, a) {
		// 생성자 정의
		super(r, g, b); // 부모 클래스 생성자 불러옴
		this.#alpha = a; // 투명도 값 추가
	}
	get alpha() {
		// 접근자 필드 정의
		return this.#alpha; // 투명도 값 반환
	}
	set alpha(value) {
		// 설정자 필드 정의
		if (value < 0 || value > 1) {
			// 투명도 값이 0 미만이나 1 초과라면
			throw new RangeError('Alpha value must be between 0 and 1');
			// RangeError 예외 발생
		}
		this.#alpha = value; // 투명도 값 설정
	}
}

const color = new ColorWithAlpha(255, 0, 0, 0.5); // 빨간색과 투명도 0.5인 인스턴스 생성
console.log(color.red); // 부모 클래스의 접근자 필드로 빨간색 값 출력: 255

console.log(red.toString()); // [object Object]

class Color12 {
	// Color12 클래스 선언
	#values; // 프라이빗 필드 선언
	constructor(r, g, b) {
		// 생성자 정의
		this.#values = [r, g, b]; // 프라이빗 필드에 RGB 값을 저장
	}
	toString() {
		// 인스턴스 메서드 정의: 덮어쓰기
		return this.#values.join(', '); // RGB 값을 쉼표로 구분하여 문자열로 반환
	}
	static isValid(r, g, b) {
		// 정적 메서드 정의
		return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
		// RGB 값이 모두 0 이상 255 이하인지 확인하여 유효한 색상인지 반환
	}
}
console.log(new Color12(255, 0, 0).toString()); // RGB 값을 문자열로 출력: 255, 0, 0

class ColorWithAlpha1 extends Color12 {
	// Color12를 상속하는 ColorWithAlpha1 선언
	#alpha; // 프라이빗 필드 선언
	constructor(r, g, b, a) {
		// 생성자 정의
		super(r, g, b); // 부모 생성자 가져옴
		this.#alpha = a; // 투명도 값 추가
	}
	toString() {
		// toString 인스턴스 메서드 덮어쓰기
		return `${super.toString()}, ${this.#alpha}`;
		// 부모 클래스의 toString 메서드를 호출하여 RGB 값을 문자열로 출력하고
		// 부모 클래스의 alpha 필드를 불러와서 추가
	}
}
console.log(new ColorWithAlpha1(255, 0, 0, 0.5).toString());
// RGB와 투명도 값을 문자열로 출력: 255, 0, 0, 0.5

class ColorWithAlpha2 extends Color12 {
	// Color12를 상속하는 ColorWithAlpha2 선언
	#alpha; // 프라이빗 필드 선언
	constructor(r, g, b, a) {
		// 생성자 정의
		super(r, g, b); // 부모의 생성자 불러옴
		this.#alpha = a; // 투명도 값 추가
	}
	static isValid(r, g, b, a) {
		// 정적 메서드 정의
		return super.isValid(r, g, b) && a >= 0 && a <= 1;
		// 부모의 정적 메서드 불러와서 투명도 조건 추가
	}
}
console.log(ColorWithAlpha2.isValid(255, 0, 0, -1)); // false

/* class ColorWithAlpha3 extends Color11 { // Color11을 상속하는 ColorWithAlpha3 선언
	log() { // log 메서드 정의
		console.log(this.#values); // 프라이빗 필드에 접근 시도: early syntax error
	}
} */

console.log(color instanceof Color9); // 자녀 클래스의 인스턴스는 부모 클래스의 인스턴스: true
console.log(color instanceof ColorWithAlpha); // true

// ----- Why classes? -----

function incrementDay(date) {
	// 날짜를 늘리는 함수 선언
	return new Date(date.setDate(date.getDate() + 1)); // 날짜에 하루 추가해서 달 맞추고 반환
}
const date = new Date(); // Date 객체 선언
const newDay = incrementDay(date); // 객체에 함수 적용
console.log(newDay); // 출력: 현재 날짜
console.log(date); // 출력: 현재 날짜; 기존 객체도 변경됨

function isRed(color) {
	// 색깔이 빨간색인지 판별하는 함수 정의
	return color.red === 255;
}
function isValidColor(color) {
	// 유효한 색상값인지 판별하는 함수 정의
	return (
		color.red >= 0 && // R값이 0 이상이고
		color.red <= 255 && // R값이 255 이하고
		color.green >= 0 && // G값이 0 이상이고
		color.green <= 255 && // G값이 255 이하고
		color.blue >= 0 && // B값이 0 이상이고
		color.blue <= 255 // B값이 255 이하인지 여부
	);
} // Color 클래스가 없었다면 이런 함수들을 다 따로 정의해야 했을 것
