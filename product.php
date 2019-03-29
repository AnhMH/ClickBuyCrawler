<?php

class Product extends Database {

    protected $_table = 'products';
    protected $_colorCrawlerTimeout = 6*60*60;
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
    
    function getCompetitorProducts($id) {
        $sql = "SELECT 
    cp.link, c.id, cp.product_id, c.name, c.link as c_link
FROM
    competitors AS c
        LEFT JOIN
    competitor_products AS cp ON c.id = cp.competitor_id
        AND cp.product_id = {$id} AND cp.is_disable != 1";
        $data = $this->excute($sql);
        $result = array();
        if ($data->num_rows > 0) {
            while($row = $data->fetch_assoc()) {
                $result[] = $row;
            }
        }
        return $result;
    }
    
    function getProductColorCrawlers() {
        $time = time() - $this->_colorCrawlerTimeout;
        $sql = "SELECT * FROM products WHERE color_crawler_at is null or color_crawler_at < {$time} LIMIT 7";
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
