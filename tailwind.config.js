import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // или путь к вашим файлам
      './node_modules/daisyui/dist/**/*.js',
      './resources/views/**/*.blade.php', // Для Laravel Blade
      './resources/views/*.blade.php', // Для Laravel Blade
      './resources/js/**/*.vue',         // Для Vue, если используете
      './resources/**/*.js',             // Для любых JavaScript файлов
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    }
}

