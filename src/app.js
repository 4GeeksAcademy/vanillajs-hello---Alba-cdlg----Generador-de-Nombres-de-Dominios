// import "bootstrap"; 
// import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
  // Write your code here
  let pronoun = ['the', 'our', 'his'];
  let adj = ['great', 'big', 'amazing'];
  let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];

  // Dominios
  function generateDomains(pronoun, adj, noun) {
    let domains = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          domains.push(`${p}${a}${n}.com`);
          domains.push(`${p}${a}${n}.es`);
        }
      }
    }
    return domains;
  }

  console.log(generateDomains(pronoun, adj, noun).join('\n'));
// };