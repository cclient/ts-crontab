/// <reference path="es6-collections.d.ts" />
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
let b;
let i;
let pt;
let arrayOfPoint;
let arrayOfStringPoint;
let arrayOfPointString;
let map;
let set;
let weakMap;
let weakSet;
let iteratorOfString;
let iteratorOfStringPoint;
let iteratorOfPoint;
let iteratorOfPointPoint;
map = new Map();
map = new Map(arrayOfStringPoint);
map.clear();
b = map.delete(s);
map.forEach((value, key, map) => { }, a);
pt = map.get(s);
b = map.has(s);
map = map.set(s, pt);
iteratorOfStringPoint = map.entries();
iteratorOfString = map.keys();
iteratorOfPoint = map.values();
i = map.size;
set = new Set();
set = new Set(arrayOfPoint);
set.clear();
b = set.delete(pt);
set.forEach((value, key, set) => { }, a);
b = set.has(pt);
set = set.add(pt);
iteratorOfPointPoint = set.entries();
iteratorOfPoint = set.keys();
iteratorOfPoint = set.values();
i = set.size;
weakMap = new WeakMap();
weakMap = new WeakMap(arrayOfPointString);
weakMap.clear();
b = weakMap.delete(pt);
s = weakMap.get(pt);
b = weakMap.has(pt);
weakMap = weakMap.set(pt, s);
weakSet = new WeakSet();
weakSet = new WeakSet(arrayOfPoint);
weakSet.clear();
b = weakSet.delete(pt);
b = weakSet.has(pt);
weakSet = weakSet.add(pt);
//# sourceMappingURL=es6-collections-tests.js.map