<?php
	include "functions.php";
	topHTML("../images/pastPhotos/December-03-2019", "../css/landingPage.css");
	selectAllPictures("../images/pastPhotos/December-03-2019");
	echo '
		<div id="enlargePhoto"></div>
		<script src="../javascript/createHeader.js"></script>
		<script src="../javascript/selectPhotosAlign.js"></script>
	';
	bottomHTML();
