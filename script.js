function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",()=>{
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor="#333"
        document.querySelector("#enc-btn").style.backgroundColor="#222"
        document.querySelector("#main h1 span img").style.rotate="180deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",()=>{
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#333"
        document.querySelector("#dec-btn").style.backgroundColor="#222"
        document.querySelector("#main h1 span img").style.rotate="0deg"
    })
    
}
btnClicking();

var clutter="";
function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",()=>{
        var input=document.getElementById("textarea").value;
        var password=document.getElementById("password").value;

        const str=input.split("")
        str.forEach(element => {
            clutter+=`&#128${(element.charCodeAt())} `
        });
        document.querySelector("#result").innerHTML=clutter

        var data=[];

        if(JSON.parse(localStorage.getItem("data1"))){
            data=JSON.parse(localStorage.getItem("data1"));
            data.push({"pass":password,"input":input,"clutter":clutter});
        }else{
            data=[{"pass":password,"input":input,"clutter":clutter}];
        }

        localStorage.setItem(`data1`,JSON.stringify(data));

        
    })
}
encryption()

function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",()=>{
        var clutter2="";

        var input2=document.querySelector("#emojimsg").value
        var password2=document.querySelector("#dec-password").value

        var user=JSON.parse(localStorage.getItem("data1"))

        var str2=input2.split(" ");

        str2.forEach(el=>{
            clutter2+=`&#${el.codePointAt(0)} `
        })

        var found;

        for(let i of user){
            if(i.clutter==clutter2){
                found=i;
            }
        }
        if(found.clutter==clutter2){

            document.querySelector("#dec-result").innerHTML=found.input

        }else{
            document.querySelector("#dec-result").style.color=`red`
            document.querySelector("#result").innerHTML="Wrong Password!"
        }

    })
}
decryption();