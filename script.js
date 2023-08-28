function change1(){
    let name = document.getElementById('username1')
   
 document.getElementById('name').innerHTML = name.innerHTML

    
    }
function change2(){

let name1 = document.getElementById('username2')
 document.getElementById('name').innerHTML = name1.innerHTML
    
        
        }
function change3(){
    let name2 = document.getElementById('username3')

document.getElementById('name').innerHTML = name2.innerHTML

        
            
            }
function change4(){
    let name3 = document.getElementById('username4')
              
document.getElementById('name').innerHTML = name3.innerHTML
            
            
                
        }
function change5(){
            let name4 = document.getElementById('username5')
                      
        document.getElementById('name').innerHTML = name4.innerHTML
                    
                    
                        
                }
function send(){
   let msg = document.getElementById('input').value
    document.getElementById("message").innerHTML = msg
}