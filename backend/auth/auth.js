const jwt = require('jsonwebtoken')
const env = require('dotenv')

env.config()

const Auth = {

  // middleware para verificação de cookie foi desativado por problemas de localhost e falta de https

  authMiddleware: (req, res, next) => {
    // const cookies = req.cookies

    // if(!cookies) return res.status(401).json({message: 'Acesso negado.'})

    // try {
    //   const verified = jwt.verify(cookies.token, process.env.TOKEN_SECRET)
    //   req.id = { _id: verified._id }
      next()
    // } catch(e) {
    //   res.status(401).json({message: 'Token inválido.'})
    // }
  }
}

module.exports = Auth