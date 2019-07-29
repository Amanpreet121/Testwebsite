var container = document.getElementById("main-img");

function changeImg(image) {
    container.src = image.src;
}

function showMe() {
    document.getElementById('hidden-text').style.display = "block";
    document.getElementById('show').style.display = "none"; 
}

function calculate() {
    var num = parseInt(document.getElementById('quantity').innerHTML);
    document.getElementById('quantity').innerHTML= num + 1;
    document.getElementById('lblCartCount').innerHTML= num + 1;

    var price = parseInt(document.getElementById('price').innerHTML);
    document.getElementById('price').innerHTML= price+565;

}