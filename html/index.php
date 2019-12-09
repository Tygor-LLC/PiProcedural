<?php
    include "php/functions.php";
    topHTML("Current Environment", "css/landingPage.css");
    selectAllPictures("images/currentPhoto");
    echo '
        <script src="javascript/landingPageCurrentPhoto.js"></script>
        <script src="javascript/createHeader.js"></script>
    ';
    bottomHTML();


