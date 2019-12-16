		<?php
$dir = "includes/";
if (is_dir($dir)) {
  if ($dh = opendir($dir)) {
    //we need to build the select list before the while statement
    echo '<select id="filesList">';
    while (($file = readdir($dh)) !== false) {
      if(filetype($dir . $file) == 'file'){
        $splitFile = explode('.', $file);
        if($splitFile[1] = 'html'){               
          echo '<option value='.$file.'>'.$splitFile[0].'.'.$splitFile[1].'</option><br/>';
        }
      }
    }
    //we also need to close it after our while statment.
    echo '</select>';
    closedir($dh);
  }
}

?>