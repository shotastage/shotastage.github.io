#!/usr/bin/env python3

import os
import subprocess
import shutil
import sys
import platform
from distutils import dir_util
from multiprocessing import Pool

import notify



## Function for debug console.
def Log(string, withError = False, withNotify = False):
    if withError:
        print('\033[31mSite Deployer: ' + string + '\033[0m')
        notify.say(string)
    else:
        print('\033[32mSite Deployer: \033[0m' + string)

    if withNotify:
        if platform.system() == 'Darwin':
            os.system("say web site building successfully completed")
            os.system("osascript -e 'display notification \"" + "Site Deployer: " + string + "\"'")



## Preparation function
def preparation():

    # Check deploy gate dir.
    if not os.path.isdir("./new/dist"):
        os.mkdir("./new/dist")
        Log("Created distribution directory.")

    if not os.path.isdir("./node_modules"):
        Log("Node requirements are not installed.")
        try:
            subprocess.call(["yarn", "install"])
        except:
            Log("Failed to run yarn install.", withError = True)
            Log("Node.js and Yarn haven't installed?", withError = True)
            exit(1)



# Cleaner
def clean():
    Log("Cleaning source tree.")
    if os.path.isdir("./new/dist"):
        shutil.rmtree("./new/dist/")


class Compiler():

    def compile_pug(self):
        target_pages = []

        for pug_files in os.listdir(os.getcwd() + "/new"):
            if ".pug" in pug_files:
                target_pages.append(pug_files)

        Log("Compiling pug...")
        for page in target_pages:
            try:
                output = subprocess.check_output(["./node_modules/.bin/pug", os.getcwd() + "/new/" + page, "--out", "./new/dist/"])
            except:
                Log("Failed to compile Pug!", withError = True)
                Log("You may not install pug and pug-cli?", withError = True)
                print(output)
                exit(1)


    def compile_sass(self):
        Log("Compiling sass...")
        try:
            output = subprocess.check_output(["./node_modules/.bin/node-sass", "--output-style", "compressed", "./new/styles/site.scss", "./new/dist/site.css"])
        except:
            Log("Failed to compile Sass!", withError = True)
            Log("You may not install node-sass?", withError = True)
            exit(1)


    def create_js(self):

        # Variables
        script_string = ""


        # JavaScript Libraries
        Log("Reading JavaScript libraries...")
        try:
            libraries = os.listdir("./new/scripts/libs")
        except:
            Log("Failed to get JavaScripts!", withError = True)

        Log("Generating minified libraries...")
        for lib in libraries:
            if ".js" in lib:
                out = subprocess.check_output(["./node_modules/.bin/javascript-obfuscator", "./new/scripts/libs/" + lib , "--output", "tmp.js"])
                with open("tmp.js", "r") as f:
                    script_string += f.read()
                    os.remove("tmp.js")


        # Site Script
        Log("Reading site scripts...")
        try:
            scripts = os.listdir("./new/scripts/")
        except:
            Log("Failed to get JavaScripts!", withError = True)

        Log("Generating minified scripts...")
        for js in scripts:
            if ".js" in js:
                out = subprocess.check_output(["./node_modules/.bin/javascript-obfuscator", "./new/scripts/" + js , "--selfDefending", "false", "--output", "tmp.js"])
                with open("tmp.js", "r") as f:
                    script_string += f.read()
                    os.remove("tmp.js")


        os.mkdir("./new/dist/script/")
        with open("./new/dist/script/site.js", "w") as write_target:
            write_target.write(script_string)

        shutil.copy2("./new/dist/script/site.js", "./new/dist/site.js")


    def create_assets(self):
        pass
        """
        Log("Creating assets pack...")
        try:
            dir_util.copy_tree('./assets/', './dist/')
        except:
            Log("Failed to copy assets directory. ", withError = True)
        """


    def compress_svg(self):
        pass



class DebugUtils():
    def open_in_chrome(self, URL = os.curdir + "/new/dist/index.html"):
        Log("Opening in Chrome...")

        if platform.system() == "Darwin":
            try:
                subprocess.call(["open", "-a", "Google Chrome", URL])
            except:
                Log("Failed to excute Chrome.", withError = True)
        elif platform.system() == "Windows":
            try:
                subprocess.call(["start", "Google Chrome", URL])
            except:
                Log("Failed to excute chrome running start chrome command.", withError = True)
        elif platform.system() == "Linux":
            try:
                subprocess.call(["start", "Google Chrome", URL])
            except:
                Log("Failed to excute chrome running start chrome command.", withError = True)



    def open_in_safari(self):
        Log("Opening in Safari...")
        subprocess.call(["open", "-a", "Safari", os.curdir + "/new/dist/index.html"])

    def open_in_firefox(self):
        Log("Opening in Firefox...")
        subprocess.call(["open", "-a", "Firefox", os.curdir + "/new/dist/index.html"])

    def watch_src(self):
        try:
            import pyinotify
        except:
            Log("Failed to import pyinotify!", withError = True)
            Log("Please install pyinotify.", withError = True)



if __name__ == "__main__":

    # Script running mode.
    try:
        SCRIPT_MODE = sys.argv[1]
    except:
        SCRIPT_MODE = "Always"


    # Instaces
    debugger = DebugUtils()
    compiler = Compiler()


    def build_flow():
        # Clean
        clean()

        # Preparing to build.
        preparation()

        # Compile

        multiprocess_compiler = Pool(4)
        a = multiprocess_compiler.apply_async(compiler.compile_pug, ())
        b = multiprocess_compiler.apply_async(compiler.compile_sass, ())
        c = multiprocess_compiler.apply_async(compiler.create_assets, ())
        d = multiprocess_compiler.apply_async(compiler.create_js, ())

        c.wait()
        a.wait()
        b.wait()
        d.wait()

    

    if SCRIPT_MODE == "--production":
        build_flow()
    elif SCRIPT_MODE == "--debug-upload":
        build_flow()
        # Upload
        pass
    elif SCRIPT_MODE == "--watch":
        debugger.watch_src()
    else:
        build_flow()

        if SCRIPT_MODE == "--open-in-safari":
            debugger.open_in_safari()
        elif SCRIPT_MODE == "--open-in-firefox":
            debugger.open_in_firefox()
        else:
            if not SCRIPT_MODE == "--no-open":
                debugger.open_in_chrome()
    Log("Completed!", withNotify = True)
