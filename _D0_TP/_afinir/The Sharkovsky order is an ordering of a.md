The Sharkovsky order is an ordering of all positive integers (every positive integer appears once and only once).

In this task you will be given a positive integer N and your goal is to output the integers from 1 to N only in this order:
- start by listing all odd numbers (excluding 1) lower or equal than N in ascending order
- do it again with the same numbers multiplied by 2, then by 2², 2³, 2⁴, etc, until 3 times the next power of 2 is greater than N
- end the ordering by listing all powers of 2 (including 1) lower or equal than N in decreasing order.

For example, if N = 14:
- {3, 5, 7, 9, 11, 13}
- {3x2, 5x2, 7x2}
- {3x4} -- (3x8 = 24 > 14 so we stop here)
- {8, 4, 2, 1}

Putting these sets back to back gives us the Sharkovsky ordering of the numbers from 1 to 14: [3 5 7 9 11 13 6 10 14 12 8 4 2 1].

Here is a link to the Wikipedia page if you want to learn more after the clash: https://en.wikipedia.org/wiki/Sharkovskii's_theorem.