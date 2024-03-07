<?php
var_dump($_POST);
if ((isset($_POST['email']) AND trim($_POST['email']) != '') and (isset($_POST['password']) AND trim($_POST['password']) != '')){
    echo 'ok';
}else{
    echo'log or pass not have';
}
?>