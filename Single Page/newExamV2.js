//$("#addButton").click(function () {
//  $("#container").append('<div class="module_holder"><div class="module_item"><p>NEW ONE</p></div></div>');
//});

$(document).on('click', '#addMultiChoice', function() 
{
    $("#container").append('<div class="well"><h3>Multiple Choice</h3><form id="mcForm"> <div class="form-group"> <label>Question: </label> <input class="form-control" type="text" name="questionText" id="mcQuestion"> <br> <br> <br> <label>Multiple Choice Options</label> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 1</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option1" id="option1"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 2</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option2" id="option2"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 3</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option3" id="option3"> </div> </div> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Option 4</label> <div class="col-lg-9"> <input class="form-control" type="text" name="option4" id="option4"> </div> </div> <br> <br> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Select Correct Answer: </label> <div class="col-lg-9"> <select class="form-control" type="text" name="correct" id="mcAnswer" placeholder="Please type in the correct answer text"> <option value="A">Option 1</option> <option value="B">Option 2</option> <option value="C">Option 3</option> <option value="D">Option 4</option> </select> </div> </div> </div> </form></div>');
});

$(document).on('click', '#addTF', function() 
{
    $("#container").append('<div class="well"><h3>True or False</h3><form id="tfForm"> <div class="form-group"> <label>Question: </label> <input class="form-control" type="text" name="questionText" id="tfQuestion" placeholder="Enter Prompt"> <br> <!-- To be used for taking the exam --> <h4>Options:</h4> <label>- True</label> <br> <label>- False</label> <br> <br> <br> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Select Correct Answer: </label> <div class="col-lg-9"> <select class="form-control" type="text" name="correct" id="tfAnswer" placeholder="Please type in the correct answer text"> <option value="True">True</option> <option value="False">False</option> </select> </div> </div> </br> </div></form></div>');
});

$(document).on('click', '#addSA', function() 
{
    $("#container").append('<div class="well"><h3>Short Answer</h3><form id="shortAnswerForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="saQuestion" placeholder="Enter Question"> <br> <input type="text" class="form-control" name="option1" id="option1" placeholder="25 Character Limit" disabled> <br> <br> <div class="row"> <label for="example-text-input" class="col-lg-2 col-form-label">Enter Correct Answer: </label> <div class="col-lg-9"> <input class="form-control" type="text" name="correct" id="saAnswer" placeholder="Please type in the correct answer"> </div> </div> </div></form></div>');
});

$(document).on('click', '#addEssay', function() 
{
    $("#container").append('<div class="well"><h3>Essay</h3><form id="essayForm"> <div class="form-group"> <label>Question: </label> <input type="text" class="form-control" name="questionText" id="essayQuestion" placeholder="Enter Question"> <br> <input type="text" class="form-control" name="option1" id="option1" placeholder="Minimum 50 Characters" disabled> <br> <br> </div></form></div>');
});

