var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's Study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's Study Git!");
    } else if (randomTopic === 'Javascript') {
        console.log ("Let's Study Javascript!");
    } else {
        console.log('Please try again!');
    }
}
console.log('Here are the topics we learned through Prework');
listTopics();
console.log('Which should we study first?');
selectTopic();