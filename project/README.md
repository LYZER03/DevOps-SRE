<div style="text-align: justify"> 
<img src="https://i.ibb.co/W5WsGgQ/ECE-LOGO-2021-web.png" alt="Description de l'image" style="width:200px; float:right; margin-left:15px;">

# DEVOPS PROJECT

## CRUD application with React js Node js MySQL

CRUD (Create, Read, Update, Delete) applications are a staple in software development. They allow users to interact with databases, retrieve information, and make changes to data. 

In this DevOps project, we will build a CRUD application using React js for the frontend, Node js for the backend, and MySQL as the database. This will involve setting up a development environment, designing a user interface, creating an API, implementing the necessary database queries, and integrating the frontend and backend. 

## Installation

Before starting, run this command in folder **./project/backend** and **./project/client**
```
npm i
```


## Functionalities
**Client-side** :

- **npm run start** in folder ./project/client :

![npm start](https://i.ibb.co/1fgw49v/Capture-d-cran-2023-12-29-160842.png)

**Server-side** :

- **npm run start** in folder ./project/backend :

![npm start](https://i.ibb.co/prj4cGF/Capture-d-cran-2023-12-28-014352.png)

fetching all data from MySQL database :
![npm start](https://i.ibb.co/6DyV733/Capture-d-cran-2023-12-28-014438.png)

<img src="https://i.ibb.co/d0jp62j/Git-Hub-Actions.png" alt="git action" style="width:130px; float:right; margin-left:15px;">

## Apply CI/CD pipeline

- **npm test** in folder ./project/backend to run unit test :

![unit test](https://i.ibb.co/jf8rpCP/Capture-d-cran-2023-12-27-210056.png)

#### Github Action workflow :


![git action](https://i.ibb.co/th9hYR6/Capture-d-cran-2023-12-29-144616.png)

**Check all folders :**

![git action](https://i.ibb.co/pn3t4Pc/Capture-d-cran-2023-12-29-144744.png)

**Start and configure MySQL service :** 

![git action](https://i.ibb.co/9pL2HWJ/Capture-d-cran-2023-12-29-144803.png)

**Check the connection :**

![git action](https://i.ibb.co/CmKQqGv/Capture-d-cran-2023-12-29-144821.png)

**Check unit test :**

![git action](https://i.ibb.co/84ycVLT/Capture-d-cran-2023-12-29-144649.png)

<img src="https://i.ibb.co/YhkHh3Q/Hashi-Corp-Vagrant.png" alt="vagrant" style="width:130px; float:right; margin-left:15px;">

## Configure and provision a virtual environment and run your application using the IaC approach

### Problem encountered in this section :

Impossible de Synchronize the project folder between guest machine and host machine.

![unit test](https://i.ibb.co/G7zPMYJ/vagrant-rsync-problem.png)

### Solution used are (but doesn't work for us):

**Basic usage configuration** :
```
config.vm.synced_folder "../project", "/srv/website"
```
[link source](https://developer.hashicorp.com/vagrant/docs/synced-folders/basic_usage)

**Install a plugin**: 
```
$ vagrant plugin install vagrant-vbguest
```
[link source](https://www.dissmeyer.com/2020/02/11issue-with-centos-7-vagrant-boxes-on-windows-10/)

```
$ vagrant plugin install vagrant-rsync-back
```
[link source](https://github.com/smerrill/vagrant-rsync-back#vagrant-rsync-back)

<img src="https://i.ibb.co/br171mL/Docker.png" alt="docker" style="width:150px; float:right; margin-left:15px;">

## Build Docker image of your application

#### Build MySQL image :

Firstly we need to pull an official MySQL image

```
docker pull mysql
```
then run the image 

```
docker run mysql
```
but it ask to specify a password in the environnement

![docker mysql](https://i.ibb.co/NFHRmyy/docker1.png)

```
docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql
```
`-e` to set the environnement 

`-p` set or add port number

`-d` to run the image in the background

Now MySQL is running

![docker mysql](https://i.ibb.co/hFYFzXy/docker2.png)

We check the connection to the DB using MySQL workbench for exemple :

![docker mysql](https://i.ibb.co/L06hkW4/docker3.png)

#### Build the backend :

**build back-end app image** :

```
docker build -t bookstore .
```
**Run the app in Docker container** :

```
docker run --name nodebackendtest -p 8880:8880 -d bookstore
```

If we set our app in different port (8080) and run it in our local machine we can access and retrieve the remote data from docker container MySQL database.

We aim to establish communication between our application, residing in one container, and our database located in another container. When attempting to launch our application from the container and access it via our local browser at "http://localhost:8880," we anticipate the homepage to showcase the message '**Hello, this is the backend side!.**' Regrettably, this expected outcome does not materialize


![docker mysql](https://i.ibb.co/HY2zHCf/dockerproblem4.png)


The issue stemmed from a disparity in network configurations. Specifically, the application attempted to connect to the '127.0.0.1' network, while the Docker container hosting the database operated on the "172.17.0.1" network


![docker mysql](https://i.ibb.co/nPSM5y0/dockerproblem.png)

Executing this command allows us to identify the host network to which the database is connected.

```
docker inspect [name-mysql-container]
```
![docker mysql](https://i.ibb.co/ScDVXnY/dockerproblem2.png)

Ultimately, we can now gain access to our server-side.

![docker mysql](https://i.ibb.co/y8LRqHn/dockerproblem3.png)

<img src="https://i.ibb.co/br171mL/Docker.png" alt="docker compose" style="width:150px; float:right; margin-left:15px;">

## Make container orchestration using Docker Compose

<br>
<br>
<br>
<br>


## Make docker orchestration using Kubernetes

## Make a service mesh using Istio

## Implement Monitoring to your containerized application
</div>