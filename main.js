	function startTime() {
	  const today = new Date();
	  let year = today.getFullYear();
	  let month = today.getMonth();
	  let date = today.getDate();
	  let day = today.getDay();
	  let hour = today.getHours();
	  let min = today.getMinutes();
	  let sec = today.getSeconds();
	  month = month += 1;
	  min = checkTime(min);
	  sec = checkTime(sec);
	  document.getElementById('time').innerHTML = date+"/"+month+"/"+year+" - "+hour+":"+min;
	  setTimeout(startTime, 1000);
	}

	function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}