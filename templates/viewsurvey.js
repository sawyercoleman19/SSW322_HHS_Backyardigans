//STORING NEW SURVEYS
$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').on("submit", function(e) { 
        e.preventDefault();
        var data = {
            name: $('#surveyName').val(),
            date: $('#surveyDate').val(),
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
});

// ADDING MULTIPLE CHOICE      
$(document).ready(function(){
    function populateQuestions() {
        let multipleChoice = localStorage.getItem('multipleChoice');

        if (!multipleChoice) return;

        multipleChoice = JSON.parse(multipleChoice);

        let addMultipleChoice = "" ;

        for (let i in multipleChoice){
            addMultipleChoice += (`
                <tr data-index="${i}">
                    <td>Multiple Choice</td>
                    <td>${multipleChoice[i].questionText}</td>
                    <td>A: ${multipleChoice[i].option1} <br>
                        B: ${multipleChoice[i].option2} <br>
                        C: ${multipleChoice[i].option3} <br>
                        D: ${multipleChoice[i].option4}</td>


                    <td class="btn btn-default actionButton" style="margin-right: 90px"> Edit </td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addMultipleChoice);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let multipleChoice = JSON.parse(localStorage.getItem('multipleChoice'));

                multipleChoice.splice(index, 1);

                localStorage.setItem('multipleChoice', JSON.stringify(multipleChoice));

                $row.remove();

            }
        });
    });
});

//ADDING T/F
$(document).ready(function(){
    function populateQuestions() {
        let trueFalse = localStorage.getItem('trueFalse');

        if (!trueFalse) return;

        trueFalse = JSON.parse(trueFalse);

        let addTrueFalse = "" ;

        for (let i in trueFalse){
            addTrueFalse += (`
                <tr data-index="${i}">
                    <td>True or False</td>
                    <td>${trueFalse[i].questionText}</td>
                    <td>A: ${trueFalse[i].option1} <br>
                        B: ${trueFalse[i].option2} </td>

                    <td class="btn btn-default actionButton" style="margin-right: 90px"> Edit </td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addTrueFalse);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let trueFalse = JSON.parse(localStorage.getItem('trueFalse'));

                trueFalse.splice(index, 1);
                localStorage.setItem('trueFalse', JSON.stringify(trueFalse));

                $row.remove();

            }
        });
    });
});


//ADDING RATING
$(document).ready(function(){
    function populateQuestions() {
        let rating = localStorage.getItem('rating');

        if (!rating) return;

        rating = JSON.parse(rating);

        let addRating = "" ;

        for (let i in rating){
            addRating += (`
                <tr data-index="${i}">
                    <td>Rating</td>
                    <td>${rating[i].questionText}</td>
                    <td>A: ${rating[i].option1} <br>
                        B: ${rating[i].option2} <br>
                        C: ${rating[i].option3} <br>
                        D: ${rating[i].option4} <br>
                        E: ${rating[i].option5} </td>


                    <td class="btn btn-default actionButton" style="margin-right: 90px"> Edit </td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addRating);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let rating = JSON.parse(localStorage.getItem('rating'));

                trueFalse.splice(index, 1);
                localStorage.setItem('rating', JSON.stringify(rating));

                $row.remove();

            }
        });
    });
});

// ADDING SHORT ANSWER
$(document).ready(function(){
    function populateQuestions() {
        let shortAnswer = localStorage.getItem('shortAnswer');

        if (!shortAnswer) return;

        shortAnswer = JSON.parse(shortAnswer);

        let addShortAnswer = "" ;

        for (let i in shortAnswer){
            addShortAnswer += (`
                <tr data-index="${i}">
                    <td>Short Answer</td>
                    <td>${shortAnswer[i].questionText}</td>
                    <td> N/A </td>

                    <td class="btn btn-default actionButton" style="margin-right: 90px"> Edit </td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addShortAnswer);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let shortAnswer = JSON.parse(localStorage.getItem('shortAnswer'));

                shortAnswer.splice(index, 1);
                localStorage.setItem('shortAnswer', JSON.stringify(shortAnswer));

                $row.remove();

            }
        });
    });
});


// ADDING ESSAY
$(document).ready(function(){
    function populateQuestions() {
        let essay = localStorage.getItem('essay');

        if (!essay) return;

        essay = JSON.parse(essay);

        let addEssay = "" ;

        for (let i in essay){
            addEssay += (`
                <tr data-index="${i}">
                    <td>Essay</td>
                    <td>${essay[i].questionText}</td>
                    <td> N/A </td>

                    <td class="btn btn-default actionButton" style="margin-right: 90px"> Edit </td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addEssay);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let essay = JSON.parse(localStorage.getItem('essay'));

                essay.splice(index, 1);
                localStorage.setItem('essay', JSON.stringify(essay));

                $row.remove();

            }
        });
    });
});
