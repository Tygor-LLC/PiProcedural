<?php
	include "functions.php";
	topHTML("../images/pastPhotos/November-30-2019", "../css/landingPage.css");
	selectAllPictures("../images/pastPhotos/November-30-2019");
	echo '
		<div id="enlargePhoto"></div>
		<script src="../javascript/createHeader.js"></script>
		<script src="../javascript/selectPhotosAlign.js"></script>
	';
	bottomHTML();
