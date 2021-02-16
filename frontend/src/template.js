const template = (title) => (`
    <!DOCUMENT html>
    <html lang="en>
        <head>
            <meta charset="геа-8">
            <title>${title}</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="/dist/client.js"></script>
        </body>
    </html>
`);

module.exports = template;