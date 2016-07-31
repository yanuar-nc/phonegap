$(document).ready(function(){
	// $.post( 'http://localhost:2000/authenticate', { username: 'nymphetamine', key: '52$QS^OVNjz4AnbWjwbyZ*I8F&MgIXXRDPm2XFDSJDpX8dUmP^zLVO#tE-g&yk)O' } ).
	// done(function(data) {
 //  		console.log( data );
	// });
	
	token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Im55bXBoZXRhbWluZSIsInBhc3N3b3JkIjoiZGFkMDhmZTJiMGU1N2FkOTc1NmRmNTY4MjMzOGVmZjAiLCJhcGlfa2V5IjoiNTIkUVNeT1ZOano0QW5iV2p3YnlaKkk4RiZNZ0lYWFJEUG0yWEZEU0pEcFg4ZFVtUF56TFZPI3RFLWcmeWspTyIsImxldmVsIjo5OSwic3RhdHVzIjoxfSwiaWF0IjoxNDU1ODc0MDQ3LCJleHAiOjE0NTU5NjA0NDd9.BYrKOEbozUdicce3vPONkrL3bValZxqrDc_wZaIU4kU';
    $.get('http://localhost:2000/books?token=' + token, function(data) {
      console.log( data );
    });
});