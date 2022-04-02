
    
document.getElementById("btn").addEventListener("click",function(){


    let txt=document.getElementById("input_text").value;

    checkpalindrome(txt);
});
    function checkpalindrome(txt){

        let txt_new=txt.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let len=txt_new.length;
        let halflen=Math.floor(len/2);
        let result =document.getElementById("result");
        
        for( let i=0;i<halflen;i=i+1){


            if(txt_new[i]!==txt_new[len-1-i])
            {
                result.textContent="nope.not a palindrome"
           
           return;
            }
            result.textContent="yes. it is  a palindrome"
           
        }
    }
    
    
