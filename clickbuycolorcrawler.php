<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'product.php';
require 'productcolorprice.php';

ini_set('memory_limit', -1);
set_time_limit(-1);
ini_set('max_execution_time', -1);

function getProductColorPrices ($param) {
    $result = array();
    $stt = 1;
    $time = time();
    $link = $param['link'];
    $html = file_get_html($link);
    $data = $html->find('div.product__detail__top__content__right__address div.product__detail__top__content__right__color span.product__detail__top__content__right__color__item');
    foreach ($data as $e) {
        $result[] = array(
            'name' => !empty($e->attr['data-name-color']) ? $e->attr['data-name-color'] : 'Color '.$stt++,
            'price' => substr($e->attr['data-price-color'], 0, -3),
            'product_id' => $param['id'],
            'crawler_at' => $time,
            'link' => $param['link'],
            'color' => substr($e->attr['style'], 18),
        );
    }
    return $result;
}

$product = new Product();
$products = $product->getProductColorCrawlers();
$data = array();
foreach ($products as $p) {
    $data[] = getProductColorPrices($p);
}

$addUpdateData = array();
foreach ($data as $v) {
    foreach ($v as $sv) {
        $addUpdateData[] = $sv;
    }
}

$productColorPrice = new ProductColorPrice();
$productColorPrice->insert($addUpdateData);

echo count($addUpdateData);
echo 'DONE';

