// star of dom

// display the numbers and the answer
$(document).ready(function(calcul) {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
        var value = $(this).val();
        $('#answer').val($('#answer').val() + value);   
    });

// Provides the answer
    $('#AC').click(function(){
        $('#answer').val('');
        $('#operation').val('');
        $('#operation').removeClass('answerGo');
        $('#equals').attr('onclick','');
    });

    $('#plus').click(function(calcul) { 
    
        if($('#answer').val() == ''){
            return false;
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'answerGo') {
            $('#operation').val( $('#operation').val() + $('#plus').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#subtract').click(function(calcul) { 
    
        if($('#answer').val() == ''){
            return false;   
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'answerGo') {
            $('#operation').val( $('#operation').val() + $('#subtract').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#divide').click(function(calcul) { 
    
        if($('#answer').val() == ''){
            return false;   
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'activeAnswer') {
            $('#operation').val( $('#operation').val() + $('#divide').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });

    $('#product').click(function(calcul) { 
    
        if($('#answer').val() == ''){
            return false;   
            $('#equals').attr('onclick','');
        }
        else if ( $('#operation').attr('class') == 'answerGo') {
            $('#operation').val( $('#operation').val() + $('#product').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else{
            $('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
    });
     
    $('#equals').click(function(){
        
        if($('#equals').attr('onclick') != 'return false'){
        
            var a = $('#answer').val();
            var b = $('#operation').val();
            var c = b.concat(a);
            $('#answer').val(eval(c));
            $('#operation').val(eval(c));
            $('#operation').addClass('answerGo');
            $('#equals').attr('onclick','return false');
        
        }
    });
});
// end of dom