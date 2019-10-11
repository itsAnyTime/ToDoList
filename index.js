$(function() {
			$("#add").on("click", function() {

				// get input
				var val = $("input").val();
				
				// if form is not empty
				if(val !== '') {
				    
				   // create list item
				   var elem = $("<li></li>").text(val);
				  
				  // append trash img after list element
				  // $(elem).append("<button class='rem'>x</button> ");
				   $(elem).append(" <i id='rem far fa-trash-alt'></i> ");

					// append element on mylist
					$("#mylist").append(elem);

					//clears the input
					$("input").val("");
					
					// handle the click event on class rem
					$("#rem").one("click",function() { // one doesnt working too

						// ask for confirmation
						let cont = confirm('Continue?');

						// if pressing ok
						if(cont) {			

						// deletes the selected x value
						$(this).parent().remove();
						$("#rem").off("click"); 
						return true;
						} 
						// otherwise cancel.
						event.preventDefault();
					});
				   }
				   else {
				       alert("Nothing to do? NICE :D");
				   }
				   
			});
		
			// enter to submit, instead of pressing add
			$("input").keyup(function(event){
			if(event.which==13){
				$("#add").click();
				}  
			});
			
			// clear all entrys
			$("#del").click(function() {
            let listItems = $('#mylist li');
            if(listItems.length) {
                listItems.remove();
            } else {
                alert('Nothing to delete.');
            }
    });
		
		});
