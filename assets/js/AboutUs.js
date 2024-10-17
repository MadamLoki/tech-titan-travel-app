
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }

        // Save the user's preference in localStorage
        localStorage.setItem('theme', theme);
    });

