/////////javaScript code by psalm29
//////// Madads mobile app........

$(document).ready(function(e) {
$('#loader').hide();
$('#close11').hide();
$('#close22').hide();

user = localStorage.getItem("user");
//alert(user);
	
	$('#userName').text('Welcome '+user+'!');

	var campus

	var campus = localStorage.getItem("campus");
	

	if(campus == 'Akpugo'){
		$('#content').load('akpugo.php').fadeIn();
		$('#contentLoader').show();
	}if(campus == 'Elele'){
		$('#content').load('elele.php').fadeIn();
		$('#contentLoader').show();
	}if(campus == 'Okija'){
		$('#content').load('okija.php').fadeIn();
		$('#contentLoader').show();
	}


	$('#notification').load('notification.php').fadeIn();
	

	$('#akpugo').click(function(){
		localStorage.setItem("campus", "Akpugo");
		window.location.replace('list.html');
		
	});
	$('#elele').click(function(){
		localStorage.setItem("campus", "Elele");
		window.location.replace('list.html');
		
	});
	$('#okija').click(function(){
		localStorage.setItem("campus", "Okija");
		window.location.replace('list.html');
		
	});

	$('#form').submit(function(){
		$('#loader').show();
		$('#message').load('http://madads.codekago.com/login.php', {'user': $('#user').val(), 'pwd': $('#pwd').val()});
		$('#loader').hide();
		return false
		
	});//end of login ajax call up..........

	$('#accountForm').submit(function(){
		//alert($('#campus option:selected').text());
			$('#loader').show();
			$('#message').load('http://madads.codekago.com/account.php', {'user': $('#user').val(), 'pwd': $('#pwd').val(), 'campus': $('#campus option:selected').text()});
			$('#loader').hide();
			return false
	});
	

	

	$('#logout').click(function(){
		localStorage.setItem("campus", "");
		window.location.replace('index.html');
	});

	$('#close11').click(function(){
			window.location.replace('list.html');
	});

	$('#close22').click(function(){
			window.location.replace('list.html');
	});


	/*$('#div1').hover(function(){
		$(this).toggle().css('background-color', '#fff');
	});*/

});//end of main document ready function............

