---
title: Estrutura condicional IF-ELSE
description: Estrutura de um IF-ELSE
---

:::note
    Utilizado para fazer uma tomada de decisão
:::

__if__ é a verificação, valida um conjunto operadores lógicos e se for **VERDADEIRO** ele faz um conjunto de comandos internos

Caso o __if__ não seja verdadeiro, ou ele pula para outro __if__ ou entra no bloco __else__ que é usado caso não tenha opções.

Estrutura base:

```csharp

if (condicao) 
{
    // Entra aqui caso a condicao for verdadeira
}
else if (outraCondicao)
{
    // Entra aqui caso a primeira condição for falsa
}
else {
    // Entra aqui caso não tenha mais opções
}

// OBS: podemos colocar quantos else if quisermos

```

