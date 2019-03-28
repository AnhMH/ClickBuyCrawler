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
    
    function getAll($cond = '') {
        $sql = 'SELECT * FROM ' . $this->_table;
        if (!empty($cond)) {
            $where = array();
            foreach ($cond as $k => $c) {
                if ($c != '') {
                    $where[] = "{$k}='{$c}'";
                }
            }
            if (!empty($where)) {
                $sql .= " WHERE ".implode(", ", $where);
            }
        }
        $data = $this->excute($sql);
        $result = array();
        if ($data->num_rows > 0) {
            while($row = $data->fetch_assoc()) {
                $result[] = $row;
            }
        }
        return $result;
    }
    
    function getDetail($id) {
        $sql = "SELECT * FROM " . $this->_table . " WHERE id = {$id}";
        $data = $this->excute($sql);
        return $data->fetch_assoc();
    }
}
