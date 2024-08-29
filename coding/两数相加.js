var addTwoNumbers = function(l1, l2) {
  //carry为进位，初始化为0   
  var c1 = l1, c2 = l2, c3, l3, carry = 0;

  while(c1 || c2 || carry) {
      var v1 = 0, v2 = 0;

      if(c1) {
          //根据前文给出的代码结构val、next
          v1 = c1.val;
          c1 = c1.next;
      }

      if (c2) {
          v2 = c2.val;
          c2 = c2.next;
      }

      var sum = v1 + v2 + carry;
      carry = Math.floor(sum / 10);//得到进位

      if(!c3) {
          l3 = new ListNode(sum % 10);
          c3 = l3;
      } else {
          c3.next = new ListNode(sum % 10);
          c3 = c3.next;
      }
  }
  return l3;

};