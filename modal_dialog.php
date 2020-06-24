<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

 

  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="mydialogexample.js"></script>
</head>
<body>
<div class="container">
  <h2>Modal Dialog Example</h2>
  <!-- Universal Modal -->
 <h4>Student Number: <input type="text" name="student_number">
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" id="searchBtn_studentNum">Search Student</button> </h4>
<div class="modal fade" id="universalModal" tabindex="-1" role="dialog" aria-labelledby="universalModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="width:1000px;">                                     
    <div class="modal-content">
      <form role="form" id="universalModalForm">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only"> Close</span></button>
          <h4 class="modal-title"><span class="glyphicon glyphicon-pencil"></span> Edit<span class="modal-title">.model-title</span></h4>
        </div>
        <div class="alert alert-danger fade in" id="universalModal-alert" style="display: none;">
          <span class="alert-body"></span>
        </div>
        <div class="modal-body">.modal-body</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary" id="submitBtn"></button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- Result Modal-->
<textarea id="searchResultForm" style="display:none">
  <table class="table table-striped table-hover" >
    <tbody>
        <tr>
            <td><b>Last Name: </b></td>
            <td> <input type="text" name="lname">
            </td>

            <td><b>First Name:</b> </td>
            <td> <input type="text" name="fname"></td>
           
        </tr>   </tr>
    </tbody>
  </table>   
</textarea>
  <!-- Trigger the modal with a button -->
</div>
</body>
</html>