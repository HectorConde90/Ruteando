const sendSpaFileIfUnmatched = (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
}

export default sendSpaFileIfUnmatched;