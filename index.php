<?php
require 'database.php';
require 'product.php';
require 'competitorproduct.php';
require 'competitor.php';
require 'type.php';
require 'productcolorprice.php';
require 'competitorproductcolorprice.php';

$typeId = !empty($_GET['type_id']) ? $_GET['type_id'] : '';

$product = new Product();
$cp = new CompetitorProduct();
$competitor = new Competitor();
$type = new Type();

$types = $type->getAll();
$data = $product->getAll(array(
    'type' => $typeId
));
$competitorProducts = $cp->getAll();
$competitors = $competitor->getAll();
$cps = array();
foreach ($competitorProducts as $val) {
    $cps[$val['product_id']][$val['competitor_id']] = $val;
}
$stt = 1;

$productColorPrice = new ProductColorPrice();
$productColorPrices = $productColorPrice->getAll();
$pcp = array();
foreach ($productColorPrices as $vpcp) {
    $pcp[$vpcp['product_id']][] = $vpcp;
}

$competitorProductColorPrice = new CompetitorProductColorPrice();
$competitorProductColorPrices = $competitorProductColorPrice->getAll();
$cpcp = array();
foreach ($competitorProductColorPrices as $vcpcp) {
    $cpcp[$vcpcp['competitor_product_id']][] = $vcpcp;
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>ClickBuyCrawler</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.php">ClickBuy</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.php">Products <span class="sr-only">(current)</span></a>
                        </li>
<!--                        <li class="nav-item">
                            <a class="nav-link" href="crawler.php" target="_blank">Update ClickBuy's Products</a>
                        </li>-->
<!--                        <li class="nav-item">
                            <a class="nav-link" href="clickbuycolorcrawler.php" target="_blank">Update ClickBuy's Products Color Price</a>
                        </li>-->
<!--                        <li class="nav-item">
                            <a class="nav-link" href="competitorcrawler.php" target="_blank">Update Competitor's Products</a>
                        </li>-->
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <h2>Products</h2>
            <label>Filter products:</label>
            <select id="typeSelect">
                <option value="">All</option>
                <?php foreach ($types as $t): ?>
                <option value="<?php echo $t['id'];?>" <?php echo !empty($typeId) & $typeId == $t['id'] ? "selected='selected'" : "";?>><?php echo $t['name'];?></option>
                <?php endforeach;?>
            </select>
            <table id="example" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <!--<th>Type</th>-->
                        <th>Price</th>
                        <?php foreach ($competitors as $cv): ?>
                        <th><a href="<?php echo $cv['link'];?>" target="_blank" title="<?php echo $cv['name'];?>"><?php echo $cv['name'];?></a></th>
                        <?php endforeach; ?>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($data as $p): ?>
                        <tr>
                            <td><?php echo $stt++; ?></td>
                            <td><a href="updateproduct.php?product_id=<?php echo $p['id'];?>"><?php echo $p['id']; ?></a></td>
                            <td><img src="<?php echo $p['image']; ?>" width="50"/></td>
                            <td><a href="<?php echo $p['link']; ?>" target="_blank"><?php echo $p['name']; ?></a></td>
                            <td>
                                <?php echo $p['price'];?>
                                <?php if (!empty($pcp[$p['id']])): ?>
                                    <?php foreach ($pcp[$p['id']] as $vpcp): ?>
                                <p style="font-size: 10px;"><span style="border: 1px solid #ccc; width: 10px; height: 10px; display:inline-block; background: #<?php echo $vpcp['color'];?>"></span> <?php echo /*$vpcp['name'].': '.*/$vpcp['price'];?></p>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </td>
                            <?php foreach ($competitors as $cv): ?>
                            <td>
                                <?php if (!empty($cps[$p['id']][$cv['id']])): ?>
                                <?php $_competitorProduct = $cps[$p['id']][$cv['id']];?>
                                <a href="<?php echo $cps[$p['id']][$cv['id']]['link'];?>" target="_blank"><?php echo $cps[$p['id']][$cv['id']]['price'];?></a>
                                    <?php if (!empty($cpcp[$_competitorProduct['id']])):?>
                                    <?php foreach ($cpcp[$_competitorProduct['id']] as $_cpcp): ?>
                                    <p style="font-size: 10px;"><span style="border: 1px solid #ccc; width: 10px; height: 10px; display:inline-block; background: #<?php echo $_cpcp['color'];?>"></span> <?php echo /*$vpcp['name'].': '.*/$_cpcp['price'];?></p>
                                    <?php endforeach; ?>
                                    <?php endif; ?>
                                
                                <?php else: ?>
                                -
                                <?php endif; ?>
                            </td>
                            <?php endforeach;?>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </body>

    <script>
        $(document).ready(function () {
            $('#example').DataTable();
            $('#typeSelect').on('change', function(){
                var $val = $(this).val();
                if ($val != '') {
                    window.location.href = "index.php?type_id="+$val;
                } else {
                    window.location.href = "index.php";
                }
            });
        });
    </script>
</html>
