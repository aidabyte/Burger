// Make sure we wait to attach our handlers until the DOM is fully loaded.
 $(function() {
    $(".burgereaten").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: 1
        
      };
  
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("burger devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function(response) {
          console.log("created new burger");
          console.log(response);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
        }
      );

      $(".deleteburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
          type: "DELETE",
          data: "/api/burgers/" +id
        }).then(location.reload()) 

        }

      );
  
    
  