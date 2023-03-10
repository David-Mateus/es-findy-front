export default function handler(req, res) {
    
    const body = req.body
    console.log('body: ', body)
    if (!body.firstName || !body.lastName || !body.email || !body.password) {
      return res.status(400).json({ data: 'firstName or last name not found' })
    }
    res.status(200).json({ data: `${body.firstName} ${body.lastName} ${body.email} ${body.password}`})
  }