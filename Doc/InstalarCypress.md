# Instalación de Cypress

![](instalarCypressImages/cypress-logo.png)

Para usar Cypress necesitamos tener instalado `NodeJs`

Node es una herramienta para trabajar con Javascript sin usar el explorador web.

##  Tengo `NodeJs` instalado ?
* Abrir la terminal
*  Tratar de iniciar `NodeJs`. (escribir  `nodejs` y darle Enter)
  ```
  nodejs
  ```
Si aparece lo siguiente, tengo instalado `NodeJs`
```
>
```
Para salir apretar `Ctrl + C` dos veces seguidas

Si aparece un error, hay que instalar `NodeJs`

## Cómo Instalar `NodeJs`

En la terminal ingresar
```
sudo apt update
```
Si les pide un `password` hay que ponerle la contraseña que se usa cuando encienden la compu. Esperar hasta que termine, puede llevar un tiempo largo.

Después:
```bash
sudo apt install nodejs
```
Para ver si se instaló correctamente cuando uno pone:
```
nodejs --version
```
Tiene que salir un número de la versión de nodejs. Por ejemplo :
```
v8.10.0
```

Una vez que termine también hay que instalar `npm`

```
sudo apt install npm
```

Para chequear que se haya instalado bien poner:
```bash
npm --version
```
Tendría que salir el número de una versión. Algo parecido a esto:
```
3.5.2
```


## Para instalar Cypress usando el repositorio del Catu (recomendado)
En este caso vamos a usar el repositorio de código de `automation` que tenemos en el Catu
* Clonar el repositorio
  ```
  git clone https://github.com/CentroCatu/automation.git
  ```
  Clonar significa bajar el código subido a [esta](https://github.com/CentroCatu/automation) página y ponerlo en una carpeta

* Entrar a la carpeta que se creó cuando clonamos:
  ```
  cd automation
  ```
* Instalar todas las herramientas de NodeJs para esta carpeta (Cypress está incluida)
  ```
  npm install
  ```
  Esto puede tardar un tiempo. Si hicieron este paso, tienen que saltar el próximo e ir directo a `Iniciar Cypress`

## Para instalar Cypress en una carpeta nueva ( avanzado)
Para instalar Cypress en una carpeta nueva:
* Crear una carpeta para que estén los tests y entrar a esa carpeta
  ```bash
  mkdir automation # así se creala carpeta 'automation'
  cd automation # asi se entra a la carpeta 'automation
  ```
* Crear el archivo package.json de esta forma :
  ```bash
    npm init -y
  ```
  Si ponen `ls` van a ver que en la carpeta hay un nuevo archivo llamado 'package.json'
* Instalar Cypress
  ```
  npm install cypress --save-dev
  ```
  Esto puede tardar bastante. No hay problema si aparecen unos `warning` (advertencia), pero si aparece algún `error` puede no haber quedado instalado correctamente.

Es muy probable que queramos que esta carpeta sea un repositorio de git. Para hacer que esta carpeta sea un repositorio git:
```
git init
```
Cuando instalamos Cypress se creó una carpeta llamada `node_modules` con un montón de cosas. Nosotros no queremos que `git` tenga en cuenta esa carpeta. Para eso tenemos que hacer que la `git` ignore esa carpeta:
* Crear un archivo que se llame `.gitignore`.
* En ese archivo, escribir lo siguiente y guardarlo:
  ```
  node_modules
  ```
  De esta forma le decimos a `git` que ignore esa carpeta


## Iniciar Cypress

Estando en la misma carpeta donde crearon el archivo `package.json` :
```
node_modules/.bin/cypress open
```

Puede tardar, pero se va a abrir Cypress


![](instalarCypressImages/cypresses.png)