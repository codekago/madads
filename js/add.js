$('document').ready(function(){

///////////////////upload function

	function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.getElementById('span');
          span.innerHTML = ['<img id="image" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          $('#imageMessage').css('display', 'none');
        };
      })(f);

      // Read in the image file as a data URL.
       reader.readAsDataURL(f);
    }
  }
  	document.getElementById('files').addEventListener('change', handleFileSelect, false);


  ////////////////////////////////end of upload function...............
	
$('#addProduct').click(function(){

   // $('body').scrollTop(0);

		var image = $('#image').attr('src');
		//alert(image);

			$('#loader').show();
			var campusName = $('#campusName').val();
			campus = localStorage.getItem("campus");
			campusName = campus;

			var userName = $('#userName').val();
			user = localStorage.getItem("user");
			userName = user;

			$('#addMessage').load('add.php', {'name': $('#name').val(), 'desc': $('#desc').val(), 'phone': $('#phone').val(), 'room': $('#room').val(), 'campus': campusName, 'image': $('#image').attr('src'), 'user': userName});
			$('#loader').hide();
			

			return false

			
	});
});