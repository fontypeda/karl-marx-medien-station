
import sys
import os
import glob

all_files = glob.glob("*")

for _file in all_files:
    print(_file)
    ext = _file.rpartition(".")[2]
    base = _file.rpartition(".")[0]
    if ext in ["jpg", "jpeg", "tiff", "tif"]:
        print("Transforming file")
        new_file = base.replace(" ", "_") + ".jpg"
        os.system('convert -resize {target_size} "{input}" {output}'.format(
            input=_file,
            output=new_file,
            target_size=800
        ))
