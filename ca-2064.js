$(function() {

  //I forgot why I wrote these 3 lines
  $('.dropdown a').on('click',function(e){
    e.preventDefault();
    var thisItem = $(this).text();
    $(this).parent().parent().siblings('button').text(thisItem);
  });

  //nav-elements
  $('.elements').on('click',function(e){
    e.preventDefault();
    $('.elements-menu').css('display','none');
    $('#elements-dialog').dialog({
          width: 850,
          height: 400,
          close:function(){
            console.debug('testing');
            $('.elements-menu').css('display','block');
          }
      });
  });

  //.dropdown-menu-general a
  $('.nav-container .dropdown-menu-general a.section').on('click',function(e){
    e.preventDefault(e);
    $('.content').css('display', 'none');
  });

  //nav-new
  $('.nav-container #nav-new').on('click',function(e){
    window.open('index.html','_newtab');
  });

  //nav-edit-filename1
  $('.nav-container #nav-edit-filename1').on('click',function(e){
    $('#filename1').css('display', 'block');
  });

  //nav-edit-filename2
  $('.nav-container #nav-edit-filename2').on('click',function(e){
    $('#filename2').css('display', 'block');
  });

  //edit item button
  $('#btn-edit-item').on('click',function(e){
    $('.content').css('display','none');
    $('#edit-item .content').css('display', 'block');
  });

  

  //nav-profile
  $('.nav-container #nav-profile').on('click',function(e){
    $('#profile').css('display', 'block');
  });

  //nav-metadata
  $('.nav-container #nav-metadata').on('click',function(e){
    $('#metadata').css('display', 'block');
  });

  //nav-add-supporting-materials
  $('#nav-add-supporting-materials').on('click',function(e){
    $('#add-supporting-materials').css('display','block');
  });

  //nav-scoring
  $('#nav-scoring').on('click',function(e){
    $('.content').css('display','none');
    $('#scoring .content').css('display', 'block');
  });
  //nav-feedback
  $('#nav-feedback').on('click',function(e){
    // $('#summary-feedback').css('display','block');
    $('.content').css('display','none');
    $('#summary-feedback .content').css('display', 'block');

    if($('.summary-feedback-form :checkbox').is(':checked')){
          $('.collapse').collapse('show');
          $('.summary-feedback-panel').css('display','block');
        } else {
          $('.summary-feedback-panel').css('display','none');
        }
     //Checkbox show hide summary feedback
    $('.summary-feedback-form :checkbox').on('click',function(){
        if($(this).is(':checked')){
          $('.summary-feedback-panel').css('display','block');
          $('.collapse').collapse('show');
        } else {
          $('.summary-feedback-panel').css('display','none');
        }
    });
  });

 

  //Add Supporting Materials form
  $('#add-supporting-materials form').submit(function(e){
    e.preventDefault();
    var supportingMaterialTitle = $('input#title').val();
    $('#new-supporting-materials h1').text(supportingMaterialTitle);
    
    buttonValue = $('#select-file-type button').text();
    console.debug(buttonValue); 

    // if(buttonValue == 'Upload pdf'){
    //   console.debug('upload the pdf');
    // } 

    // if (buttonValue == 'Create new document'){
    //   $('.content').css('display','none');
    //   $('#new-supporting-materials').css('display','block');
    // } 

    // if (buttonValue == 'Select File Type'){
    //   console.debug('do nothing');
    // }
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

  //archive file
  $('#nav-archive').on('click',function(){
   $('#archiveFileModal').modal('toggle');
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
  
  //summary feedback preview panel
  $("#summaryFeedbackPreview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });
  //scoring preview panel
  $("#scoringPreview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  //edit preview panel
  $("#editPreview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  $("#filename1Preview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

  $("#filename2Preview").buildMbExtruder({
      position:"right",
      width: 800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });
  $('.nav-container').on('click',function(e){
    $('.preview-panel').closeMbExtruder();
    
  });
  //profile preview panel
  $("#profilePreview").buildMbExtruder({
      position:"right",
      width:800,
      top: 0,
      extruderOpacity:.8,
      onExtOpen:function(){},
      onExtContentLoad:function(){},
      onExtClose:function(){}
  });

});