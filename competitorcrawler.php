<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'competitorproduct.php';

ini_set('memory_limit', -1);
set_time_limit(-1);
ini_set('max_execution_time', -1);

function product_crawler($param) {
    $html = file_get_html($param['link']);
    $time = time();
    $data = array(
        'price' => substr($html->find($param['find_char'], 0)->plaintext, 0, $param['cut_char']),
        'id' => $param['id'],
        'product_id' => $param['product_id'],
        'competitor_id' => $param['competitor_id'],
        'crawler_at' => $time
    );
    return $data;
}

$cp = new CompetitorProduct();
$data = array();

$competitorProducts = $cp->getAll(1);
foreach ($competitorProducts as $v) {
    $data[] = product_crawler($v);
}

$cp->updatePrice($data);

echo count($data);
echo 'DONE';