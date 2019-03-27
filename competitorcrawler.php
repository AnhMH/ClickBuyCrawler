<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'competitorproduct.php';

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

$competitorProducts = $cp->getAll();
foreach ($competitorProducts as $v) {
    $data[] = product_crawler($v);
}

$cp->updatePrice($data);
echo '<pre>';
print_r($data);