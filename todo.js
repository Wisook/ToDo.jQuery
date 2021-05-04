// TO00BL10-3011 Web sovellusten kehittäminen javascriptillä //
// Javascript tiedosto jQuery //
$(document).ready(function () {
    
    $(".add-items").submit(function(event){
      event.preventDefault();
      var item = $("#todo-list-item").val();
      if(item){
        if(item==""|| item.length < 3){
            alert("Kirjoitit liian vähän."); 
            console.log("Liian lyhyt teksti.");
        }
        else{
          $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a></li>");
        }
        $("#todo-list-item").val("");
      
    }
    });

    $(".checkbox").change(function(){
    console.log("Ok.");
    });

    $(document).on("change",".checkbox",function(){
        if($(this).attr("checked")){
          $(this).removeAttr("checked");
          $(this).parent().css('textDecoration','none');
         }else{
            $(this).attr("checked","checked");
            $(this).parent().css('textDecoration','line-through');
         }
        $(this).parent().toggleClass("completed");
        
    });

    $(document).on("click",".remove",function(){
        $(this).parent().fadeOut( "slow", function() {
              $(this).remove();
              localStorage.setItem("listItems",$("#list-items").html());
      });
  });
});