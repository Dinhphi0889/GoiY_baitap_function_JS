document.addEventListener("contextmenu", function (e) {
   e.preventDefault();
   //Prevent right click
}, false);
document.onkeydown = function (event) {
   event = (event || window.event);
   if (event.keyCode == 123) {
      // Prevent F12 
      return false;
   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      // Prevent Ctrl+Shift+I 
      return false;
   }
}



/**
 * Bài 1
 */

document.getElementById("btnCount").onclick = function () {

   let string = document.getElementById("inputTextBai1").value;
   function countWords(str) {
      const words = str.toLowerCase().split(/\W+/);
      const wordCount = {};
      words.forEach(word => {
         if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
         }
      });
      return wordCount;
   }
   let result = countWords(string)
   document.getElementById("txtCountWords").innerHTML = JSON.stringify(result)
}

/**
 * Bài 2
 */

document.getElementById("btnCountBai2").onclick = function () {
   let inputArr = document.getElementById("inputArrBai2").value.split(',').map(Number);
   console.log(inputArr)
   let numCount = Number(document.getElementById('inputNumBai2').value)

   function countOccurrences(arr, value) {
      let count = 0;
      for (const element of arr) {
         if (element === value) {
            count++;
         }
      }
      return count;
   }
   let result = countOccurrences(inputArr, numCount)
   console.log(result)
   document.getElementById("txtResultBai2").innerHTML = result
}


/**
 * Bài 3
 */

document.getElementById("btnFindNum").onclick = function () {
   let arrBai3 = document.getElementById('inputArrBai3').value.split(',').map(Number)
   function findMax(arr) {
      if (arr.length === 0) {
         return 'Vui lòng nhập mảng'
      }

      let max = arr[0];

      for (let i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
            max = arr[i];
         }
      }
      return max;
   }
   let result = findMax(arrBai3)
   document.getElementById("txtNumMax").innerHTML = result
}

/**
* Bài 4
*/

document.getElementById("btnBai4").onclick = function () {
   var string = document.getElementById("inputTextBai4").value;

   function reverseString(str) {
      let reversed = "";
      for (let i = str.length - 1; i >= 0; i--) {
         reversed += str[i];
      }
      return reversed;
   }

   const reversedText = reverseString(string);
   document.getElementById("txtResultBai4").innerHTML = `Chuỗi đảo ngược của "${string}" là: "${reversedText}"`;
}


/**
* Bài 5
*/

document.getElementById("btnExchange").onclick = function () {
   let money = document.getElementById('inputMonney').value
   let exchange = document.getElementById('inputExchange').value
   function convertCurrency(amount, exchangeRate) {
      if (amount <= 0 || exchangeRate <= 0) {
         return "Số tiền hoặc tỷ giá ngoại tệ không hợp lệ";
      }
      const convertedAmount = amount / exchangeRate;
      
      return `${amount} VND tương đương: ${convertedAmount.toFixed(2)}$.`;

   }
   let result = convertCurrency(money, exchange)
   document.getElementById("txtBai5").innerHTML = result
}
