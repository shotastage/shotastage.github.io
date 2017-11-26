#!/usr/bin/env python3
#
#  git_update.py
#  Open Research Curation
#
#  Created by Shota Shimazu on 2017/11/25.
#  Copyright © 2017 Shota Shimazu. All rights reserved.
#

import os
import notify


if __name__ == "__main__":
    notify.say("please input commit message.")
    commit_msg = input('\033[32mcommit message: \033[0m')
    os.system("git add .")
    os.system("git commit -m \"" + commit_msg + "\"")
    notify.say("which branch do you want to push?")
    branch = input('\033[32mwhich brach: \033[0m')
    os.system("git push -u origin " + branch)
    notify.say("completed")
    