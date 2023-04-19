

var menu = document.getElementById("type")
var dropdown = document.getElementById("mdropdown")
var other=document.getElementById("other")

var acnt =document.getElementById("acnt")
var subpInfo = document.getElementById("subpInfo")


var depo = document.getElementById("depo")
var subpInfo2 = document.getElementById("subpInfo2")



var card = document.getElementById("cards")
var subpInfo3 = document.getElementById("subpInfo3")



var loan = document.getElementById("loans")
var subpInfo4 = document.getElementById("subpInfo4")


var insu = document.getElementById("insur")
var subpInfo5 = document.getElementById("subpInfo5")



// First Product info
acnt.onmouseover=function(){
    subpInfo.style.display="block"
}
acnt.onmouseout=function(){
    subpInfo.style.display="none"
}
    
subpInfo.onmouseover=function(){
        subpInfo.style.display="block"
 }
subpInfo.onmouseout=function(){
        subpInfo.style.display="none"
}




//  Second Product Info
depo.onmouseover=function(){
    subpInfo2.style.display="block"
}
depo.onmouseout=function(){
    subpInfo2.style.display="none"
}
    
subpInfo2.onmouseover=function(){
        subpInfo2.style.display="block"
 }
subpInfo2.onmouseout=function(){
        subpInfo2.style.display="none"
}



//  Third Product Info
card.onmouseover=function(){
    subpInfo3.style.display="block"
}
card.onmouseout=function(){
    subpInfo3.style.display="none"
}
    
subpInfo3.onmouseover=function(){
        subpInfo3.style.display="block"
 }
subpInfo3.onmouseout=function(){
        subpInfo3.style.display="none"
}



// Four Product Info
loan.onmouseover=function(){
    subpInfo4.style.display="block"
}
loan.onmouseout=function(){
    subpInfo4.style.display="none"
}
    
subpInfo4.onmouseover=function(){
        subpInfo4.style.display="block"
 }
subpInfo4.onmouseout=function(){
        subpInfo4.style.display="none"
}

// Fifth Product Info
insu.onmouseover=function(){
    subpInfo5.style.display="block"
}
insu.onmouseout=function(){
    subpInfo5.style.display="none"
}
    
subpInfo5.onmouseover=function(){
        subpInfo5.style.display="block"
 }
subpInfo5.onmouseout=function(){
        subpInfo5.style.display="none"
}





// Make Payment Drop Down 


var mt = document.getElementById("moneytran")
var subm1 = document.getElementById("subminfo")


var mt2 = document.getElementById("billpayment")
var subm2 = document.getElementById("subminfo2")


var mt3 = document.getElementById("lnc")
var subm3 = document.getElementById("subminfo3")

var mt4 = document.getElementById("investment")
var subm4 = document.getElementById("subminfo4")

// First Make Payment

mt.onmouseover=function(){
    subm1.style.display="grid"
}
mt.onmouseout=function(){
    subm1.style.display="none"
}
    
subm1.onmouseover=function(){
        subm1.style.display="grid"
 }
subm1.onmouseout=function(){
        subm1.style.display="none"
}

// Second Make Payment
mt2.onmouseover=function(){
    subm2.style.display="grid"
}
mt2.onmouseout=function(){
    subm2.style.display="none"
}
    
subm2.onmouseover=function(){
        subm2.style.display="grid"
 }
subm2.onmouseout=function(){
        subm2.style.display="none"
}

// Third Make Payment

mt3.onmouseover=function(){
    subm3.style.display="grid"
}
mt3.onmouseout=function(){
    subm3.style.display="none"
}
    
subm3.onmouseover=function(){
        subm3.style.display="grid"
 }
subm3.onmouseout=function(){
        subm3.style.display="none"
}

// fourth

mt4.onmouseover=function(){
    subm4.style.display="grid"
}
mt4.onmouseout=function(){
    subm4.style.display="none"
}
    
subm4.onmouseover=function(){
        subm4.style.display="grid"
 }
subm4.onmouseout=function(){
        subm4.style.display="none"
}









menu.style.maxHeight="0px"

function togglemenu(){
    if(menu.style.maxHeight=="0px"){
        menu.style.maxHeight="100%"
        menu.style.background="#1E242A"
        dropdown.style.animation="1s anim linear"
        dropdown.src="minus.png"
        setTimeout(() => {
            dropdown.style.marginLeft="75vw"
            dropdown.style.background="#1E242A"
            dropdown.style.marginTop="1vh"
            
        }, 1000);
        other.style.display="none"

        
    
    }
    else{
        menu.style.maxHeight="0px"
        
        
        dropdown.style.background="none"
        dropdown.src="icon.png"
       
            dropdown.style.marginLeft="4vmin"
            
            dropdown.style.marginTop="0vh"

      
        other.style.display="grid"
    }
}

// Payment Gateway


/* Start client-defined Callback Handler Functions */
      function onOpenHandler () {
        alert('Payments Modal is Opened');
      }


      function onCloseHandler () {
        alert('Payments Modal is Closed');
      }

      function onPaymentSuccessHandler (response) {
        alert('Payment Success');
        console.log('Payment Success Response', response);
      }

      function onPaymentFailureHandler (response) {
        alert('Payment Failure');
        console.log('Payment Failure Response', response);
      }
      /* End client-defined Callback Handler Functions */

      /* Configuring Handlers */
      Instamojo.configure({
        handlers: {
          onOpen: onOpenHandler,
          onClose: onCloseHandler,
          onSuccess: onPaymentSuccessHandler,
          onFailure: onPaymentFailureHandler
        }
      });
      
      function onButtonClick() {
        Instamojo.open('http://www.instamojo.com/@vlakhani1010');
      }