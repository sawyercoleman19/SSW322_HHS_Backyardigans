
//STORING NEW Exams
$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').on("submit", function(e) { 
        e.preventDefault();
        var data = {
            name: $('#examName').val(),
            type: $('#examType').val(),
        };
        console.log(data);

        var newExams = localStorage.getItem('exams');
        if (newExams === null){
            newExams = [];
        }
        else{
            newExams = JSON.parse(newExams);
        }

        newExams.push(data);

        localStorage.setItem('exams', JSON.stringify(newExams));

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
                    <td>A. ${multipleChoice[i].option1} <br>
                        B. ${multipleChoice[i].option2} <br>
                        C. ${multipleChoice[i].option3} <br>
                        D. ${multipleChoice[i].option4}</td>
                    
                    <td>${multipleChoice[i].correct}</td>

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
                    <td>A. ${trueFalse[i].option1} <br>
                        B. ${trueFalse[i].option2} </td>

                    <td>${trueFalse[i].correct}</td>
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

                    <td>${shortAnswer[i].correct}</td>
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

                    <td>${essay[i].correct}</td>
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

// ADDING MATCHING
$(document).ready(function(){
    function populateQuestions() {
        let matching = localStorage.getItem('matching');

        if (!matching) return;

        matching = JSON.parse(matching);

        let addMatching = "" ;

        for (let i in matching){
            addMatching += (`
                <tr data-index="${i}">
                    <td>Matching</td>
                    <td>${matching[i].questionText}</td>
                    <td><div id="span1">1. ${matching[i].option1}</div><div id="span2"> A. ${matching[i].option11}</div><br>
                        <div id="span1">2. ${matching[i].option2}</div><div id="span2"> B. ${matching[i].option12}</div><br>
                        <div id="span1">3. ${matching[i].option3}</div><div id="span2"> C. ${matching[i].option13}</div><br>
                        <div id="span1">4. ${matching[i].option4}</div><div id="span2"> D. ${matching[i].option14}</div><br>
                        <div id="span1">5. ${matching[i].option5}</div><div id="span2"> E. ${matching[i].option15}</div><br>
                        <div id="span1">6. ${matching[i].option6}</div><div id="span2"> F. ${matching[i].option16}</div><br>
                        <div id="span1">7. ${matching[i].option7}</div><div id="span2"> G. ${matching[i].option17}<br>
                        <div id="span1">8. ${matching[i].option8}</div><div id="span2"> H. ${matching[i].option18}</div><br>
                        <div id="span1">9. ${matching[i].option9}</div><div id="span2"> I. ${matching[i].option19}</div><br>
                        <div id="span1">10. ${matching[i].option10}</div><div id="span2"> J. ${matching[i].option20}</div></td>
                    <td>${matching[i].correct}</td>
                    <td><input type="checkbox" name="record"></td>
                </tr>
            `);
        };

        $("#questionTable > tbody").append(addMatching);
    };

    populateQuestions();

//             Find and remove selected table rows
    $(".delete-row").click(function(){
        $("#questionTable > tbody input[name=record]").each(function(){
            if($(this).is(":checked")){


                let $row = $(this).closest("tr");
                let index = parseInt($row.attr("data-index"));
                let matching = JSON.parse(localStorage.getItem('matching'));

                matching.splice(index, 1);
                localStorage.setItem('matching', JSON.stringify(matching));

                $row.remove();

            }
        });
    });
});
