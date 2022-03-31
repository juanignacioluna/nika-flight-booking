# Flight Booking

Requisitos:

 - Tener instalado npm y node
 - Tener instalado python3
 - Tener instalado mysql, con el servidor en funcionamiento.
 - Tener instalado git

Cree un directorio y abra la terminal. Clone el repositorio con `git clone https://github.com/juanignacioluna/nika-flight-booking.git`

Ejecute `cd nika-flight-booking/backend/nikaback/`, para ir al directorio del backend.

En el ejecute `python3 manage.py runserver` para iniciar el servidor de django en `http://localhost:8000`.

Cree una base de datos mysql con el nombre de `nikatest`. Esta funciona por defecto con el usuario `root`, la contraseña `password`, en el host localhost, y en el puerto `3306`. Si quiere cambiar esta configuración, lo puede hacer en la sección `DATABASES` del archivo `backend/nikaback/nikaback/settings.py`.

Ejecute `python3 manage.py makemigrations` para crear las migraciones.

Ejecute `python3 manage.py migrate` para ejecutar las migraciones.

Vera que se ha creado la tabla `booking_flightbooking` en la base de datos `nikatest`. 

Escribir algunos registros de prueba en la tabla.

Abra otra terminal en el proyecto y ejecute `cd frontend/nika-front/`. Para ir al directorio del frontend.

Ejecute `npm install`, para instalar las dependencias necesarias.

Ejecute `npm start`, para iniciar el servidor. Este estara en `http://localhost:3000`.
