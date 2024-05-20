// 7 - Desafio - Jogo de Pedra Papel Tesoura:
// O usuário deve poder escolher entre 3 opções: "pedra", "papel" ou "tesoura"
// A máquina deve escolher aleatoriamente entre as opções "pedra", "papel" ou "tesoura"
// O algoritmo deve fazer a comparação para descobrir quem foi o vencedor da partida.
// Lembrando:
// Pedra vence tesoura;
// Tesoura vence papel;
// Papel vence pedra;

function captura(){
  let escolha = document.getElementsByName('escolha').value
  for (i=0; i< escolha.length; i+=1){
    if (escolha[i].checked)
      document.getElementById("escolha_usuario").innerHTML = escolha[i].value
  }
}
