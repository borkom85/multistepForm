$(document).ready(function(){
    // $('.step').on('click', function(){
    //     $('.step').removeClass('active');
    //     $(this).addClass('active');
    
    //     if($(this).find('span').text() == 1){
    //        $('#personal-info').css('display', 'flex');
    //        $('#plan').css('display', 'none')
    //        $('#add-ons').css('display', 'none')
    //        $('#finish').css('display', 'none')
    //     }else if($(this).find('span').text() == 2){
    //         $('#plan').css('display', 'flex');
    //         $('#personal-info').css('display', 'none');
    //         $('#add-ons').css('display', 'none')
    //          $('#finish').css('display', 'none')
    //     }else if($(this).find('span').text() == 3){
    //         $('#plan').css('display', 'none');
    //         $('#personal-info').css('display', 'none');
    //         $('#add-ons').css('display', 'flex')
    //         $('#finish').css('display', 'none')
    //     }else if($(this).find('span').text() == 4){
    //         $('#plan').css('display', 'none');
    //         $('#personal-info').css('display', 'none');
    //         $('#add-ons').css('display', 'none')
    //         $('#finish').css('display', 'flex');
    //         isfourth();
    //     }
    // })

    window.finalselection = 'Arcade';
    window.period = '';
    window.plan = '$9/mo';
    window.onlineVal = 0;
    window.storageVal = 0;
    window.profileVal = 0;
    var counter = 0;
    var counter1 = 0;
    var counter2 = 0;



    $('#step1plus').on('click', function(){
        $('#plan').css('display', 'flex');
        $('#personal-info').css('display', 'none');
        $('.step').removeClass('active');
        $('.step:nth-child(2)').addClass('active');
    })
   
    $('#switcher').on('change', function(){
        if($('#checkbox').is(':checked')){
            $('.toggle2').css({'color': 'rgb(74,124,176)', 'font-weight': 'bold'});
            $('.toggle1').css({'color': 'lightgray', 'font-weight': 'regular'});
            $('.arcade .price').text('$25/yr');
            $('.advanced .price').text('$66/yr');
            $('.pro .price').text('$99/yr');
            window.period = 1;
            var online = '+10/yr';
            var storage = '+20/yr';
            var profile = '+20/yr';
            // window.onlineVal = 10;
            // window.storageVal = 20;
            // window.profileVal = 20;
            $('#add-ons article:nth-child(1) span').text(online);
            $('#add-ons article:nth-child(2) span').text(storage);
            $('#add-ons article:nth-child(3) span').text(profile);
            window.plan = $('.plans .active').find('.price').text();
            window.finalselection = $('.plans .active').find('h4').text();
            
           
        }else{
            $('.toggle1').css({'color': 'rgb(74,124,176)', 'font-weight': 'bold'});
            $('.toggle2').css({'color': 'lightgray', 'font-weight': 'regular'});
            $('.arcade .price').text('$9/mo');
            $('.advanced .price').text('$12/mo');
            $('.pro .price').text('$15/mo');
            window.period = 0;
            var online = '+1/mo';
            var storage = '+2/mo';
            var profile = '+2/mo';
            $('#add-ons article:nth-child(1) span').text(online);
            $('#add-ons article:nth-child(2) span').text(storage);
            $('#add-ons article:nth-child(3) span').text(profile);
            window.plan = $('.plans .active').find('.price').text();
            window.finalselection = $('.plans .active').find('h4').text();
        }
    })


    $('.plans article').on('click', function(){
        $('.plans article').removeClass('active');
        $(this).addClass('active');
        window.finalselection = $(this).find('h4').text();
        window.plan = $(this).find('.price').text();
        
    })

    $('.prev').on('click',function(){
        $('#personal-info').css('display', 'flex');
        $('#plan').css('display', 'none');
        $('.step').removeClass('active');
        $('.step:nth-child(1)').addClass('active');
    })

    $('.next').on('click',function(){
        $('#add-ons').css('display', 'flex');
        $('#plan').css('display', 'none')
        $('.step').removeClass('active');
        $('.step:nth-child(3)').addClass('active');
    })

    $('.prev1').on('click',function(){
        $('#add-ons').css('display', 'none');
        $('#plan').css('display', 'flex');
        $('.step').removeClass('active');
        $('.step:nth-child(2)').addClass('active');
    })

    $('.next1').on('click',function(){
        $('#add-ons').css('display', 'none');
        $('#finish').css('display', 'flex')
        $('.step').removeClass('active');
        $('.step:nth-child(4)').addClass('active');
        isfourth();
        myFunc();
    })

    $('.prev2').on('click',function(){
        $('#add-ons').css('display', 'flex');
        $('#finish').css('display', 'none');
        $('.step').removeClass('active');
        $('.step:nth-child(3)').addClass('active');
        $('#additional').html('');
        counter = 0;
        counter1 = 0;
        counter2 = 0;
    })

    $('.next2').on('click',function(){
        $('#add-ons').css('display', 'none');
        $('#finish').css('display', 'none')
        $('.step').removeClass('active');
       // $('.step:nth-child(4)').addClass('active');
       $('#thankyou').css('display', 'flex');
    })

    // $('#add-ons input').on('change',myFunc())
    $('#onlineS').on('change',function(){
        if( $('#onlineS').is(':checked')){
            counter++;
       
            $('#add-ons article:nth-child(1)').addClass('active');
            if(period != 1){
                window.onlineVal = 1;
                $('#additional').append('<p>Online service <span>+$'+onlineVal+'/mo</span></p>')
                
                
            }else{
                window.onlineVal = 10;
                $('#additional').append('<p>Online service <span>+$'+onlineVal+'/yr</span></p>')
               
               
            }
           
            
        }else{
            $('#add-ons article:nth-child(1)').removeClass('active');
            window.onlineVal = 0;
            
        }
    })
    $('#largerSto').on('change',function(){
        if( $('#add-ons article:nth-child(2) input').is(':checked')){
            counter1++;
            $('#add-ons article:nth-child(2)').addClass('active');
            if(period != 1){
                window.storageVal = 2;
                $('#additional').append('<p>Larger storage <span>+$'+storageVal+'/mo</span></p>')
                
            }else{
                window.storageVal = 20;
                $('#additional').append('<p>Larger storage <span>+$'+storageVal+'/yr</span></p>')
               
            }
        }else{
            window.storageVal = 0;
            $('#add-ons article:nth-child(2)').removeClass('active');
            
        }
    })
    $('#custProfile').on('change',function(){
        if( $('#add-ons article:nth-child(3) input').is(':checked')){
            counter2++;
            $('#add-ons article:nth-child(3)').addClass('active');
            if(period != 1){
                window.profileVal = 2;
                $('#additional').append('<p>Customizable profile <span>+$'+profileVal+'/mo</span></p>')
              
            }else{
                window.profileVal = 20;
                $('#additional').append('<p>Customizable profile <span>+$'+profileVal+'/yr</span></p>')
                
            }
        }else{
            $('#add-ons article:nth-child(3)').removeClass('active');
            window.profileVal = 0;
        }
    })

    function myFunc(){
        if( counter == 0 && onlineVal != 0){
            
            //$('#add-ons article:nth-child(1)').addClass('active');
            if(period != 1){
                  window.onlineVal = 1;
                $('#additional').append('<p>Online service <span>+$'+onlineVal+'/mo</span></p>')
             
            }else{
                window.onlineVal = 10;

                $('#additional').append('<p>Online service <span>+$'+onlineVal+'/yr</span></p>')
                         }
           
            
        }
        
        if(counter1 == 0 && storageVal != 0){
            
           // $('#add-ons article:nth-child(2)').addClass('active');
            if(period != 1){
                window.storageVal = 2;

                 $('#additional').append('<p>Larger storage <span>+$'+storageVal+'/mo</span></p>')
                
            }else{
                window.storageVal = 20;
                $('#additional').append('<p>Larger storage <span>+$'+storageVal+'/yr</span></p>')
               
            }
        }

        if(counter2 == 0 && profileVal != 0){
            
           // $('#add-ons article:nth-child(3)').addClass('active');
            if(period != 1){
                window.profileVal = 2;g
                $('#additional').append('<p>Customizable profile <span>+$'+profileVal+'/mo</span></p>')
                }else{
                 window.profileVal = 20;
                $('#additional').append('<p>Customizable profile <span>+$'+profileVal+'/yr</span></p>')
               
            }
        }
    }


    function isfourth(){
        
            if(period != 1){
                $('#finalselection').text(finalselection + ' (Monthly)');
            }else{
                $('#finalselection').text(finalselection + ' (Yearly)');
            }
            $('.finalprice').text(plan);
            if(plan.length == 5){
                window.firstNum = parseInt(plan.slice(1,2));
                
            }else if(plan.length == 6){
                window.firstNum = parseInt(plan.slice(1,3));
                
            }
            
        
           
        

        window.finalfinale = firstNum + onlineVal + storageVal + profileVal;
        if(period != 1){
            $('#periodfinal').text('(Monthly)')
            $('#finalfinale').text('+$'+finalfinale+'/mo')
        }else{
            $('#finalfinale').text('+$'+finalfinale+'/yr')
            $('#periodfinal').text('(Yearly)')
        }
          
    }

   
})