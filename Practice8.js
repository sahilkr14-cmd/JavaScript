// Loop through array and print only values > 50 from this array:

let scores = [10, 80, 55, 30, 100];
for (let i = 1; i<scores.length; i++){
    if (scores[i]>50){
        console.log(scores[i])
    }
}

// More Shorter

scores.forEach(function(score){
    if (score > 50){
        console.log(score)
    }
})