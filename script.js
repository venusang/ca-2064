$(function() {
  $('.dropdown a').on('click',function(e){
    // console.debug($(this).closest('div').attr('id'));
    var thisItem = $(this).text();
    // console.debug($(this).parent().parent().siblings('button').text());
    $(this).parent().parent().siblings('button').text(thisItem);
    // $(this).parent().parent().siblings('button').append(' <span class="caret"></span>');
  });

  
  $('.nav-container .dropdown-menu-general a').on('click',function(e){
    e.preventDefault(e);
    $('.content').css('display', 'none');
  });
  $('.nav-container #nav-profile').on('click',function(e){
    $('#profile').css('display', 'block');
  });

  $('.nav-container #nav-supporting-materials').on('click',function(e){
    $('#supporting-materials').css('display', 'block');
  });

  $('#nav-add-supporting-materials').on('click',function(e){
    $('#add-supporting-materials').css('display','block');
  });

  $('#add-supporting-materials form ').submit(function(e){
    var supportingMaterialTitle = $('input#title').val();
    $('#new-supporting-materials h1').text(supportingMaterialTitle);
    
    buttonValue = $('#select-file-type button').text();
    console.debug(buttonValue); 

    if(buttonValue == 'Upload pdf'){
      console.debug('upload the pdf');
    } 

    if (buttonValue == 'Create new document'){
      $('.content').css('display','none');
      $('#new-supporting-materials').css('display','block');
    } 

    if (buttonValue == 'Select File Type'){
      console.debug('do nothing');
    }
  });

  $('.nav-container #nav-new').on('click',function(e){
    window.open(
      'index.html',
      '_newtab')
  });

  $('.nav-container #nav-edit-filename1').on('click',function(e){
    $('#filename1').css('display', 'block');
  });

  $('.nav-container #nav-edit-filename2').on('click',function(e){
    $('#filename2').css('display', 'block');
  });

  //file rename modal
  $('.title-nav').on('click',function(){
   $('#myModal').modal('toggle');
   $('#myModal #itemName').val($(this).text());
  });

  //open file
  $('#nav-open').on('click',function(){
   $('#openFileModal').modal('toggle');
  });

  //copy file
  $('#nav-copy').on('click',function(){
   $('#copyFileModal').modal('toggle');
  });

  //delete file
  $('#nav-delete').on('click',function(){
   $('#deleteFileModal').modal('toggle');
  });

  //save file rename
  $('#myModal #save').on('click',function(){
    console.debug($('#myModal #itemName').val());
    $('#myModal').modal('hide');
    $('.title-nav').text($('#myModal #itemName').val());
  });

  //help dialog
  $('.help').on('click',function(e){
    e.preventDefault();
    $('#dialog').dialog();
  });
  
  $('#preview-btn').on('click',function(e){
    if($(this).text() == 'show preview'){
      $(this).text('hide preview');
      $('#item-left-side').addClass('col-md-6');
      $('#item-right-side').css('display','block'); 
      $('#item-right-side').addClass('col-md-6'); 
    } else {
      $(this).text('show preview');
      $('#item-left-side').removeClass('col-md-6');
      $('#item-left-side').addClass('col-md-12');
      $('#item-right-side').css('display','none'); 
      $('#item-right-side').removeClass('col-md-6'); 
    }   
  });

  $("#extruderRight").buildMbExtruder({
      position:"right",
      width:300,
      extruderOpacity:.8,
      textOrientation:"tb",
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  $("#extruderLeft2").buildMbExtruder({
      position:"left",
      width:300,
      positionFixed:false,
      top:0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });


  
});