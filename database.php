<?php

class Database {
    protected $_host = 'localhost';
    protected $_pass = '';
    protected $_user = 'root';
    protected $_db = 'clickbuycrawler';
    protected $_conn = null;
    protected $_table = '';
            
    function __construct() {
        $this->_conn = new mysqli($this->_host, $this->_user, $this->_pass, $this->_db);
        if ($this->_conn->connect_error) {
            die("Connection failed: " . $this->_conn->connect_error);
        }
        $this->_conn->set_charset("utf8");
    }
    
    function __destruct() {
        $this->_conn->close();
    }
    
    function excute($sql) {
        return $this->_conn->query($sql);
    }
    
    function getAll() {
        $sql = 'SELECT * FROM ' . $this->_table;
        $data = $this->excute($sql);
        return $data->fetch_all(MYSQLI_ASSOC);
    }
    
    function getDetail($id) {
        $sql = "SELECT * FROM " . $this->_table . " WHERE id = {$id}";
        $data = $this->excute($sql);
        return $data->fetch_assoc();
    }
}
