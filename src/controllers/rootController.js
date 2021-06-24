export async function getRoot(req, res) {

    res.sendFile(`${process.cwd()}/src/views/index.html`);

};
