/// <reference path="es6-promise.d.ts" />
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
var promiseString, promiseStringArr, arrayOfPromise, promiseNumber, promiseAny, thenable;
// constructor test
var constructResult = new Promise((resolve, reject) => {
    resolve('a string');
});
promiseString = constructResult;
var constructResult1 = new Promise((resolve) => {
    resolve(Promise.resolve('a string'));
});
promiseString = constructResult1;
//resolve test
var resolveResult = Promise.resolve('a string');
promiseString = resolveResult;
var resolveResult1 = Promise.resolve(thenable);
promiseString = resolveResult1;
//reject test
var rejectResult = Promise.reject('there is an error');
promiseAny = rejectResult;
//all test
var allResult = Promise.all(arrayOfPromise);
promiseStringArr = allResult;
//race test
var raceResult = Promise.race(arrayOfPromise);
promiseString = raceResult;
//then test
var thenWithPromiseResult = promiseString.then(word => Promise.resolve(word.length));
promiseNumber = thenWithPromiseResult;
var thenWithPromiseResultAndPromiseReject = promiseString.then(word => Promise.resolve(word.length), error => Promise.resolve(10));
promiseNumber = thenWithPromiseResultAndPromiseReject;
var thenWithPromiseResultAndSimpleReject = promiseString.then(word => Promise.resolve(word.length), error => 10);
promiseNumber = thenWithPromiseResultAndSimpleReject;
var thenWithSimpleResult = promiseString.then(word => word.length);
promiseNumber = thenWithSimpleResult;
var thenWithSimpleResultAndPromiseReject = promiseString.then(word => word.length, error => Promise.resolve(10));
promiseNumber = thenWithSimpleResultAndPromiseReject;
var thenWithSimpleResultAndSimpleReject = promiseString.then(word => word.length, error => 10);
promiseNumber = thenWithSimpleResultAndSimpleReject;
var thenWithUndefinedFullFillAndSimpleReject = promiseString.then(undefined, error => 10);
promiseNumber = thenWithUndefinedFullFillAndSimpleReject;
var thenWithUndefinedFullFillAndPromiseReject = promiseString.then(undefined, error => Promise.resolve(10));
promiseNumber = thenWithUndefinedFullFillAndPromiseReject;
var thenWithNoResultAndNoReject = promiseString.then();
promiseNumber = thenWithNoResultAndNoReject;
var voidPromise = new Promise(function (resolve) { resolve(); });
//catch test
var catchWithSimpleResult = promiseString.catch(error => 10);
promiseNumber = catchWithSimpleResult;
var catchWithPromiseResult = promiseString.catch(error => Promise.resolve(10));
promiseNumber = catchWithPromiseResult;
promiseString = promiseString.catch(function () {
    throw new Error('Better error msg');
    return null;
});
//examples coming from http://www.html5rocks.com/en/tutorials/es6/promises/
function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });
}
function getJSON(url) {
    return get(url).then(JSON.parse);
}
function addHtmlToPage(html) {
}
function addTextToPage(text) {
}
getJSON('story.json').then(function (story) {
    addHtmlToPage(story.heading);
    // Map our array of chapter urls to
    // an array of chapter json promises.
    // This makes sure they all download parallel.
    return story.chapterUrls.map(getJSON)
        .reduce(function (sequence, chapterPromise) {
        // Use reduce to chain the promises together,
        // adding content to the page for each chapter
        return sequence.then(function () {
            // Wait for everything in the sequence so far,
            // then wait for this chapter to arrive.
            return chapterPromise;
        }).then(function (chapter) {
            addHtmlToPage(chapter.html);
        });
    }, Promise.resolve());
}).then(function () {
    addTextToPage("All done");
}).catch(function (err) {
    // catch any error that happened along the way
    addTextToPage("Argh, broken: " + err.message);
}).then(function () {
    document.querySelector('.spinner').style.display = 'none';
});
function f1() {
    return Promise.resolve({ __t1: "foo_t1" });
}
function f2(x) {
    return { __t2: x.__t1 + ":foo_21" };
}
var x3 = f1()
    .then(f2, (e) => {
    console.log("error 1");
    throw e;
})
    .then((x) => {
    return { __t3: x.__t2 + "bar" };
});
//# sourceMappingURL=es6-promise-tests.js.map