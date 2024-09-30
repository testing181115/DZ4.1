function checkProbabilityTheory(count) {
    var nonEvenNumberCount = 0;
    var evenNumberCount = 0;
    var probabilityResult;
    for (var i = 0; i < count; i++) {
        var randomNumber = 100 + Math.floor(Math.random() * 900);
        console.log("Random number: " + randomNumber);
        randomNumber % 2 == 0 ? ++evenNumberCount : ++nonEvenNumberCount;
    }
    console.log("nonEvenNumberCount: " + nonEvenNumberCount);
    console.log("eventNumberCount: " + evenNumberCount);

    if (nonEvenNumberCount > evenNumberCount) {
        console.log("nonEvenNumberCount > evenNumberCount");
        probabilityResult = evenNumberCount / nonEvenNumberCount * 100;
    } else {
        console.log("nonEvenNumberCount <= evenNumberCount");
        probabilityResult = nonEvenNumberCount / evenNumberCount  * 100;
    }
    console.log("Probability: " + probabilityResult);
  }

checkProbabilityTheory(10);