// ES6
/*let a = 5;
{
  let a = 7;
  console.log(a);
}
console.log(a)*/
// =============================================================================
//const
/*let user = {name:'xiaolaohui',age:66}
const c = user;
c.name = "zhizhang";*/
// =============================================================================
// 解构赋值
/*let [a,...c] = [1,2,3];

console.log("a:",a);
console.log("c:",c);*/
/*let obj = {a:6,b:30};
let a = 0;
({a} = obj)
console.log(a);*/
// =============================================================================
/*function la(num){
  return new Promise(function(resovle,reject){
    if(typeof num == 'number')
      {resovle(123);}
    else
      {reject();}
  }).then((data)=>{
    console.log('this is a Number'+data);

  }).then(null,()=>{
    console.log('this is not a Number');
  })
}
la(2);
*/

// =============================================================================
tanchuang=()=>{
  let flag = confirm('lalala');

/*  $.confirm({
    title:'hehe',
    content:'hello',
    confirmButton:'认了',
    cancelButton:'别，再等等',
    confirm:function(){
      flag = true;
    }
  })*/
  return new Promise((resolve,reject)=>{
    if(flag)
      resolve();
    else
      reject();
  }).then(()=>{
    $('body').css('background','#777');
  }).then(null,()=>{
    $('body').css('background','red');
  })
}
tanchuang();
