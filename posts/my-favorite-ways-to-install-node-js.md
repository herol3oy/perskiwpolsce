---
title: 'My favorite ways to install Node.js'
subtitle: 'How to install Node.js in two very different ways'
date: '2023-07-26'
---

​Everytime that I need to re-install my OS (I usually use Debian based Linux), one of the first things that I do is to install the latest version of Node.js. As a front-end developer basically we need to deal with this cute environment. There are many ways to install Node.js on your machine but in the following, I'm going to explain my two favorite ways how to do it:

* Installing Node.js using n package manager
* Building and installing Node.js using the source code​

### Installing Node.js using n package manager

This is the sweetest, fastest and of course the easiest way to install Node.js. So the first thing we are going to do is to download the binary file of n with curl and run it. We can do it both by running the following command:

```sh
curl -fsSL https://raw.githubusercontent.com/tj/n/master/bin/n | bash -s lts
```

And that's it! Node.js is now available on your machine. You can go one step further and install the n package manager itself by running:

```sh
npm i -g n
```

Now anytime in the future you you want to switch between node versions, you can simply use the following commands:

```sh
n lts
```

The above command installs the lts version of Node.js. But similarly you can install and switch to any specific version (for example Node.js v 16) by running:

```sh
n 16
```

and it installs the latest version of Node.js 16 which is 16.20.1.

### Building and installing Node.js using the source code​

Honestly this is my favorite way to install Node.js but since it takes quite some time, I don't often do it. To have a consistent environment, I'm going to build and install Node.js using Docker. So please make sure you have docker up and running:

```sh
# docker --version
Docker version 24.0.4, build 3713ee1
```

Now we are going to pull and spin up an Ubuntu image. Preferably Ubuntu v20.04.

```sh
docker pull ubuntu:20.04
```

After downloading is finished, we can run the image with interactive command line:

```sh
docker run -it ubuntu
```

Let's update the packages:

```sh
apt update && apt upgrade -y
```

To download the Node.js source code we need to install wget:

```sh
apt install wget
```

Now we are able to download the compressed source code:

```sh
wget https://nodejs.org/dist/v18.17.0/node-v18.17.0.tar.gz
```

> Please find the latest lts source code under the LTS tab on Node.js documentation page: https://nodejs.org/en/download

Let's extract the binary files:

```sh
tar -xvzf node-v18.17.0.tar.gz
```

Before going further we need to install the following packages in order to be able to compile the source code:

```sh
apt install python3 g++ make python3-pip
```

Now let's navigate to the extracted directory:

```sh
cd node-v18.17.0
```

Let's run the configurations:

```sh
./configure
```
And here it is the real show. To start the compiling, let's run:

```sh
make -j4
```

Wow! This is magnificent! It's working! We're building the program from the source code! Alright! Let's cool down a little bit because this might take quite some time and the compiling differs from one machine to another depending on your machine's hardware and setup. So consider some time more than 30 minutes (or even 1 and half hour). Hopefully when the compiling is over you can take the last step and install the Node.js:

```sh
make install
```

And here you go! You have Node.js built, installed and running from ground zero ;) Check it out:

```sh
node -v
```