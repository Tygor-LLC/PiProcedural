<?php
    function selectAllPictures($path = null){
        echo '<div class="pictures">';
        if(null != $path) {
            $files = array_filter(glob($path . '/*'), 'is_file');
            foreach ($files as $file) {
                $regEX = "/\/[a-zA-Z\d]+/";
                preg_match($regEX, $file, $link);
                echo '<img src="'.$file.'" class="folderImages" alt="'.end($link).'" />';
            }
        }
        echo '</div>';
    }

    function topHTML($title, $stylesheet = null){
        if(null === $stylesheet) {
            echo '
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>' . "$title</title>
                    </head>
                    <body>
            ";
        }
        else{
            echo '
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>'."$title</title>
                        <link rel=".'"stylesheet" type="text/css" href="'."$stylesheet".'">
                    </head>
                    <body>
                    
            ';
        }
    }

    function topHTMLOnLoad($title, $scripts,$stylesheet = null){
        if(null == $stylesheet){
            echo '
                <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <title>'.$title.'</title>
                        </head>
                        <body onload="'.$scripts.'">    
            ';
        }
        else{
            echo '
                <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <title>'.$title.'</title>
                            <link rel="stylesheet" type="text/css" href="'.$stylesheet.'">
                            
                        </head>
                        <body onload="'.$scripts.'">
            ';
        }
    }


    function bottomHTML(){
        echo "
	            </body>
            </html>
	    ";
    }

    function selectAllDirectories($somePath){
        $directories = glob($somePath . '/*' , GLOB_ONLYDIR);
        echo '<div class="folderContainer">';
        foreach($directories as $dir){
            $regEX = "/\/[A-Z][a-zA-Z-_\d]+/";
            preg_match($regEX, $dir, $link);
            $fileName = substr(end($link),1);
            echo '<div class="folder"><a class="folderLink" href="'.$fileName.'.php"><img src="../images/assets/folder.png" 
            class="folderLink" alt="'.end($link).'" style="width:100px;height:100px;"></a></div>
            ';
        }
        echo '</div>';
    }
