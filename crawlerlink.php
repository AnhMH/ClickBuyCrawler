<?php

class CrawlerLink extends Database {
    protected $_table = 'crawler_links';
    protected $_crawlerTimeout = 6*60*60;
    
    function getAll() {
        $sql = 'SELECT * FROM ' . $this->_table . ' WHERE crawler_at is null OR crawler_at < ' . (time() - $this->_crawlerTimeout) . ' LIMIT 7';
        $data = $this->excute($sql);
        $result = array();
        if ($data->num_rows > 0) {
            while($row = $data->fetch_assoc()) {
                $result[] = $row;
            }
        }
        return $result;
    }
}