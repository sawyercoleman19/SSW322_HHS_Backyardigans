//<!-- ADD / REMOVE SURVEY ROWS-->        
$(document).ready(function(){
    function populateSurveys() {
        let surveys = localStorage.getItem('surveys');

        if (!surveys) return;

        surveys = JSON.parse(surveys);

        let addSurvey = "" ;

        for (let i in surveys){
            addSurvey += (`
                <tr data-index="${i}">
                    <td>${surveys[i].name}</td>

                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='viewSurveyV2.html';"> View Questionnaire </td>
                    
                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='takeSurvey.html';"> Take Questionnaire </td>
                </tr>
            `);
        };

        $("#surveyTable > tbody").append(addSurvey);
    };

    populateSurveys();

}); 


//<!-- ADD / REMOVE EXAM ROWS-->  
$(document).ready(function(){
    function populateExams() {
        let exams = localStorage.getItem('exams');

        if (!exams) return;

        exams = JSON.parse(exams);

        let addExam = "" ;

        for (let i in exams){
            addExam += (`
                <tr data-index="${i}">
                    <td>${exams[i].name}</td>

                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='viewExamV2.html'"> View Questionnaire </td>
                    
                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='takeExam.html'"> Take Questionnaire </td>
                </tr>
            `);
        };

        $("#examTable > tbody").append(addExam);
    };

    populateExams();

}); 

//<!-- ADD RESULTS ROWS-->  
$(document).ready(function(){
    function populateResults() {
        let results = localStorage.getItem('results');

        if (!results) return;

        results = JSON.parse(results);

        let addResults = "" ;

        for (let i in results){
            addResults += (`
                <tr data-index="${i}">
                    <td>${results[i].name}</td>
                    <td></td>
                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='resultsExam.html'"> View Results </td>
                </tr>
            `);
        };

        $("#resultsTable > tbody").append(addResults);
    };

    populateResults();

});

//<!-- ADD RESULTS ROWS-->  
$(document).ready(function(){
    function populateResults() {
        let surveyResults = localStorage.getItem('surveyResults');

        if (!surveyResults) return;

        surveyResults = JSON.parse(surveyResults);

        let addResults = "" ;

        for (let i in surveyResults){
            addResults += (`
                <tr data-index="${i}">
                    <td>${surveyResults[i].name}</td>
                    <td></td>
                    <td class="btn btn-default actionButton" style="margin-left:200px" onclick="location.href='resultsSurvey.html'"> View Results </td>
                </tr>
            `);
        };

        $("#resultsTable > tbody").append(addResults);
    };

    populateResults();

});






//Clear local Storage
$(document).on('click', '#clearSystem', function() 
{
        localStorage.clear();
});