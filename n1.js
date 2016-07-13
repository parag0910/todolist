function add() {

       var toAdd = $('input[name=message]').val();
    if(toAdd!="") {
        $("#messages").append("<li> <input type='checkbox'  " +
        " name='todoname'" + "class='todoname'" + "value='" + toAdd + "'/>" +
        toAdd +"<input type='button'  value='DELETE' class='del-btn' />" + "</li>");
        $(".input-box").val("");
    }
    else {

        document.tdl.message.focus();
       document.getElementById("vi").innerHTML="Add Something To List"

    }

}
function del(item){
 //e.preventDefault();
 $(item).parent().fadeOut('slow', function(){
 $(item).parent().remove();
 });
 }
function completeTodoItem() {
    $(this).parent().toggleClass("strike");
}

$ (function() {
        $('.btn').on('click', function (e) {

            e.preventDefault();


                add();


        });
$("#messages").on('click','.del-btn', function(){





            var item = this;

        del(item);



    });

    $(document).on('click', ".todoname", completeTodoItem)

});









