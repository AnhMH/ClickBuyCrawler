<?php
require 'simplehtmldom/simple_html_dom.php';
require 'database.php';
require 'competitorproduct.php';
require 'competitorproductcolorprice.php';

ini_set('memory_limit', -1);
set_time_limit(-1);
ini_set('max_execution_time', -1);

function convertString($str) {
        $str = preg_replace("/(\,|-|\.|\(|\))/", '', $str);
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        $str = preg_replace('/\s+/', ' ', $str);
        $str = str_replace("/", "-", $str);
        $str = str_replace(" ", "-", $str);
        $str = str_replace("?", "", $str);

        return strtolower($str);
    }

function getColorFromText($str) {
    $str = convertString($str);
    $colorCode = array(
        'xam|gray' => '6d6d6d',
        'vang|gold' => 'dd9933',
        'den|black' => '000000',
        'trang|white' => 'ffffff',
        'do|red' => 'dd3333',
        'xanh|blue' => '1e73be',
        'hong|pink' => 'f26ac5',
        'bac|sliver' => 'dddddd'
    );
    
    $colors = explode('-', $str);
    $color = '';
    foreach ($colors as $c) {
        foreach ($colorCode as $k => $v) {
            if (preg_match("/{$c}/i", $k)) {
                return $v;
            }
        }
    }
    return '';
}

function getCompetitorColorPrices ($param) {
    $result = array();
    $stt = 1;
    $time = time();
    $link = $param['link'];
    $html = file_get_html($link);
    $data = $html->find($param['color_container']);
    foreach ($data as $e) {
        $name = $e->find($param['color_name'], 0)->plaintext;
        $price = substr($e->find($param['color_price'], 0)->plaintext, 0, $param['color_cut_char']);
        $color = !empty($pram['color_stype']) ? $e->find($param['color_stype'], 0)->plaintext : '';
        if (empty($color)) {
            $color = getColorFromText($name);
        }
        $result[] = array(
            'name' => $name,
            'price' => $price,
            'competitor_product_id' => $param['id'],
            'crawler_at' => $time,
            'link' => $param['link'],
            'color' => $color,
        );
    }
    return $result;
}

$cp = new CompetitorProduct();
$competitorProducts = $cp->getProductColorCrawlers(1);

$data = array();
foreach ($competitorProducts as $p) {
    $data[] = getCompetitorColorPrices($p);
}

$addUpdateData = array();
foreach ($data as $v) {
    foreach ($v as $sv) {
        $addUpdateData[] = $sv;
    }
}

$competitorProductColorPrice = new CompetitorProductColorPrice();
$competitorProductColorPrice->insert($addUpdateData);

echo count($addUpdateData);
echo 'DONE';

