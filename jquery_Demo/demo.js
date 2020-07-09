const colors=['blueviolet','darkblue','salmon','seagreen','steelblue','teal','tomato','slateblue'];
$(document).ready(function(){
    $('form[name=stdDetails]').after('<div class="content"></div>');
    $('.content').append('<ul id="listItems"></ul>');
    $('#btnSubmit').prop('disabled',true);
    $('#userName').on('keyup',function(){
        if($(this).val()!==''){
            $('#btnSubmit').prop('disabled',false);
        }else{
            $('#btnSubmit').prop('disabled',true);        }
    });
    $('#btnSubmit').on('click',function(e){
        e.preventDefault();
        let username=$('#userName').val();
        $('#listItems').append('<li>'+username+'</li>');
        $('#listItems > li').on('click',function(){
            let randomColor=Math.floor(Math.random()*8+0);
            $(this).css('color',colors[randomColor]);
        });
        $('#listItems > li').on('dblclick',function(){
            $(this).remove();
        });      
    });
  
});