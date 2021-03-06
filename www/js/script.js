// $(document).ready(function () {
$(document).on("shiny:connected", function (event) { // Make sure the Shiny connection is established
    $("#test").html("<button type=\"button\" id=\"testButton\" name=\"testButton\" class=\"action-button\">Test</button>");
  Shiny.bindAll();
  doWork();
});

function doWork() {
  var authTokenInput = $("#authTokenInput");
  var loadDataButton = $("#loadDataButton");
  var connectionFeedback = $("#connectionFeedback");

  $("#submitButton").click(function (e) {
    var url = $("#url").val() + "/auth/login";
    var username = $("#username").val();
    var password = $("#password").val();
    var project_name = $("#projectName").val();

    var authToken;

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: url,
      data: {
        username: username,
        password: password,
        project_name: project_name,
        login_mode: 8
      },
      success: function (data, textStatus, jqXHR) {
        authToken = jqXHR.getResponseHeader("X-MSTR-AuthToken");
        authTokenInput.val(authToken);
        loadDataButton.prop("disabled", false);
        connectionFeedback.html("Authorization token: " + authToken);
        Shiny.setInputValue("authToken", authToken);
      },
      error: function (data) {
        connectionFeedback.html("Connection failed. Check your credentials.");
      },
      complete: function () { }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
  });

  // Necessary, as it requires a double click on the button to fire the event
  loadDataButton.click(function (e) {
    $(this).click();
  });

  // $("#test").html("<button type=\"button\" id=\"testButton\" name=\"testButton\" class=\"action-button\">Test</button>");
}
