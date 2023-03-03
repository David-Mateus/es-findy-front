export default function SignIn(req, res) {
    const body = req.body;
    console.log('body', body);
    if (!body.email || !body.password) {
        return res.status(400).json({ data: 'email or password not found' })
    }
    res.status(200).json({ data: `${body.email} ${body.password}`})

}