/*for (var i=0;i<10;i++)
{
 console.log(i);
}
*/
 var flag=0;
var range=Number(prompt("enter the range"));
for(var s=2;s<range;s++)
{
    for(var j=2;j<s;j++)
    {
        if(s%j===0)
        {
        flag++;
        break;
        }
    else
    {
        flag=0;
    }
   }
 if(flag==0)
    {
        console.log(s);
    }

}


