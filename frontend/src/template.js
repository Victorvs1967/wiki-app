const template = (title, initialState, content) => (`
    <!DOCUMENT html>
    <html lang="en>
        <head>
            <meta charset="геа-8">
            <title>${title}</title>
        </head>
        <body>
            <div id="app">${content}</div>
            <script>
                window.__STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/dist/client.js"></script>
        </body>
    </html>
`);

module.exports = template;