---
title: Laço de Repetição FOR
description: Como utilizar o FOR no C#
---

:::note
    Verifica cada item dentro de um conjunto de items
:::

Executa uma determinada operação várias vezes

Utilizamos a palavra reservada __for__

- Temos 3 parâmetros
    - Contador
    - Condição
    - Incremento

Vamos ver o seguinte exemplo:

```csharp
for (int i = 0 ; i <= 5 ; i++)
```

- `int i = 0` é o contador, iniciado em zero
- `i <= 5` é a condição, onde ele vai chegar até o valor ser 5
- `i++` é o incremento, onde o valor de i vai subindo um a um

Outros exemplos:

```csharp
for (var i = 0 ; i <= 5 ; i++) // Conta de 0 á 5

for (var i = 0 ; i < 5 ; i++) // Conta de 0 á 4

for (var i = 5 ; i >= 0 ; i--) // Conta de 5 á 0
```

Agora o exemplo completo de um For para imprimir o valor de i

```csharp
for (int i = 0 ; i <= 5 ; i++)
{
    Console.WriteLine(i); // Toda vez que entrar aqui ele vai imprimir o i
}

// SAIDA: 
// 0
// 1
// 2
// 3
// 4
// 5
```

# For each

Com vetores podemos usar um tipo diferente de for chamado __foreach__ com ele podemos interagir com os valores definidos dentro de um vetor

Vamos ver o seguinte exemplo de Vetor:

```csharp
int[] numbers = { 10, 20, 30, 40 };
```

Queremos interagir com os valores dentro desse vetor, de vez de determinarmos uma posição, podemos interagir com ele em todos os valores

```csharp
int[] numbers = { 10, 20, 30, 40 };

foreach (int num in numbers)
{
    Console.WriteLine($"Number: {num}"); // vai imprimir todos os valores
}
```
