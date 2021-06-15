function myFunction() {
    document.getElementById("fix").style.display="none";
    document.getElementById("close").style.display="block";
    document.getElementById("box").style.background = "green";
    document.getElementById("error").innerHTML = "Bem Vindo!";
    document.getElementById("ola").innerHTML = "Parece que você teve um contratempo, mas agora você já pode acessar o site";
};
function closeFunction() {
    document.getElementById("box").style.display="none";
    document.getElementById("note").style.display="block";
};
