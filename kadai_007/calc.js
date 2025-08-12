function checkMultiple(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log( "3と5の倍数です" );
  } else if (num % 3 === 0) {
    console.log( "3の倍数です" );
  } else if (num % 5 === 0) {
    console.log( "5の倍数です" );
  } else {
    console.log( num ); //どの条件にも当てはまらないとき
  }
}

checkMultiple(15); // 例: 15は3と5の倍数
checkMultiple(6); // 例: 6は3の倍数
checkMultiple(10); // 例: 10は5の倍数
checkMultiple(7); // 例: 7はどの条件にも当てはまらない