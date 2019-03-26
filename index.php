<?php
require 'database.php';
require 'product.php';

$db = new Database();
$product = new Product();

$data = $product->getAll();
$stt = 1;
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
        <div class="container">
            <h2>Products</h2>
            <p>List products:</p>            
            <table id="example" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <!--<th>Type</th>-->
                        <th>Price</th>
                        <th><a href="https://www.xtmobile.vn/" target="_blank">Xtm</a></th>
                        <th><a href="https://didongxanh.com.vn/" target="_blank">Ddx</a></th>
                        <th><a href="https://minhtuanmobile.com/" target="_blank">Mtm</a></th>
                        <th><a href="https://didongviet.vn/" target="_blank">Ddv</a></th>
                        <th><a href="https://didongthongminh.vn/" target="_blank">Ddtm</a></th>
                        <th><a href="https://a-smart.vn/" target="_blank">As</a></th>
                        <th><a href="https://mobilecity.vn/" target="_blank">MC</a></th>
                        <th><a href="http://ihubdanang.vn/" target="_blank">IH</a></th>
                        <th><a href="http://applecentervn.com/" target="_blank">AC</a></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($data as $p): ?>
                    <?php 
                    $p['price'] = substr($p['price'], 0, -6);
                    ?>
                    <tr>
                        <td><?php echo $stt++;?></td>
                        <td><img src="<?php echo $p['image'];?>" width="50"/></td>
                        <td><a href="<?php echo $p['link'];?>" target="_blank"><?php echo $p['name'].' - '.$p['id'];?></a></td>
                        <!--<td><?php echo $p['type'];?></td>-->
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                        <td><?php echo $p['price'];?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </body>
    
    <script>
    $(document).ready(function() {
        $('#example').DataTable();
    } );
    </script>
</html>
