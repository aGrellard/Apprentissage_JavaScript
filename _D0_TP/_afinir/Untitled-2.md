Implement the shoelace formula.

Given N 2d Cartesian coordinates (X_1, Y_1), (X_2, Y_2), ... (X_N, Y_N), compute |(X_1 * Y_2 + X_2 * Y_3 + ... + X_(N - 1) * Y_N + X_N * Y_1) - (Y_1 * X_2 + Y_2 * X_3 + ... + Y_(N - 1) * X_N + Y_N * X_1)| / 2.

Do not print a decimal point if the result is an integer (i.e., 1, 1.5).

Diagram:
https://web.archive.org/web/20210617214637id_/https://upload.wikimedia.org/wikipedia/commons/a/a9/Shoelace3.png

(The formula computes the area of a polygon with vertices at the listed coordinates.)
Entrée
Line 1: N
Lines 2-(N + 1): X Y
Sortie
Line 1 : The result of applying the shoelace formula to the input.
Contraintes
3 ≤ N: int ≤ 1,000
-999 ≤ X: int ≤ 999
-999 ≤ Y: int ≤ 999
Exemple
Entrée

3
0 0
0 1
2 0

Sortie

1

