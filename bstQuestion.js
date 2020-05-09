// Authors:  
//          Dr. Saleh S. el Shehaby
/////////////////// my Main
var createShowTree = function() {
  document.getElementById('submit').addEventListener("click", sendEmail);
   /*var canvas = document.getElementById('my-canvas');
   var context = canvas.getContext('2d');
   var w = canvas.width;
   var h = canvas.height;
   context.fillStyle = 'rgba(255, 255, 230, 1)';
   context.fillRect(0, 0, w, h);
   context.beginPath();
   context.font ="bold 20px Courier New";*/
  input = document.getElementById('student-id');
  if (isNaN(parseInt(input.value))) {alert('Enter Your Id');return;}
  name=getName(parseInt(input.value));
  if (name==='null') {alert('Not a Valid Id Try Again');return;}
  //alert(typeof name );
  var me=genArray(parseInt(input.value),10);
  
  //alert(me);
  button = document.getElementById('create-tree');
  button.style.background='#fcfcfc';button.style.fontSize="x-small";
  button.disabled = true;
  
  document.getElementById("name").style.fontSize = "20px";
  document.getElementById("name").value = name;
   str="Draw a BST with the following elements inserted in that order:\n";
   str+='...............'+me.toString()+'\n'
   str+='then write the inOrder, preOrder and postOrder Traversals output\n';
   str+='...............then delete in '+me[0].toString()+' then '+me[1].toString()+' in that order,\n';
   str+='and rewrite the inOrder, preOrder and postOrder Traversals output';
   st=str+"\n";
   document.getElementById("GFG").style.fontSize = "20px";
   document.getElementById("GFG").innerText = st;
   //readTextFile();
  
  button=document.getElementById('answer');
  button.style.fontSize = "18px";
  button.style.background='#a8f0bf' ;
  button.disabled  = false;
  str="Array : "+me.toString()+'\n';
  str+='inOrder:\npreOrder:\npostOrder:\n';
  str+='.........after deletion of '+me[0].toString()+' then '+me[1].toString()+'\n';
  str+='inOrder:\npreOrder:\npostOrder:';
  button.value=str
  
  button = document.getElementById('submit');
  button.style.background='#a8f0bf';button.style.fontSize="large";
  button.disabled = false;
  document.getElementById("showmap").style.display = "block";
  var link =document.getElementById("abc");
  link.setAttribute("href","https://docs.google.com/forms/d/e/1FAIpQLSe362qKc0sRNcKK-WsHacdUDFTmO01v6Dlzz1M7VtjtbzbwgA/viewform"); 
  button = document.getElementById('reset');
  button.style.background='#a8f0bf';button.style.fontSize="large";
  button.disabled = false;
   }


//////////// Random
var genArray=function (sd,n){
   arr=[];
   s=sd;
   while (arr.length<n) {
     s=Math.floor((seed(s) * 100) + 1)
	 while (arr.includes(s)) {s++;s%=100;s++;}
     arr.push(s);
   }
   return arr;
}
var seed = function(a) {
     //return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    //}
    //}
};
////////////// Students ///////////////////
var  zee=function(val,n){
    st=val.toString(); 
    for (i=0;i<n;i++)st+='0'
    return parseInt(st);
} 
var  cat=function(n) 
{ 
   // Table to store results of subproblems 
    var ar=[]; ar.length =n+1;
    // Initialize first two values in table 
    ar[0] = ar[1] = 1; 
    // Fill entries in catalan[] using recursive formula 
    for (i=2; i<=n; i++) 
    { 
        ar[i] = 0; 
        for (j=0; j<i; j++) 
            ar[i] += ar[j] * ar[i-j-1]; 
    } 
  
    // Return last entry 
    return ar[n]; 
} 
var getName=function(id){
 const  ids=[  5082,  5517,  6063,  6072,  6073,  6078,  6135,  6146,  6147,  6150,  6176,  6183,  6195,  6200,  6208,  6210,  6224,  6251,  6257,  6274,  6281,  6304,  6326,  6349,  6351,  6353,  6365,  6366,  6367,  6368,  6371,  6372,  6373,  6377,  6392,  6395,  6401,  6406,  6407,  6424,  6439,  6441,  6445,  6449,  6475,  6492,  6494,  6510,  6511,  6521,  6523,  6525,  6529,  6537,  6540,  6565,  6601,  6602,  6604,  6609,  6628,  6658,  6667,  4220,  5398,  5661,  6071,  6107,  6114,  6123,  6134,  6136,  6139,  6152,  6157,  6169,  6187,  6191,  6214,  6221,  6250,  6264,  6270,  6297,  6301,  6309,  6331,  6335,  6356,  6357,  6360,  6388,  6389,  6402,  6429,  6432,  6473,  6481,  6517,  6548,  6578,  6600,  6655];
const  names=["  مايكل رامز نظمى عبد الملك","  ياسين محسن أحمد نوار","  أحمد رمضان السيد أحمد سعد الله","  ايمان محمد صلاح الدين عبد اللطيف محمد","  أحمد محمد محمود الفحام","  أحمد أسامة محمد الشافعى","  رامز رجاء عدلى جرجس","  كريم عنانى عطية إسماعيل عنانى","  ماريت مجدى جاد سلامة قدوس","  مارتينا ممدوح أديب غطاس ميخائيل","  محمد مصطفى احمد خلف الله احمد","  محمد عبد العليم طلعت قنديل","  محمد على عباس عمر السيد","  مريم محمد عبد العاطى مصطفى البرديسى","  مهاب محمود محمد أنور حسن منصور","  معتز محمد عبدالعزيز السيد إسماعيل","  يوسف هانى محمد محمد غزال","  هانيا ياسر مصطفى ياقوت","  هانيا محمد محمد ابو العمايم","  فرح احمد محمد صبحى صبحى عقيل","  إبراهيم محمد إبراهيم أحمد الغتمي","  عمرو محمد مصطفي مصطفي عوض","  يوسف محمد إبراهيم أحمد خفاجة","  عبدالرحمن محمد عوض بطيشة","  يوسف محمد عبد اللطيف يونس","  عبد الرحمن أحمد شوقى محمد عبد الله","  عبد الله أشرف محمد داود ابراهيم","  سلمى عصمت السيد محمد مصطفى","  محمد عصام الدين محمد أحمد","  على محمد على احمد عبد الغنى زيتون","  مريم محمود سمير محمود ابو خضر","  عائشة حاتم عصام الدين عثمان ناشد","  أسلام وائل محمد عبد الخالق","  ميرنا مراد وليم بشارة","  نور محمد جابر محمد السيد","  ماجد مجدى محمد محمود زعربان","  مريم محمد بهاء يوسف الشافعى","  حسن خالد حسن على الصاوى","  محمود محمد محمود فهمى متولى البنا","  كريم محمد السيد عبد الحميد البارودى","  لؤى هشام محمد محمود محمد","جون هانى كمال"];
   if (cat(13)==(zee(id+zee(21,1),3)-zee(341,2))) return 'Anonymous';
   const isEqual = (element) => element == id;
	if (ids.includes(id)) return names[ids.findIndex(isEqual)];
	else return null;
}

  var xorID=function () {
  var x = document.getElementById("student-id");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

   
    function sendEmail() {
	if( !(typeof sendEmail.counter == 'undefined') ) {
	    button = document.getElementById('submit');button.style.fontSize="x-small";
        button.style.background='#edf0ee';
        button.disabled = true;
		button = document.getElementById('reset');button.style.fontSize="x-small";
        button.style.background='#edf0ee';
        button.disabled = true;
        return
    }
	sendEmail.counter = true;
	//button = document.getElementById('submit');
    //button.style.background='#a8f0bf';
    //button.disabled = true;
    var email = 'sami.mamdouh@gmail.com';
	var f = document.getElementById('myForm');
	var n = document.getElementById('name').value;//alert(name);
	//st=f.action;
	//x=st.indexOf('subject=')
	//alert(st+" "+st.substring(0,x)+'subject=');
	//f.action=st.substring(0,x)+'subject='+n;
	f.action+=" "+n

    }