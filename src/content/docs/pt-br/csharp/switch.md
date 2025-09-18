---
title: Estrutura condicional Switch
description: Utilizando Switch
---

- Quando temos muitas decisões ao mesmo tempo é o momento de usar __Switch__.
- Executado em forma de cascata, andando por cada opção configurada.
- Devemos parar a execução com o comando __break__.
- Possui uma execução padrão chamada __default__.

Estrutura base de um Switch:

```csharp

switch(valor)
{
    case opcao: fazAlgo; break;
    //...
    default: fazAlgoDefault; break;
}

```

Exemplo para validar se um valor é 1:

```csharp

int valor = 1;
switch(valor)
{
    case 1: Console.WriteLine("Valor é 1"); break;
    case 2: Console.WriteLine("Valor é 2"); break;
    case 3: Console.WriteLine("Valor é 3"); break;
    default: Console.WriteLine("Valor é maior que 3"); break; // Caso não for 1,2 ou 3
}

```

Podemos usar qualquer tipo de dado:

```csharp

int valor = "Teste";
switch(valor)
{
    case "Fulano": Console.WriteLine("Valor é Fulano"); break;
    case "Teste": Console.WriteLine("Valor é Teste"); break;
    case "Papa": Console.WriteLine("Valor é Papa"); break;
    default: Console.WriteLine("Valor diferente esperado"); break;
}

```
