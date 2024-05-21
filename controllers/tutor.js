

exports.gethireTutor  = async (req, res) => {
    res.render('shop/hiretutor', {
        path: '/hiretutor',
        isAuthenticated:req.session.isLoggedIn
    })
}



exports.getAllTutor  = async (req, res) => {
    res.render('shop/alltutors', {
        path: '/hiretutor',
        isAuthenticated:req.session.isLoggedIn
    })
}
exports.getTutorSingleView = async(req,res) => {
    res.render ('shop/tutorsingle', {
        path: '/hiretutor',
        isAuthenticated:req.session.isLoggedIn
    })
}

exports.getBook = async(req,res) => {
    res.render('shop/bookcompletionview', {
        path: '/hiretutor',
        isAuthenticated:req.session.isLoggedIn
    })
}