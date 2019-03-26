<?php

class Product extends Database {

    protected $_table = 'products';
    protected $_elements = array(
        'name',
        'link',
        'price',
        'crawler_at',
        'type',
        'image'
    );

    function insert($data) {
        $sql = "INSERT IGNORE INTO `products` (
                `name`,
                `link`,
                `price`,
                `crawler_at`,
                `type`,
                `image`
             ) VALUES ";
        
        $values = array();
        foreach ($data as $v) {
            $values[] = "('{$v['name']}', '{$v['link']}', '{$v['price']}', '{$v['crawler_at']}', '{$v['type']}', '{$v['image']}')";
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
