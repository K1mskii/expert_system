<?php
    $db = new PDO('mysql:host=localhost;dbname=expert_system;charset=utf8', 'root','');
        if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
?>