/// <reference path="es6-shim.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
let a;
let s;
let i;
let b;
let f;
let o;
let r;
let sym;
let e;
let date;
let key;
let point;
let point3d;
let arrayOfPoint;
let arrayOfPoint3D;
let arrayOfSymbol;
let arrayOfPropertyKey;
let arrayOfAny;
let arrayOfStringAny;
let arrayLikeOfAny;
let iterableOfPoint;
let iterableOfStringPoint;
let iterableOfPointPoint3D;
let iterableIteratorOfPoint;
let iterableIteratorOfNumberPoint;
let iterableIteratorOfNumber;
let iterableIteratorOfString;
let iterableIteratorOfPointPoint;
let iterableIteratorOfNode;
let iterableIteratorOfStringPoint;
let iterableIteratorOfAny;
let iterableIteratorOfPropertyKey;
let iterableIteratorOfPropertyKeyPoint;
let nodeList;
let pd;
let pdm;
let map;
let set;
let weakMap;
let weakSet;
let promiseLikeOfPoint;
let promiseLikeOfPoint3D;
let promiseOfPoint;
let promiseOfPoint3D;
let promiseOfArrayOfPoint;
let promiseOfVoid;
point = Object.assign(point, point);
b = Object.is(point, point);
Object.setPrototypeOf(point, point);
point = arrayOfPoint.find(p => b);
i = arrayOfPoint.findIndex(p => b);
arrayOfPoint = arrayOfPoint.fill(point, i, arrayOfPoint.length);
arrayOfPoint = arrayOfPoint.copyWithin(i, i, i);
arrayOfPoint = Array.from(arrayOfPoint);
arrayOfPoint = Array.from(iterableOfPoint);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d, a);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d, a);
arrayOfPoint = Array.of(point, point);
i = s.codePointAt(i);
b = s.includes(s, i);
b = s.endsWith(s, i);
s = s.repeat(i);
b = s.startsWith(s, i);
s = String.fromCodePoint(i, i);
s = String.raw `abc`;
s = r.flags;
i = Number.EPSILON;
b = Number.isFinite(i);
b = Number.isInteger(i);
b = Number.isNaN(i);
b = Number.isSafeInteger(i);
i = Number.MAX_SAFE_INTEGER;
i = Number.MIN_SAFE_INTEGER;
i = Number.parseFloat(s);
i = Number.parseInt(s);
i = Number.parseInt(s, i);
i = Math.clz32(i);
i = Math.imul(i, i);
i = Math.sign(i);
i = Math.log10(i);
i = Math.log2(i);
i = Math.log1p(i);
i = Math.expm1(i);
i = Math.cosh(i);
i = Math.sinh(i);
i = Math.tanh(i);
i = Math.acosh(i);
i = Math.asinh(i);
i = Math.atanh(i);
i = Math.hypot(i, i);
i = Math.trunc(i);
i = Math.fround(i);
i = Math.cbrt(i);
map.clear();
map.delete(s);
map.forEach((value, key) => { });
point = map.get(s);
b = map.has(s);
map = map.set(s, point);
i = map.size;
map = new Map();
map = new Map(iterableOfStringPoint);
set.clear();
set.delete(point);
set.forEach((value, key) => { });
b = set.has(point);
set = set.add(point);
i = set.size;
set = new Set();
set = new Set(iterableOfPoint);
weakMap.delete(point);
point3d = weakMap.get(point);
b = weakMap.has(point);
weakMap = weakMap.set(point, point3d);
weakMap = new WeakMap();
weakMap = new WeakMap(iterableOfPointPoint3D);
weakSet.delete(point);
weakSet = weakSet.add(point);
b = weakSet.has(point);
weakSet = new WeakSet();
weakSet = new WeakSet(iterableOfPoint);
iterableIteratorOfNumberPoint = arrayOfPoint.entries();
iterableIteratorOfNumber = arrayOfPoint.keys();
iterableIteratorOfPoint = arrayOfPoint.values();
iterableIteratorOfPointPoint = set.entries();
iterableIteratorOfPoint = set.keys();
iterableIteratorOfPoint = set.values();
promiseLikeOfPoint.then((point) => { });
promiseLikeOfPoint = promiseLikeOfPoint.then();
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => { });
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => { });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => { });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => { });
promiseOfPoint.then((point) => { });
promiseOfPoint = promiseOfPoint.then();
promiseOfPoint = promiseOfPoint.then(p => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => { });
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => { });
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => { });
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => { });
promiseOfPoint = promiseOfPoint.catch(e => point);
promiseOfPoint = promiseOfPoint.catch(e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => { });
promiseOfPoint3D = promiseOfPoint.catch(e => point3d);
promiseOfPoint3D = promiseOfPoint.catch(e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.catch(e => promiseLikeOfPoint3D);
promiseOfPoint = new Promise((resolve, reject) => resolve(point));
promiseOfPoint = new Promise((resolve, reject) => resolve(promiseOfPoint));
promiseOfPoint = new Promise((resolve, reject) => resolve(promiseLikeOfPoint));
promiseOfPoint = new Promise((resolve, reject) => reject(e));
promiseOfArrayOfPoint = Promise.all(arrayOfPoint);
promiseOfArrayOfPoint = Promise.all(iterableOfPoint);
promiseOfPoint = Promise.race(arrayOfPoint);
promiseOfPoint = Promise.race(iterableOfPoint);
promiseOfVoid = Promise.resolve();
promiseOfPoint = Promise.resolve(point3d);
promiseOfPoint = Promise.resolve(promiseOfPoint);
promiseOfPoint = Promise.resolve(promiseLikeOfPoint);
promiseOfVoid = Promise.reject(e);
promiseOfPoint = Promise.reject(e);
a = Reflect.apply(f, a, arrayLikeOfAny);
a = Reflect.construct(f, arrayLikeOfAny);
b = Reflect.defineProperty(a, s, pd);
b = Reflect.defineProperty(a, i, pd);
b = Reflect.defineProperty(a, sym, pd);
b = Reflect.deleteProperty(a, s);
b = Reflect.deleteProperty(a, i);
b = Reflect.deleteProperty(a, sym);
iterableIteratorOfAny = Reflect.enumerate(a);
a = Reflect.get(a, s, a);
a = Reflect.get(a, i, a);
a = Reflect.get(a, sym, a);
pd = Reflect.getOwnPropertyDescriptor(a, s);
pd = Reflect.getOwnPropertyDescriptor(a, i);
pd = Reflect.getOwnPropertyDescriptor(a, sym);
a = Reflect.getPrototypeOf(a);
b = Reflect.has(a, s);
b = Reflect.has(a, i);
b = Reflect.has(a, sym);
b = Reflect.isExtensible(a);
arrayOfPropertyKey = Reflect.ownKeys(a);
b = Reflect.preventExtensions(a);
b = Reflect.set(a, s, a, a);
b = Reflect.set(a, i, a, a);
b = Reflect.set(a, sym, a, a);
b = Reflect.setPrototypeOf(a, a);
//# sourceMappingURL=es6-shim-tests.js.map