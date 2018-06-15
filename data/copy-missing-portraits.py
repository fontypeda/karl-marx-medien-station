"""Copies male and female placeholders for slugs without a portrait"""

import os
import shutil

ASSETS_DIR = "../src/assets/portraits/"

# list of [slug, gender]
missing_portraits = [
    ["heinr_marx", "m"],
    ["carl_westph", "m"],
    ["nik_vald", "m"],
    ["thom_simon", "m"],
    ["joh_pet_stein", "m"],
    ["ludw_simon", "m"],
    ["vik_vald", "m"],
    ["joh_aug_mess", "m"],
    ["aug_gus_las", "m"],
    ["caro_schoe", "f"],
    ["mary_burns", "f"],
    ["fra_marx", "f"],
    ["heinr_gui_marx", "m"],
    ["agn_ruge", "f"]
]

for missing_portrait in missing_portraits:
    target = os.path.join(ASSETS_DIR, missing_portrait[0] + ".jpg")
    if missing_portrait[1] == "f":
        shutil.copy(
            "portraits-peter/portraits-peter/blank_woman.jpg",
            target
        )
    else:
        shutil.copy(
            "portraits-peter/portraits-peter/blank_man.jpg",
            target
        )
