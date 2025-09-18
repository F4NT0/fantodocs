---
title: Operadores
description: Operadores de dados
---

## Operadores Aritméticos

---

- **+** = Soma
- **-** = Subtração
- `*` = Multiplicação
- **/** = Divisão
- **%** = Resto da divisão

```csharp

int valor = 2 + 2; // 4
int valor = 2 - 2; // 0
int valor = 2 * 2; // 4
int valor = 2 / 2; // 1
int valor = 2 % 2; // 0

```

## Operadores de Atribuição

---

- **=** = Atribui um valor
- **+=** = Soma o mesmo valor com um novo valor
- **-=** = Subtrai o mesmo valor com um novo valor
- `*=` = Multiplica o mesmo valor com um novo valor
- **/=** = Divisão do mesmo valor com um novo valor

```csharp

int x = 0; //Atribui um valor a uma variável
x += 5; // mesmo que x = x + 5; e resulta em x = 5
x -= 1; // mesmo que x = x - 1; e resulta em x = 4 (5 - 1 = 4)
x *= 10; // mesmo que x = x * 10;  e resulta em 40 (4 * 10 = 40)
x /= 2; // mesmo que x = x / 2; e resulta em 20 (40 / 2 = 20)

```

## Operadores de comparação

---

Retorna valores booleanos

- `==` = Igual que
- `!=` = Diferente de
- `>` = Maior que
- `<` = Menor que
- `>=` = Maior ou Igual a
- `<=` = Menor ou Igual a

```csharp

5 == 5; // True
4 != 3; // True
4 != 4; // False
6 > 5; // True
4 < 5; // True
4 <= 4; // True
5 >= 3; // True

```

## Operadores condicionais

---

Operador condicional é um sistema de uma linha para verificar dois valores usando os operadores __?__ e __:__ para fazer a seguinte estrutura:

```csharp

<condição> ? <se for true, retorna esse valor> : <se for false, retorna esse valor>

```

Vamos ver o seguinte exemplo:

```csharp

int saleAmount = 1001;

int discount = saleAmount > 1000 ? 100 : 50;

```

No exemplo acima, caso o valor de __saleAmount__ for maior que 1000 ele vai salvar na variável __discount__ o valor de 100, caso não seja maior que 1000 ele vai adicionar o valor de 50.

## Operadores de Incremento e Decremento

---

==Podemos alterar o valor de uma variável a cada vez que é chamado==

No C# como em qualquer linguagem de alto nível podemos alterar o valor de uma variável toda vez que a chamamos em algum processo.

| Simbolo | O que faz       |
| ------- | --------------- |
| **++**  | Incrementa em 1 |
| **--**  | Decrementa em 1 |

- Podemos incrementar o valor __antes__ de chamar a variável

```csharp
int x = 5;
Console.WriteLine(++x); // 6
```

- Podemos incrementar o valor __depois__ de chamar a variável

```csharp
int x = 5;
Console.WriteLine(x++); // 5
Console.WriteLine(x); // 6
```

- Podemos decrementar o valor __antes__ de chamar a variável

```csharp
int x = 5;
Console.WriteLine(--x); // 4
```

- Podemos decrementar o valor __depois__ de chamar a variável

```csharp

int x = 5;
Console.WriteLine(x--); // 5
Console.WriteLine(x); // 4

```

## Operadores Lógicos

---

Retorna valores booleanos

Usado para operações condicionais

- `&&` = AND lógico
    - Todas as condições devem ser verdadeiras
- `||` = OR lógico
    - Se pelo menos uma for verdadeira
- `!` = NOT lógico
    - Nega o valor, se for true vira false e vice versa

```csharp

int x = 12;
bool valor = (x > 25) && (x < 40); // False
bool valor = (x > 25) || (x < 40); // True
bool valor = !(x > 25) && (x < 40); // True

```
