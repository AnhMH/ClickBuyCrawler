<?php

class CompetitorProduct extends Database {
    protected $_table = 'competitor_products';
    protected $_elements = array(
        'product_id',
        'competitor_id',
        'link',
        'price',
        'crawler_at',
        'is_disable'
    );

    function insert($data) {
        $sql = "INSERT IGNORE INTO `competitor_products` (
                `product_id`,
                `competitor_id`,
                `link`
             ) VALUES ";
        
        $values = array();
        $productIds = array();
        foreach ($data as $v) {
            $values[] = "('{$v['product_id']}', '{$v['competitor_id']}', '{$v['link']}')";
            $productIds[] = $v['product_id'];
        }
        $updateSql = "UPDATE competitor_products SET is_disable = 1 WHERE product_id IN (" . implode(',', $productIds) . ")";
        $this->excute($updateSql);
        
        $sql .= implode(',', $values);
        $dup = array();
        foreach ($this->_elements as $e) {
            if (!in_array($e, array('price', 'crawler_at'))) {
                $dup[] = "`{$e}` = VALUES({$e})";
            }
        }
        $sql .= " ON DUPLICATE KEY UPDATE " . implode(',', $dup);
        $this->excute($sql);
    }
    
    function updatePrice($data) {
        $sql = "INSERT IGNORE INTO `competitor_products` (
                `product_id`,
                `competitor_id`,
                `price`,
                `crawler_at`
             ) VALUES ";
        
        $values = array();
        foreach ($data as $v) {
            $values[] = "('{$v['product_id']}', '{$v['competitor_id']}', '{$v['price']}', '{$v['crawler_at']}')";
        }
        $sql .= implode(',', $values);
        $dup = array();
        foreach ($this->_elements as $e) {
            if ($e != 'link') {
                $dup[] = "`{$e}` = VALUES({$e})";
            }
        }
        $sql .= " ON DUPLICATE KEY UPDATE " . implode(',', $dup);
        $this->excute($sql);
    }
    
    function getAll() {
        $sql = "SELECT 
    cp.id, cp.product_id, cp.competitor_id, cp.link, c.find_char, cp.crawler_at, cp.price, c.cut_char
FROM
    competitor_products AS cp
        LEFT JOIN
    competitors AS c ON cp.competitor_id = c.id WHERE c.id != 3 AND cp.is_disable != 1";
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

