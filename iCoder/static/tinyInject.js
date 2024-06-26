var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.tiny.cloud/1/mhpxh9vzpo9g90wqu6fxqqmg0ng40dh5fhd1pihveg5k90cq/tinymce/7/tinymce.min.js';
document.head.appendChild(script);

script.onload = function () {
    tinymce.init({
        selector: '#id_content',
        height: 300,
        plugins: [
            'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
            'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
            'media', 'table', 'emoticons', 'help'
        ],
        toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
            'forecolor backcolor emoticons | help',
        menu: {
            favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
        },
        menubar: 'favs file edit view insert format tools table help',
        content_css: 'css/content.css'
    });
}