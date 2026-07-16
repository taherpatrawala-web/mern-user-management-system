const loginUser = async (req, res) => {
    res.json({
        success: true,
        token: "dummy-jwt-token",
        user: {
            id: 1,
            name: "Taher",
            email: "taher@example.com"
        }
    });
};

module.exports = {
    loginUser
};