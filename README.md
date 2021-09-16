Welcome to a Javascript indexing app I built! This loads external data sourced from the this pokemon API: https://pokeapi.co/api/v2/pokemon/?limit=150

Objective: To build a small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.

Technical Features:
- Loads data from an external API; for instance, the Pokémon API.
- Displays a list of items loaded from that API after the page is loaded.
- Enables the viewing of more details for a given list item (like a Pokémon) on demand, such as when clicking on a list item.
- Contains CSS styling.
- JavaScript code is formatted according to ESLint rules.
- JavaScript code is formatted via the tool -- Prettier.
- JavaScript code is also manually formatted.
- Utulizes complex UI pattern, such as a modal.
- Tested to not throw any errors when being used.
- Publicly accessible on the platform -- GitHub Pages
- Tested for Chrome, Firefox, Safari, Edge, and Internet Explorer 11.

It also incorporates the following jQuery and Bootstrap libraries:

 <!-- JQuery CDN links -->
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous">
    </script>

    <script src="src/js/promise-polyfill.js"></script>
    <script src="src/js/fetch-polyfill.js"></script>
    <script src="src/js/scripts.js"></script>

<!-- Bootstrap Links -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>