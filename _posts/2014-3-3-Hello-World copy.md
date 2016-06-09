---
layout: post
title: ADDING A FUNNY GREETING TO FISH ON OSX 
date: 2016-06-09
---



First we need to install [Homebrew](http://brew.sh). This is an OSX package manager that provides most of the functionality of a linux terminal to OSX. This can be done by giving the command below to your terminal 

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next we can install Fortune. This allows us to display the greetings when opening a terminal instance.

```
brew install fortune
```
We then need to install cowsay which will display the image of a cow together with the message.

```
sudo gem install cowsay
```

We then need to add this to the fish settings. This can be done by opening the settings file using [VIM](https://www.fprintf.net/vimCheatSheet.html). Type in 
```
vim ~/.config/fish/config.fish
```

We can check to see if fortune and cowsay is installed by typing in:
```
cowsay moo moooo
```
and 
```
fortune
```
into our terminal.

Then we can insert the command below to have the greeting displayed. Press a to allow you to edit the file and then type in:
```
function fish_greeting
        fortune -a | cowsay
end

funcsave fish_greeting
```

Once you have edited the file press escape then :wq to save and quit.

