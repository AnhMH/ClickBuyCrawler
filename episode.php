<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'movie.php';

function film_crawler($link, $type = '', $linkID = '') {
    $data = array();
    $html = file_get_html($link);
    $time = time();
    echo $html;
    die();
    foreach($html->find('main.col-md-8 ul.halim_box li a.halim-thumb') as $e) {
        $tmp = array();
        $tmp['name'] = $e->title;
        $tmp['image'] = $e->find('img', 0)->src;
        $tmp['link'] = $e->href;
        $tmp['last_episode'] = $e->find('span.episode', 0)->plaintext;
        $tmp['country_id'] = $type;
        $data[] = $tmp;
    }
    return $data;
}

$link = array(
    'http://gratistodos.com/ertugrul/',
);
//$movies = array();
$product = new Movie();
foreach ($link as $k => $v) {
    $movies = array();
    $movies[] = film_crawler($v, $k);
}

echo '<pre>';
print_r($movies);
die();