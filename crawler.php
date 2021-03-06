<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'crawlerlink.php';
require 'product.php';

ini_set('memory_limit', -1);
set_time_limit(-1);
ini_set('max_execution_time', -1);

function product_crawler($link, $type = '', $linkID = '') {
    $data = array();
    $html = file_get_html($link);
    $time = time();
    foreach($html->find('a.product__category__content__item__link') as $e) {
        $tmp = array();
        $tmp['name'] = $e->find('h3.product__category__content__item__link__title', 0)->plaintext;
        $tmp['price'] = substr($e->find('div.product__category__content__item__link__price', 0)->plaintext, 0, -6);
        $tmp['image'] = $e->find('div.product__category__content__item__link__img img', 0)->src;
        $tmp['link'] = $e->href;
        $tmp['type'] = $type;
        $tmp['crawler_at'] = $time;
        $tmp['link_id'] = $linkID;
        $data[] = $tmp;
    }
    return $data;
}

//$data = product_crawler('https://clickbuy.com.vn/dn/danh-muc/xiaomi');


//$db = new Database();
$cl = new CrawlerLink();
$product = new Product();
$data = array();

$crawlerLinks = $cl->getAll();
foreach ($crawlerLinks as $v) {
    $data[] = product_crawler($v['link'], $v['type_id'], $v['id']);
}

foreach ($data as $products) {
    $product->insert($products);
}

echo count($data);
echo 'DONE';
