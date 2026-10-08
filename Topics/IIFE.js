// Immidiately Invoked Functions Expressions (IIFE)

/*
    Used to create local isolated local scope , which prevents variables from leaking into and polluting the global namespace
*/
// named IIFE
(function chai(){
    console.log("DB Connected");
})();

((name)=>{
    console.log("DB Connected ",name);
})("raghav");