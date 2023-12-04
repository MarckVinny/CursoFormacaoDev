
//! BREAK - CONTINUE

// BREAK dentro de um laço FOR
// quando 'i' for igual a '3', então entra no BREAK e sai do laço FOR.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}


// CONTINUE dentro do laço FOR
// quando 'i' for igual a '3', ele para a iteração e vai para a próxima
// sem sair do laço FOR.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}