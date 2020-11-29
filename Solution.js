function longestSlideDown (pyramid) {
 if (pyramid.length != 1)
 {
 var sum=[];
 var bound=pyramid.length-1;
 for (var i=0; i<pyramid[bound].length-1;++i)
 {  
    parenty=pyramid[bound-1][i];
    
    //console.log(pyramid[bound][i],pyramid[bound][i+1])
    if(pyramid[bound][i]+parenty > pyramid[bound][i+1]+parenty)
    {
      pyramid[bound-1][i]=pyramid[bound][i]+parenty
    }
    else 
    {
      pyramid[bound-1][i]=pyramid[bound][i+1]+parenty
    }
    //console.log(parenty);  
 }
  pyramid.pop();
  if (pyramid.length==1)
  {
    return parseInt(pyramid);
  }
  else 
  {
    return longestSlideDown (pyramid);
  }
  
}

else return parseInt(pyramid);
}
