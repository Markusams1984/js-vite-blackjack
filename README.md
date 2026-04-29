# blackjack-vite.js

Pasos para ejecutar el proyecto:
Cada vez que termines de actualizar una parte de tu código, escribe esto en tu terminal 
1. git add .  (Esto le dice a Git: "Prepara todos los archivos que acabo de modificar")

2. git commit -m "Aquí escribes lo que hiciste" (Esto es como ponerle una etiqueta a tu avance, por ejemplo: "Añadida lógica de la computadora")

3. git push (Esto "empuja" tus cambios desde tu computadora hacia tu cuenta de GitHub)

# Si alguna vez necesitas la dirección de tu repositorio para clonarlo en otra PC, la sacas de tu propio perfil de GitHub:

1. Vas a github.com/Markusams1984/js-vite-blackjack.

2. Haces clic en el botón verde que dice "<> Code".

3. Ahí copias la dirección HTTPS que aparece.

# Para arrancar mi juego y mi codigo en otro computador:
Bajar el proyecto:

1. Clonar el repositorio: git clone https://github.com/Markusams1984/js-vite-blackjack.git

2. Entrar a la carpeta: cd js-vite-blackjack

3. Instalar las herramientas: npm install

4. Arrancar el juego: npm run dev

# cuando ya terminaste tu juego y quieres publicarlo en internet para que cualquier persona lo pueda jugar, no solo tú en tu computadora. Se llama el proceso de Producción.

1. Ejecutar "npm run build" Este comando es como una "licuadora" de código. Toma todos tus archivos de desarrollo (los que están en la carpeta src, tus imágenes y estilos) y los comprime, optimiza y limpia.
Resultado: "Resultado: Crea (o actualiza) la carpeta docs".

2. Tomar la carpeta dist y desplegarla La carpeta dist contiene la versión final "empaquetada" de tu juego.Es la única carpeta que necesitas subir a un servicio de hosting (como Netlify, Vercel o GitHub Pages). No necesitas subir todo el proyecto, solo lo que está dentro de dist.