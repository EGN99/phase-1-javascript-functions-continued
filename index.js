function saturdayFun (activity){
    if (activity===undefined) {
        console.log(`This Saturday, I Will roller-skate!`)
    }else {
        console.log(`This Saturday, I Will ${activity}!`)
    }
 }
saturdayFun("bathe my dog");


function mondayWork (activity) {
    if (activity===undefined) {
        let activity = "go to the office"
    console.log (`This Monday, I will ${activity}.`);
}else {
    console.log (`This Monday, I will ${activity}.`);
}
}
mondayWork("work from home");

function wrapAdjective(whatever = "*"){
    return function(adjective = "special"){
        return `You are ${whatever}${adjective}${whatever}!`
    }
}
