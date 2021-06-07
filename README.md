# Nike Challenge

## Description
Write code to return the first 100 shiny numbers greater than n.  A shiny number is a number where each base-10 digit (from left to right) is ≤ the next digit

  - Shiny: 123, 499, 111, 0, 246888
  - Not Shiny: 1231, 21, 63

Please document any assumptions.

## Assumptions
- Solution is fixed for the first 100.
- Shiny numbers are natural numbers including the 0.
- The first shiny numbers < 100 can be considered the base for the shiny ("shiny base") numbers and can be obtained by brute force.
- Knowing the shiny base the rest of the shiny numbers can be easily deducted (just like we naturally do with base-10).




 Shiny-Base :

    0
    1   11
    2   12  22
    3   13   `  33
    4    .   `  .  44
    5    .   .  .  .  55
    6    .   .  .  .  .  66
    7    .   .  .  .  .   .  77
    8    .   .  .  .  .   .   .  88
    9   19   .  .  .  .  69  79  89   99


