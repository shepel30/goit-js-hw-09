import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),o=()=>{const a={email:e.email.value,message:e.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))};(()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email.value=t.email||"",e.message.value=t.message||""}})(),e.addEventListener("input",o),e.addEventListener("submit",a=>{if(a.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""){alert("Будь ласка, заповніть всі поля.");return}console.log({email:e.email.value,message:e.message.value}),localStorage.removeItem("feedback-form-state"),e.reset()})});
//# sourceMappingURL=commonHelpers2.js.map
