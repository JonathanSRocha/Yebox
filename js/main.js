import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.SkyTheme)
    YeEngine.AlterTheme(YeEngine.Theme.GreyTheme)
 
    YeEngine.ModifyW(YeEngine.GetlementById("card"),"90vh")    
    YeEngine.ModifyH(YeEngine.GetlementById("card"),"90vh")    
    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400) 

let update = setInterval(() => {
    if (YeEngine.Questions_save[0] != undefined)
    {
        YeEngine.ModifyContentClass(document.getElementById("card"),YeEngine.Questions_save[0])
        clearInterval(update)
  
    }
}, 600)