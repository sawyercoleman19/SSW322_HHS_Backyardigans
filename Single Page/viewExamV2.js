

$(document).ready(function(){
    function populateExams() {
        let exams = localStorage.getItem('exams');

        if (!exams) return;

        exams = JSON.parse(exams);

        let addExam = "" ;

        for (let i in exams){
            addExam += (`
                <input class="form-control" type="text" name="name" id="examName" value="${exams[i].name}">
            `);
        };

        $("#nameContainer").append(addExam);
    };

    populateExams();

}); 


//STORING NEW Exams
$(document).on('click', '#saveExam', function(saveExam) 
{
        saveExam.preventDefault();
        var data = {
            name: $('#examName').val(),
            results: true
        };
        console.log(data);

        var newExams = localStorage.getItem('exams');
        if (newExams === null){
            newExams = [];
        }
        else{
            newExams = JSON.parse(newExams);
        }
        newExams=[];
        newExams.push(data);

        localStorage.setItem('exams', JSON.stringify(newExams)); 
});

// Adding MC    
$(document).ready(function(){
    function populateQuestions() {
        let multipleChoice = localStorage.getItem('multipleChoice');

        multipleChoice = JSON.parse(multipleChoice);

        let addMultipleChoice = "" ;

        for (let i in multipleChoice){
            if (!multipleChoice[i].questionText) return;
        
            addMultipleChoice += (`
                <div class="well">
                <h3>Multiple Choice</h3>
                <form id="mcForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input class="form-control" type="text" name="questionText" id="mcQuestion" value="${multipleChoice[i].questionText}">

                        <br>
                        <br>
                        <br>

                        <label>Multiple Choice Options</label>

                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 1</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option1" id="option1" value="${multipleChoice[i].option1}">
                            </div>
                        </div>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 2</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option2" id="option2" value="${multipleChoice[i].option2}">
                            </div>
                        </div>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 3</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option3" id="option3" value="${multipleChoice[i].option3}">
                            </div>
                        </div>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 4</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option4" id="option4" value="${multipleChoice[i].option4}">
                            </div>
                        </div>

                        <br>
                        <br>

                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Select Correct Answer:  </label>

                            <div class="col-lg-9">
                                <select class="form-control" type="text" name="correct" id="mcAnswer" placeholder="Please type in the correct answer text">
                                    <option selected>Correct: ${multipleChoice[i].correct}</option>
                                    <option value="Option 1">Option 1</option>
                                    <option value="Option 2">Option 2</option>
                                    <option value="Option 3">Option 3</option>
                                    <option value="Option 4">Option 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            `);
        };

        $("#container").append(addMultipleChoice);
    };

    populateQuestions();

});

//ADDING T/F
$(document).ready(function(){
    function populateQuestions() {
        let trueFalse = localStorage.getItem('trueFalse');

        trueFalse = JSON.parse(trueFalse);

        let addTrueFalse = "" ;

        for (let i in trueFalse){
            if (!trueFalse[i].questionText) return;
            addTrueFalse += (`
                <div class="well">
                <h3>True or False</h3>
                <form id="tfForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input class="form-control" type="text" name="questionText" id="tfQuestion" placeholder="Enter Prompt" value="${trueFalse[i].questionText}">

                        <br>

            <!--    To be used for taking the exam      -->
                        <h4>Options:</h4>
                        <label>- True</label>
                        <br>
                        <label>- False</label>


                        <br> 
                        <br>
                        <br>

                  <div class="row">

                            <label for="example-text-input" class="col-lg-2 col-form-label">Select Correct Answer: </label>
                            <div class="col-lg-9">
                                <select class="form-control" type="text" name="correct" id="tfAnswer">
                                    <option selected>Correct: ${trueFalse[i].correct}</option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>

                                </select>
                            </div>
                        </div>
                    </br>
                </div>
            </form>
            </div>
            `);
        };

        $("#container").append(addTrueFalse);
    };

    populateQuestions();

});


// ADDING SHORT ANSWER
$(document).ready(function(){
    function populateQuestions() {
        let shortAnswer = localStorage.getItem('shortAnswer');

        shortAnswer = JSON.parse(shortAnswer);

        let addShortAnswer = "" ;

        for (let i in shortAnswer){
            if (!shortAnswer[i].questionText) return;
            addShortAnswer += (`
                <div class="well">
                <h3>Short Answer</h3>
                <form id="shortAnswerForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input type="text" class="form-control" name="questionText" id="saQuestion" placeholder="Enter Question" value="${shortAnswer[i].questionText}">

                        <br>

                        <input type="text" class="form-control" name="option1" id="option1" placeholder="25 Character Limit" disabled>
                        <br>
                        <br>

                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Enter Correct Answer: </label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="correct" id="saAnswer" value="${shortAnswer[i].correct}">
                            </div>"
                        </div>
                    </div>
                </form>
                </div>
            `);
        };

        $("#container").append(addShortAnswer);
    };

    populateQuestions();

});


// ADDING ESSAY
$(document).ready(function(){
    function populateQuestions() {
        let essay = localStorage.getItem('essay');

        essay = JSON.parse(essay);

        let addEssay = "" ;

        for (let i in essay){
            if (!essay[i].questionText) return;
            addEssay += (`
                <div class="well">
                <h3>Essay</h3>
                <form id="essayForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input type="text" class="form-control" name="questionText" id="essayQuestion" placeholder="Enter Question" value="${essay[i].questionText}">

                        <br>

                        <input type="text" class="form-control" name="option1" id="option1" placeholder="Minimum 50 Characters" disabled>
                        <br>
                        <br>

                    </div>
                </form>
                </div>
            `);
        };

        $("#container").append(addEssay);
    };

    populateQuestions();

});


//ADDING Ranking
$(document).ready(function(){
    function populateQuestions() {
        let ranking = localStorage.getItem('ranking');

        ranking = JSON.parse(ranking);

        let addRanking = "" ;

        for (let i in ranking){
            if (!ranking[i].questionText) return;
            addRanking += (`
                <div class="well">
                <h3>Ranking</h3>
                <form id="myForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input type="text" class="form-control" name="questionText" id="rankingQuestion" value="${ranking[i].questionText}">

                    <br>

                    <div class="text-center">
                        <table class="table table-hover" id="questionTable">
                            <thead>
                                <tr>
                                    <th>Options</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                      <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 1</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option1" id="option1R" value="${ranking[i].option1}">
                            </div>
                        </div>
                                  </td>
                                    <td>
                                      <select name="Rank1" id="rank1">
                                        <option selected>Correct: ${ranking[i].rank1}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </td>
                                </tr>
                              <tr>
                                    <td>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 2</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option2" id="option2R" value="${ranking[i].option2}">
                            </div>
                        </div>
                                    </td>
                                    <td>
                                      <select name="Rank2" id="rank2">
                                        <option selected>Correct: ${ranking[i].rank2}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </td>
                                </tr>
                              <tr>
                                    <td>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 3</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option3" id="option3R" value="${ranking[i].option3}">
                            </div>
                        </div>
                                    </td>
                                    <td>
                                      <select name="Rank3" id="rank3">
                                        <option selected>Correct: ${ranking[i].rank3}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 4</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option4" id="option4R" value="${ranking[i].option4}">
                            </div>
                        </div>
                                    </td>
                                    <td>
                                      <select name="Rank4" id="rank4">
                                        <option selected>Correct: ${ranking[i].rank4}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </td>
                                </tr>
                                    <tr>
                                    <td>
                        <div class="row">
                            <label for="example-text-input" class="col-lg-2 col-form-label">Option 5</label>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" name="option5" id="option5R" value="${ranking[i].option5}">
                            </div>
                        </div>
                                    </td>
                                    <td>
                                      <select name="Rank5" id="rank5">
                                        <option selected>Correct: ${ranking[i].rank5}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                      <br>
                    </div>
                </form>
            </div>
            `);
        };

        $("#container").append(addRanking);
    };

    populateQuestions();

});


//ADDING Matching
$(document).ready(function(){
    function populateQuestions() {
        let matching = localStorage.getItem('matching');

        matching = JSON.parse(matching);

        let addMatching = "" ;

        for (let i in matching){
            if (!matching[i].questionText) return;
            addMatching += (`
                <div class="well">
                <h3>Matching</h3>
                <form id="matchingForm"> 
                    <div class="form-group">
                        <label>Question: </label>
                        <input type="text" class="form-control" name="questionText" id="matchingQuestion" value="${matching[i].questionText}">

                        <br>
                        <div class='row'>
                            <div class="well text-Center col-lg-6">
                                <h3>Match Set 1</h3>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Option 1</label>
                                    <input class="form-control" type="text" name="option1" id="option1M" value="${matching[i].option1}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Option 2</label>
                                    <input class="form-control" type="text" name="option2" id="option2M" value="${matching[i].option2}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Option 3</label>
                                    <input class="form-control" type="text" name="option3" id="option3M" value="${matching[i].option3}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Option 4</label>
                                    <input class="form-control" type="text" name="option4" id="option4M" value="${matching[i].option4}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Option 5</label>
                                    <input class="form-control" type="text" name="option5" id="option5M" value="${matching[i].option5}">
                                </div>

                            </div>

                            <div class="well text-Center col-lg-6">
                                <h3>Match Set 2</h3>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Match 1</label>
                                    <input class="form-control" type="text" name="option1" id="match1" value="${matching[i].match1}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Match 2</label>
                                    <input class="form-control" type="text" name="option1" id="match2" value="${matching[i].match2}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Match 3</label>
                                    <input class="form-control" type="text" name="option1" id="match3" value="${matching[i].match3}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Match 4</label>
                                    <input class="form-control" type="text" name="option1" id="match4" value="${matching[i].match4}">
                                </div>
                                <div class="row">
                                    <label for="example-text-input" class="col-form-label">Match 5</label>
                                    <input class="form-control" type="text" name="option1" id="match5" value="${matching[i].match5}">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            `);
        };

        $("#container").append(addMatching);
    };

    populateQuestions();

});




//Multiple Choice
$(document).on('click', '#saveExam', function(getMultiData) 
{
    getMultiData.preventDefault();
                var multiData = {
                    questionText: $('#mcQuestion').val(),
                    option1: $('#option1').val(),
                    option2: $('#option2').val(),
                    option3: $('#option3').val(),
                    option4: $('#option4').val(),
                    
                    correct: $('#mcAnswer').val()
                };
                console.log(multiData);
                
                var newMulti = localStorage.getItem('multipleChoice');
                if (newMulti === null){
                    newMulti = [];
                }
                else{
                    newMulti = JSON.parse(newMulti);
                }
                newMulti = [];
                newMulti.push(multiData);
                
                localStorage.setItem('multipleChoice', JSON.stringify(newMulti));
});


//True or False
$(document).on('click', '#saveExam', function(getTFData) 
{
    getTFData.preventDefault();
                var tfData = {
                    questionText: $('#tfQuestion').val(),
                    correct: $('#tfAnswer').val()
                };
                console.log(tfData);
                
                var newTF = localStorage.getItem('trueFalse');
                if (newTF === null){
                    newTF = [];
                }
                else{
                    newTF = JSON.parse(newTF);
                }
                
                newTF=[];
                newTF.push(tfData);
                
                localStorage.setItem('trueFalse', JSON.stringify(newTF));
}); 

//Short Answer
$(document).on('click', '#saveExam', function(getSAData) 
{
    getSAData.preventDefault();
                var saData = {
                    questionText: $('#saQuestion').val(),
                  
                    correct: $('#saAnswer').val()
                };
                console.log(saData);
                
                var newSA = localStorage.getItem('shortAnswer');
                if (newSA === null){
                    newSA = [];
                }
                else{
                    newSA = JSON.parse(newSA);
                }
                
                newSA=[];
                newSA.push(saData);
                
                localStorage.setItem('shortAnswer', JSON.stringify(newSA));
});

//Essay
$(document).on('click', '#saveExam', function(getEssayData) 
{
    getEssayData.preventDefault();
                var essayData = {
                    questionText: $('#essayQuestion').val(),
                };
                console.log(essayData);
                
                var newEssay = localStorage.getItem('essay');
                if (newEssay === null){
                    newEssay = [];
                }
                else{
                    newEssay = JSON.parse(newEssay);
                }
                
                newEssay=[];
                newEssay.push(essayData);
                
                localStorage.setItem('essay', JSON.stringify(newEssay));
});

//Ranking
$(document).on('click', '#saveExam', function(getRankingData) 
{
    getRankingData.preventDefault();
                var rankingData = {
                    questionText: $('#rankingQuestion').val(),
                    option1: $('#option1R').val(),
                    option2: $('#option2R').val(),
                    option3: $('#option3R').val(),
                    option4: $('#option4R').val(),
                    option5: $('#option5R').val(),
                    rank1: $('#rank1').val(),
                    rank2: $('#rank2').val(),
                    rank3: $('#rank3').val(),
                    rank4: $('#rank4').val(),
                    rank5: $('#rank5').val()
  
                };
                console.log(rankingData);
                
                var newRanking = localStorage.getItem('ranking');
                if (newRanking === null){
                    newRanking = [];
                }
                else{
                    newRanking = JSON.parse(newRanking);
                }
                
                newRanking=[];
                newRanking.push(rankingData);
                
                localStorage.setItem('ranking', JSON.stringify(newRanking));
});

//Matching
$(document).on('click', '#saveExam', function(getMatching) { 
    
    getMatching.preventDefault();
                var matchingData = {
                    questionText: $('#matchingQuestion').val(),
                    questionType: "Matching"
  
                };
                
                
                var matchingData = {
                    questionText: $('#matchingQuestion').val(),
                    option1: $('#option1M').val(),
                    option2: $('#option2M').val(),
                    option3: $('#option3M').val(),
                    option4: $('#option4M').val(),
                    option5: $('#option5M').val(),
                    match1: $('#match1').val(),
                    match2: $('#match2').val(),
                    match3: $('#match3').val(),
                    match4: $('#match4').val(),
                    match5: $('#match5').val()
  
                };
                console.log(matchingData);
                
                var newMatching = localStorage.getItem('matching');
                if (newMatching === null){
                    newMatching = [];
                }
                else{
                    newMatching = JSON.parse(newMatching);
                }
        
                newMatching=[];
                newMatching.push(matchingData);
                
                localStorage.setItem('matching', JSON.stringify(newMatching));
    });