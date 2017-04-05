
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
                    <td></td>

                    <td class="btn btn-default actionButton" onclick="location.href='viewSurveyV2.html';"> View Questionnaire </td>

                    <td><input type="checkbox" name="record"></td>
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
                    <td></td>

                    <td class="btn btn-default actionButton" onclick="location.href='viewexamV2.html';"> View Questionnaire </td>

                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#examTable > tbody").append(addExam);
    };

    populateExams();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#examTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let exams = JSON.parse(localStorage.getItem('exams'));

                exams.splice(index, 1);

                localStorage.setItem('exams', JSON.stringify(exams));

                $row.remove();

            }
        });
    });
}); 






//Clear local Storage
$(document).on('click', '#clearSystem', function() 
{
        localStorage.clear();
});