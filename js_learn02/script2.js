(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' - ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans == this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('wrong answer, try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('current score is: ' + score);
        console.log('-----------------------------------');
    }
    
    
    var q1 = new Question('Is js the coolest programming language in the world ?', ['yes', 'no'], 0);
    var q2 = new Question('What is the name of your lover ?', ['tutku', 'busra'], 1);
    var q3 = new Question('what does best describe your love?', ['boring', 'hard', 'fun', 'tediuos'], 2);

    var questions = [q1, q2, q3];


    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('please select the corrrect answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();