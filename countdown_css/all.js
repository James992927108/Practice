//var str = 'aaa';
//console.log(typeof(str));
//var str = 'hello';
//alert('hello,world');

//document.getElementById('header').textContent ='helllooooo';
// var str1 = 3;
// var str2 = 'hello';

// function bark(){
//     console.log('bark!!!');
// }
// function whoIsYourMaster(man){
//     var text = 'My master is ' + man ;
//     document.getElementById('header').textContent = text;
//     console.log(text);
// }
// bark();
// whoIsYourMaster('Fuck');
// var name = 'Tom'; 
// whoIsYourMaster(name);

var s = 0;
            var m = 0;
            var allTime = 0;

            function SetCookie(name, value, days) {
                var expires;
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                }
                else {
                    expires = "";
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            }
            function getCookie(c_name) {
                if (document.cookie.length > 0) {
                    c_start = document.cookie.indexOf(c_name + "=");
                    if (c_start != -1) {
                        c_start = c_start + c_name.length + 1;
                        c_end = document.cookie.indexOf(";", c_start);
                        if (c_end == -1) {
                            c_end = document.cookie.length;
                        }
                        return unescape(document.cookie.substring(c_start, c_end));
                    }
                }
                return "";
            }

            if (Number(getCookie("saveTime"+'@Model')) === 0) {
                s = 600;
                //m = 10;
            }
            else
            {
                s = Math.round(getCookie("saveTime" + '@Model'));
                //m = Math.round(getCookie("saveTime"));
            }

            var tm; //取整數->用有小數點的去掉整數->再用60秒*已剩下的小數點
            var ts;
            var shows;

            function reciprocal() {
                tm = Math.floor(s / 60);
                ts = s / 60;
                shows = 60 * (ts - tm);
                shows = Math.round(shows);
                document.getElementById("showtime").innerHTML = "Time: " + tm + "m" + shows + "s";//innerHTML這東西是在標籤頭與標籤尾中插入你要顯示的東西//document.getElementById("showtime_m").innerHTML = "Time: " + m + "m";
                setTimeout(reciprocal, 1000);
                s--;
                SetCookie("saveTime" + '@Model', s, 10);
                var superman = s;
                if (Number(getCookie("saveTime" + '@Model')) < 0) {
                    $.post("/DISC/SaveTest");
                    window.location.replace("file:///C:/Users/James/Desktop/project/index.html");
                }
            }
            