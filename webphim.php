<!--<div class="videoiframe" data-id="opcion1">
    <div style="width:660px; height:371px" class="open-stream-player" id="open-stream-player-8520208"></div>
    <script src="https://tune.pk/js/open/embed.js?vid=8520208"></script>
</div>-->

<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'movie.php';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function film_crawler($link, $type = '', $linkID = '') {
    $data = array();
    $baseUrl = 'http://www.danfra.com/';
    $html = file_get_html($link);
    foreach($html->find('div.adds-wrapper div.item-list') as $e) {
        $tmp = array();
        $tmp['name'] = $e->find('div.ads-details h5.add-title a', 0)->plaintext;
        $tmp['link'] = $baseUrl.$e->find('div.ads-details h5.add-title a', 0)->href;
        $tmp['image'] = $e->find('div.add-image img', 0)->src;
        $data[] = $tmp;
    }
    return $data;
}

$link = array(
    'http://www.danfra.com/series.php',
    'http://www.danfra.com/series.php?page=2',
    'http://www.danfra.com/series.php?page=3',
    'http://www.danfra.com/series.php?page=4',
    'http://www.danfra.com/series.php?page=5'
);
//$movies = array();
$product = new Movie();
foreach ($link as $k => $v) {
    $movies = film_crawler($v, $k);
    $product->insert($movies);
}

echo '<pre>';
print_r($movies);
die();
?>

