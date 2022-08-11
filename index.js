
function runFiveMiles() {
    console.log("Go for a five-mile run")
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}



function receivesAFunction(callBackFunction) {
    callBackFunction()
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is from a named function")
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("This is from an anonymous function")
} 