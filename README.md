# Auth0 Angular LDAP integration

Este proyecto simple de Angular 9 permite acceder a una página protegida a través de autenticación LDAP. 

Se ha utilizado la plataforma *Auth0* que permite realizar la autenticación a través de cualquier proveedor de identidad conocido (Google, Facebook, etc.) y/o a través de diferentes conexiones que permite configurar, como LDAP, GSuite, Azure, etc.

## Notas:

* Deben instalar la carpeta *npm_modules* a través del comando `npm install` una vez tengan el proyecto clonado.
* Se han configurado tres rutas, dos públicas y una privada a la que solo se puede acceder a través del botón *Login* del *navbar* e introduciendo el usuario y contraseña del directorio activo de su empresa.
* Existe una carpeta *components* para los componentes compartidos.
* Existe una carpeta *pages* para las páginas públicas y privadas.
* Existe una carpeta *services* para el servicio de autenticación de *Auth0* y el guard que protege la página privada.

> Y lo más importante, seguir las instrucciones que aparecen a continuación para configurar la autenticación LDAP en la plataforma *Auth0*.

### Configurar la conexión LDAP en Auth0

1. En el caso de no estar registrado, crear una cuenta en https://auth0.com/.
2. Crear una aplicación de tipo *Single Page Web Applications* con el nombre que deseen.
3. En la página de configuración del proyecto se habrán generado los parámetros de usuario de manera automática, únicamente deberán añadir la información de su servidor de desarrollo y puerto (en general, http://localhost:4200 en los proyectos de Angular) en los siguientes campos:
![Configuración aplicación Auth0](https://i.ibb.co/q1TGK72/auth0.jpg)
4. Una vez configurada la aplicación, crear la conexión: Connections > Enterprise > Active Directory / LDAP y seguir las instrucciones según su sistema operativo.
> NOTA: si utilizan Windows deberán descargarse un ejecutable y así realizar la configuración (LDAP Connection String, Base DN, Username y Password)

En las instrucciones de la plataforma se especifica todo lo anterior de manera detallada, no deberían tener problemas. Por último, no olviden habilitar la aplicación creada en el punto 2 en la conexión creada en el punto 4:
![Habilitar aplicación en la conexión LDAP](https://i.ibb.co/FhKYW8y/auth0-1.jpg)

Espero que les sea de gran ayuda para sus proyectos! :smile:
