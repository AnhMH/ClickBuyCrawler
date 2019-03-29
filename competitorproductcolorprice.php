<?php

class CompetitorProductColorPrice extends Database {
    protected $_table = 'competitor_product_color_prices';
    protected $_elements = array(
        'competitor_product_id',
        'name',
        'price',
        'crawler_at',
        'color'
    );

    function insert($data) {
        $sql = "INSERT IGNORE INTO `competitor_product_color_prices` (
                `competitor_product_id`,
                `name`,
                `price`,
                `crawler_at`,
                `color`
             ) VALUES ";
        
        $values = array();
        $productIds = array();
        $time = time();
        $productIds = array();
        foreach ($data as $v) {
            $productIds[] = $v['competitor_product_id'];
            $values[] = "('{$v['competitor_product_id']}', '{$v['name']}', '{$v['price']}', '{$v['crawler_at']}', '{$v['color']}')";
        }
        $updateSql = "UPDATE competitor_products SET color_crawler_at = {$time} WHERE id IN (" . implode(',', $productIds) . ")";
        $this->excute($updateSql);
        
        $sql .= implode(',', $values);
        $dup = array();
        foreach ($this->_elements as $e) {
            $dup[] = "`{$e}` = VALUES({$e})";
        }
        $sql .= " ON DUPLICATE KEY UPDATE " . implode(',', $dup);
        $this->excute($sql);
    }
}

