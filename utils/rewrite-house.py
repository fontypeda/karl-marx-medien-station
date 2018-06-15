"""
Rewrites the house.svg with a stroke value
To be run from app-root
"""

import sys

if len(sys.argv) == 1:
    print("YOu have to pass an argument (hex color)")

with open("./src/assets/svg/house-template.svg") as fh:
    cont = fh.read()

cont = cont.replace("XXXSTROKEXXX", sys.argv[1])


with open("./src/assets/svg/house.svg", "w+") as fh_out:
    fh_out.write(cont)
