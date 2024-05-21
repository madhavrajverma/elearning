

exports.getAdminDashboard  = async(req,res) => {
    res.render('shop/adminDashboard' , {
        path:'/profile',
        isAuthenticated:req.session.isLoggedIn
    })
}