
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

                    <td class="btn btn-default actionButton" onclick="location.href='viewsurvey.html';"> View Questionnaire </td>

                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#surveyTable > tbody").append(addSurvey);
    };

    populateSurveys();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#surveyTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let surveys = JSON.parse(localStorage.getItem('surveys'));

                surveys.splice(index, 1);

                localStorage.setItem('surveys', JSON.stringify(surveys));

                $row.remove();

            }
        });
    });

    $(".clear-all").click(function(){

        localStorage.clear();

    });
    let surveys = localStorage.getItem('surveys');
    Parsedsurveys = JSON.parse(surveys);

    console.log(Parsedsurveys);
    for (i = 0; i < dbsurvey.length - 1; i++){
    var dbname = Parsedsurveys[i].name;
    console.log(dbname);
    }
    console.log(Object.keys(Parsedsurveys).length);
    
    //Firebase reference
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Survey").set(dbname);

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

                    <td class="btn btn-default actionButton" onclick="location.href='viewexam.html';"> View Questionnaire </td>

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

    $(".clear-all").click(function(){

        localStorage.clear();

    });
}); 