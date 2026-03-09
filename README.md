# Package-Sorting-Challenge

This function sorts packages in a robotic factory according to their dimensions and mass.

## Rules

A package is **bulky** if:
- Volume ≥ 1,000,000 cm³
- Any dimension ≥ 150 cm

A package is **heavy** if:
- Mass ≥ 20 kg

## Stacks

STANDARD → not bulky and not heavy  
SPECIAL → bulky OR heavy  
REJECTED → bulky AND heavy

## Run

node sort.js
