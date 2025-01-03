<!DOCTYPE html>
<html data-theme="cupcake">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>    
    @vite('resources/css/app.css')
</head>
<body class="bg-base-200">
    <header class="navbar bg-base-300 shadow-lg">
        <div class="navbar-start">
            <a href="#" class="btn btn-ghost normal-case text-xl">My Website</a>
        </div>
        <div class="navbar-center lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/works">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a href="#" class="btn btn-primary">Sign In</a>
        </div>
    </header>
    <main class="p-4">
        {{ $slot }}
    </main>
    <footer class="footer footer-center p-10 bg-base-300 text-base-content">
        <div class="text-center">© <?php echo date('Y'); ?>. All rights reserved.</div>
    </footer>
</body>
</html>