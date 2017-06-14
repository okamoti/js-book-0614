// ここに関数(function)を書く
// 注意：同じ名前の関数は、下に書いたものが優先される

// 以下は記入例。
// コメントに「どこに書いてあるコードか」が分かるように書く。（最低でもページ数を書く）

// リスト4.1 (p.79)
// function sum() {
//     var total = 0;
//     for (var counter = 1; counter <= 10; counter++ ){
//         total += counter;
//     }
//     window.alert(total);
// }

//4.2
// function sum(rengeTo){
//   var total = 0;
//   for (var counter = 1; counter <= rengeTo; counter++){
//     total += counter
//   }
//   window.alert(total);
// }


function sum(rangeFrom,rangeTo) {
  var total = 0;
  for (var counter = rangeFrom; counter <= rangeTo; counter++){
    total += counter;
  }
  window.alert(total);
}


function sum(rangeFrom,rangeTo = 10) {
  var total = 0;
  for (var counter = rangeFrom; counter <= rangeTo; counter++){
    total += counter
  }
  window.alert(total);
}

//配列array

var sampleArray = [1,2,3];
