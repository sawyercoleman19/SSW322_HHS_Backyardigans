
$(document).on('click', '#addMultiChoice', function() 
{
    $("#container").append('<div class="well"><h3>Multiple Choice</h3><form id="mcForm"> <div class="form-group"> <label>Question: </label> <input class="form-control" type="text" name="questionText" id="mcQuestion"> <br> <br> <br> <label>Multiple Choice Options</label> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 1</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option1" id="option1"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 2</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option2" id="option2"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 3</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option3" id="option3"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 4</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option4" id="option4"> </div> </div> <br></div> </form></div>');
});

$(document).on('click', '#addTF', function() 
{
    $("#container").append('<div class="well"><h3>True or False</h3><form id="tfForm"> <div class="form-group"> <label>Question: </label> <input class="form-control" type="text" name="questionText" id="tfQuestion" placeholder="Enter Prompt"> <br> <!-- To be used for taking the exam --> <h4>Options:</h4> <label>- True</label> <br> <label>- False</label> <br> </div></form></div>');
});

$(document).on('click', '#addSA', function() 
{
    $("#container").append('<div class="well"><h3>Short Answer</h3><form id="shortAnswerForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="saQuestion" placeholder="Enter Question"> <br> <input type="text" class="form-control" name="option1" id="option1" placeholder="25 Character Limit" disabled> <br> </div></form></div>');
});

$(document).on('click', '#addEssay', function() 
{
    $("#container").append('<div class="well"><h3>Essay</h3><form id="essayForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="essayQuestion" placeholder="Enter Question"> <br> <input type="text" class="form-control" name="option1" id="option1" placeholder="Minimum 50 Characters" disabled> <br> </div></form></div>');
});

$(document).on('click', '#addMatching', function() 
{
    $("#container").append('<div class="well"><h3>Matching</h3><div class="row" style="align: center"><form id="matchingForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="matchingQuestion" placeholder="Enter Question"> <br> <div class="well text-Center col-lg-6"> <h3>Match Set 1</h3> <div class="row"> <label for="example-text-input" class="col-form-label">Option 1</label> <input class="form-control" type="text" name="option1" id="option1M"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Option 1</label> <input class="form-control" type="text" name="option1" id="option2M"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Option 1</label> <input class="form-control" type="text" name="option1" id="option3M"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Option 1</label> <input class="form-control" type="text" name="option1" id="option4M"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Option 1</label> <input class="form-control" type="text" name="option1" id="option5M"> </div> </div> <div class="well text-Center col-lg-6" > <h3>Match Set 2</h3> <div class="row"> <label for="example-text-input" class="col-form-label">Match 1</label> <input class="form-control" type="text" name="option1" id="match1"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Match 2</label> <input class="form-control" type="text" name="option1" id="match2"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Match 3</label> <input class="form-control" type="text" name="option1" id="match3"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Match 4</label> <input class="form-control" type="text" name="option1" id="match4"> </div> <div class="row"> <label for="example-text-input" class="col-form-label">Match 5</label> <input class="form-control" type="text" name="option1" id="match5"> </div> </div> </div> </form> </div></div>');
});


$(document).on('click', '#addRanking', function() 
{
    $("#container").append('<div class="well"><h3>Ranking</h3><form id="myForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="rankingQuestion" placeholder="Enter Question"> <br> <label>Ranking Options</label> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 1</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option1" id="option1R"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 2</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option2" id="option2R"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 3</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option3" id="option3R"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 4</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option4" id="option4R"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 5</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option5" id="option5R"> </div> </div><br> </div> </form></div>');
});


//STORING NEW Surveys
$(document).on('click', '#saveSurvey', function(saveSurvey) 
{
        saveSurvey.preventDefault();
        var data = {
            name: $('#surveyName').val(),
            results: false
        };
        console.log(data);

        var newSurveys = localStorage.getItem('surveys');
        if (newSurveys === null){
            newSurveys = [];
        }
        else{
            newSurveys = JSON.parse(newSurveys);
        }

        newSurveys.push(data);

        localStorage.setItem('surveys', JSON.stringify(newSurveys)); 
});

//Multiple Choice
$(document).on('click', '#saveSurvey', function(getMultiData) 
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

                newMulti.push(multiData);
                
                localStorage.setItem('multipleChoice', JSON.stringify(newMulti));
});


//True or False
$(document).on('click', '#saveSurvey', function(getTFData) 
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
                newTF.push(tfData);
                
                localStorage.setItem('trueFalse', JSON.stringify(newTF));
}); 

//Short Answer
$(document).on('click', '#saveSurvey', function(getSAData) 
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
                newSA.push(saData);
                
                localStorage.setItem('shortAnswer', JSON.stringify(newSA));
});

//Essay
$(document).on('click', '#saveSurvey', function(getEssayData) 
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
                newEssay.push(essayData);
                
                localStorage.setItem('essay', JSON.stringify(newEssay));
});

//Ranking
$(document).on('click', '#saveSurvey', function(getRankingData) 
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
                newRanking.push(rankingData);
                
                localStorage.setItem('ranking', JSON.stringify(newRanking));
});

//Matching
$(document).on('click', '#saveSurvey', function(getMatching) { 
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
                newMatching.push(matchingData);
                
                localStorage.setItem('matching', JSON.stringify(newMatching));
    });
