# Tic-Tac-Toe (React)

Este es un juego clásico de **Tic-Tac-Toe** (Tres en línea) desarrollado con **React**. El juego permite a dos jugadores jugar uno contra el otro, alternando entre "X" y "O". Además, el juego cuenta con un contador de puntos, colores diferenciados para los jugadores, y un pop-up que muestra el ganador cuando se detecta un vencedor.

## Características

- **Juego interactivo** para dos jugadores.
- **Visualización clara** con colores diferenciados para "X" (azul) y "O" (rojo).
- **Puntuación**: lleva un conteo de cuántas veces cada jugador gana.
- **Pop-up**: cuando un jugador gana, se muestra un pop-up con el mensaje de ganador.
- **Reinicio**: botón para reiniciar el juego y la puntuación.

## Instalación

### Requisitos

Antes de empezar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

### Pasos para instalar y ejecutar el proyecto

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tic-tac-toe.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd tic-tac-toe
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación en modo de desarrollo:

    ```bash
    npm start
    ```

    Esto abrirá el juego en tu navegador en `http://localhost:3000`.

## Uso

- Los jugadores alternan haciendo clic en las casillas vacías del tablero.
- El jugador "X" comienza, seguido por "O".
- Cuando un jugador gana, se mostrará un pop-up indicando quién ha ganado.
- Puedes reiniciar el juego en cualquier momento haciendo clic en el botón "Reiniciar", lo que también restablecerá el contador de puntos.

## Tecnologías utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **TypeScript**: Lenguaje de programación con tipado estático para mayor seguridad en el código.
- **CSS**: Estilos para el diseño y la interfaz del juego.

## Contribuciones

Si quieres contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu contribución (`git checkout -b feature-nueva`).
3. Realiza los cambios y haz commit de ellos (`git commit -am 'Añadir nueva característica'`).
4. Envía un pull request para que podamos revisarlo.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE.txt](LICENSE).
