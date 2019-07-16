<?php

class Movie extends Database {

    protected $_table = 'crawler_movies';
    protected $_elements = array(
        'name',
        'link',
        'image',
        'created',
        'updated'
    );

    function insert($data) {
        $sql = "INSERT IGNORE INTO `crawler_movies` (
                `name`,
                `link`,
                `image`
             ) VALUES ";
        
        $values = array();
        $linkIds = array();
        $time = time();
        foreach ($data as $v) {
            $values[] = "('{$v['name']}', '{$v['link']}', '{$v['image']}')";
        }
        $sql .= implode(',', $values);
        $dup = array();
        foreach ($this->_elements as $e) {
            $dup[] = "`{$e}` = VALUES({$e})";
        }
        $sql .= " ON DUPLICATE KEY UPDATE " . implode(',', $dup);
        $this->excute($sql);
    }
}
