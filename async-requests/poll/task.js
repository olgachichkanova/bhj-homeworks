const pollTitle = document.getElementById('poll__title');

const pollAnswers = document.getElementById('poll__answers');

//create answer template
const createAnswers = ((answer) => {
    const template = document.createElement('button');
    template.classList = 'poll__answer';
    template.innerText = answer;

    return template.outerHTML;
})

//create request
let request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
request.send();

function onLoad() {
    if (request.readyState === 4 && request.status === 200) {
        foo(JSON.parse(request.responseText));
    } else if (request.readyState !== 4 && request.status !== 200) {
        console.log(`Ответ ${request.status}: ${request.statusText}`);
    }
}
//download poll
function foo(text) {
    console.log(text);
    let title = text.data.title;

    let answers = text.data.answers;

    pollTitle.innerText = title;
    
    for(let item of answers) {

            pollAnswers.insertAdjacentHTML('afterbegin', createAnswers(item));
        };
    const pollAnswer = pollAnswers.getElementsByClassName('poll__answer');

    for (let button of pollAnswer) {
        button.addEventListener('click', e => {
            e.preventDefault();
            alert('Спасибо, ваш голос засчитан');
        })
    }

     let requestPost = new XMLHttpRequest();
            requestPost.addEventListener('load', () => {
                if (requestPost.readyState === 4 && requestPost.status === 200) {
                fooPost(JSON.parse(requestPost.responseText));
                } else if (requestPost.readyState !== 4 && requestPost.status !== 200) {
                console.log(`Ответ ${requestPost.status}: ${requestPost.statusText}`);
                }
            });
            requestPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
            requestPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            requestPost.send('vote=data.id&answer=item');


            function fooPost(dataPost) {
                let answers = dataPost;
                console.log(answers);
            }
};
