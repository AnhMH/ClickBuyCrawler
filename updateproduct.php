<?php
require 'database.php';
require 'product.php';

$product = new Product();

$id = $_GET['product_id'];

if (!empty($_POST['submit'])) {
    $addUpdateData = array();
    foreach ($_POST['competitor_product'] as $k => $v) {
        if (!empty($v)) {
            $addUpdateData[] = array(
                'competitor_id' => $k,
                'link' => $v,
                'product_id' => $_POST['product_id']
            );
        }
    }
    require 'competitorproduct.php';
    $competitorproduct = new CompetitorProduct();
    $competitorproduct->insert($addUpdateData);
}

$data = $product->getDetail($id);
$competitorProducts = $product->getCompetitorProducts($id);
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
                <a class="navbar-brand" href="#">ClickBuy</a>
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
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="competitorcrawler.php" target="_blank">Update Competitor's Products</a>
                        </li>-->
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <h2>Update Product</h2>
            <form action="updateproduct.php?product_id=<?php echo $id;?>" method="POST">
                <input type="hidden" name="product_id" value="<?php echo $id;?>" />
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" value="<?php echo !empty($data['name']) ? $data['name'] : '';?>" placeholder="Product name">
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input type="text" class="form-control" id="link" name="link" value="<?php echo !empty($data['link']) ? $data['link'] : '';?>" placeholder="Product Link">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" class="form-control" id="price" name="price" value="<?php echo !empty($data['price']) ? $data['price'] : '';?>" placeholder="Product price">
                </div>
                <h2>Competitor's Product Link</h2>
                <?php foreach ($competitorProducts as $cp): ?>
                <div class="form-group">
                    <label for="competitor_<?php echo $cp['id']; ?>"><a href="<?php echo $cp['c_link'];?>" target="_blank"><?php echo $cp['name'];?></a></label>
                    <input type="text" class="form-control" name="competitor_product[<?php echo $cp['id'];?>]" id="competitor_<?php echo $cp['id']; ?>" value="<?php echo !empty($cp['link']) ? $cp['link'] : '';?>" placeholder="Product link">
                </div>
                <?php endforeach; ?>
                
                <input type="submit" name="submit" class="btn btn-primary" value="submit"/>
            </form>
        </div>
    </body>

    <script>
        $(document).ready(function () {

        });
    </script>
</html>