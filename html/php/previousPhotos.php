<?php
    include "functions.php";
    topHTML("Available Photo Days", "../css/landingPage.css");
    selectAllDirectories("../images/pastPhotos");
    echo '
            <script src="../javascript/createHeader.js"></script>
            <script src="../javascript/previousPhotos.js"></script>
        ';
    bottomHTML();
