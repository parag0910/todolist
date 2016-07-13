/*function del(e,item){
    var id= this.id;
    e.preventDefault();
    $('#'+id).parent().fadeOut('slow', function(){
        $('#'+id).parent().remove();
    });
}*/
function completeTodoItem() {
    $(this).parent().toggleClass("strike");
}

$(document).ready(function() {
    var i=0;
    $('button').on('click', function(e){
        e.preventDefault();

    });

$('.btn').on('click',function()
{
    var toAdd = $('input[name=message]').val();
    $("#messages").append("<li> <input type='checkbox'  " +
    " name='todoname'" + "class='todoname'" + "value='" + toAdd + "'/>" +
    toAdd + "<input type='button'  value='DELETE' class='del-btn' id="+ i +"/>" + "</li>");

    $(".input-box").val("");
    i++;

});

$(document).on('click','.del-btn', function(){

    var i = 0;
    if(i == 0){
        var id = this.id;
        alert(id);
    }

});

$(document).on('click', ".todoname", completeTodoItem)

});






