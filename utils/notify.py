#!/usr/bin/env python3
#
#  notify.py
#  Open Research Curation
#
#  Created by Shota Shimazu on 2017/11/25.
#  Copyright © 2017 Shota Shimazu. All rights reserved.
#


import os
import platform

def say(string):
    if platform.system() == 'Darwin':
        os.system("say " + string)


def log(string, withError = False):
    if withError:
        print('\033[31mORC Utils: ' + string + '\033[0m')
    else:
        print('\033[32mORC Utils: \033[0m' + string)

def serve_notification(string):
    if platform.system() == 'Darwin':
        os.system("osascript -e 'display notification \"" + "ORC Utils: " + string + "\"'")
