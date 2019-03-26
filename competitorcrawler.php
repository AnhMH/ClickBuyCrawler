<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'crawlerlink.php';
require 'product.php';

function product_crawler($link, $type = '') {
    $data = array();
    $html = file_get_html($link);
    $time = time();
    foreach($html->find('a.product__category__content__item__link') as $e) {
        $tmp = array();
        $tmp['name'] = $e->find('h3.product__category__content__item__link__title', 0)->plaintext;
        $tmp['price'] = $e->find('div.product__category__content__item__link__price', 0)->plaintext;
        $tmp['image'] = $e->find('div.product__category__content__item__link__img img', 0)->src;
        $tmp['link'] = $e->href;
        $tmp['type'] = $type;
        $tmp['crawler_at'] = $time;
        $data[] = $tmp;
    }
    return $data;
}
