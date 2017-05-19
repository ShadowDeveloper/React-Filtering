<?php

$menu = [
  ['titulo'=>"Home",'link'=>"#home"],
  ['titulo'=>"Sobre",'link'=>"#sobre"],
  ['titulo'=>"Contato",'link'=>"#contato"],
  ['titulo'=>"Mapa",'link'=>"#mapa"]
];

$dados = [
    [ 'titulo' => 'Title 1', 'descricao' => 'Descricao 1', 'detalhe' => 'Rodrigo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 2', 'descricao' => 'Descricao 2', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 3', 'descricao' => 'Descricao 3', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 4', 'descricao' => 'Descricao 4', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 5', 'descricao' => 'Descricao 5', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 6', 'descricao' => 'Descricao 6', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ],
    [ 'titulo' => 'Title 7', 'descricao' => 'Descricao 7', 'detalhe' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi alias omnis nisi consectetur, cum harum ad sed vero magni repellendus, incidunt accusantium laboriosam officiis numquam molestias distinctio, nesciunt, facere quo!', "imagem" => 'http://materializecss.com/images/office.jpg', "link" => '#teste' ]
];


if(isset($_GET['menu'])){
    echo json_encode($menu);exit;
}

if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}
