//homework
//建立 會員等級 Enum ，區分為 Normal 、 VIP
//建立 計算折扣的介面， 提供 Calculate 方法，和傳入 購買件數(Qty) 和 總價(Price)

//實做計算 VIP 會員價格的 Class
//實做計算一般會員價格的 Class
//給
//如果是 VIP 會員，只要購物滿 500 元，就一律有 8 折優惠。
//如果是一般會員，除了購物必須要滿 1000 元，而且購買超過 3 件商品才能擁有 85 折優惠。

//透過switch case(請抽出變成一個class) ，根據傳入的會員等級 Enum 回傳 對應的折扣計算 Class

//撰寫程式驗證上面的 Class 可以正常使用無誤

enum Member {
    VIP= 0,
    Normal= 1
}
interface Calculate {
    Qty: number;
    Price: number;
    CalculateTotal(): string;
}
class VIP implements Calculate {
    Qty: number;
    Price: number;
    constructor(Qty: number, Price: number) {
        this.Qty = Qty,
        this.Price = Price
    }
    CalculateTotal(): string {
        var FinalPrice;
        if (this.Price >= 500) {
            FinalPrice = this.Price * 0.8;
        }
        else {
            FinalPrice = this.Price;
        }
        return FinalPrice;
    }
}
class Normal implements Calculate {
    Qty: number;
    Price: number;
    constructor(Qty: number, Price: number) {
        this.Qty = Qty,
        this.Price = Price
    }
    CalculateTotal(): string {
        var FinalPrice;
        if (this.Price >= 1000) {
            if (this.Qty > 3) {
                FinalPrice = this.Price * 0.85;
            }
            else {
                FinalPrice = this.Price;
            }
        }
        else {
            FinalPrice = this.Price;
        }
        return FinalPrice;
    }
    //Normalupthousand(Qty: number, Price: number) {

    //    var FinalPrice;
    //    if (Price >= 1000) {
    //        if (Qty > 3) {
    //            FinalPrice = Price * 0.85;
    //        }
    //        else {
    //            FinalPrice = Price;
    //        }
    //    }
    //    else {
    //        FinalPrice = Price;
    //    }
    //    return FinalPrice;
    //}
}

class choose {
    chooseMemberLevel(level: Member, Qty: number, Price: number) {
        switch (level) {
            case 0:
                var test = new VIP(Qty, Price);
                return test.CalculateTotal();

            case 1:
                var test1 = new Normal(Qty, Price);
                return test1.CalculateTotal();
        }
    }
}
function test1(str: string) {
    if (str == "vip") {
        (<HTMLInputElement>document.getElementById('ForGetMember')).value = str;
        console.log(str);
    }
    else {
        (<HTMLInputElement>document.getElementById('ForGetMember')).value = str;
        console.log(str);
    }
}
function test() {
    var member1 = (<HTMLInputElement>document.getElementById('ForGetMember')).value;
    var qty1 = (<HTMLInputElement>document.getElementById('qty')).value;
    var price1 = (<HTMLInputElement>document.getElementById('price')).value;
    var member;
    if (member1 == "vip") {
        member = 0;
    }
    else {
        member = 1;
    }

    var qty: number = +qty1;
    var price: number = +price1;

    console.log(member);
    console.log(qty);
    console.log(price);

    var VIPcustomertest = new choose();
    var result = VIPcustomertest.chooseMemberLevel(member, qty, price);

    (<HTMLInputElement>document.getElementById('total')).value = result;
    console.log(result);
}