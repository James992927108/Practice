var str = 'aaa';
console.log(typeof(str));
var str = 'hello';

//alert('hello,world');
document.getElementById('header').textContent ='helllooooo';
var str1 = 3;
var str2 = 'hello';

function bark(){
    console.log('bark!!!');
}
function whoIsYourMaster(man){
    var text = 'My master is ' + man ;
    document.getElementById('header').textContent = text;
    console.log(text);
}
bark();
whoIsYourMaster('Fuck');
var name = 'Tom'; 
whoIsYourMaster(name);