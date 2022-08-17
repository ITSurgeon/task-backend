const userService = require('../services/user')
const postService = require('../services/post')
const commentService = require('../services/comment')

const getAllUsers = async (req, res) => {
    try {
        let response = []
        const users = await userService.getAllUsers()
        users.forEach(user => {
            response.push({ login: user.login, userId: user.id })
        })
        res.json(response)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const friends = []

        const user = await userService.getUserById(id)
        user.friends.forEach(user => {
            friends.push({ login: user.login, userId: user.id })
        })

        const response = { login: user.login, userId: user.id, friends }
        res.json(response)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getOwnProfile = async (req, res) => {
    try {
        const { userId } = req.user
        const user = await userService.getOwnProfile(userId)
        const friends = []
        user.friends.forEach(user => {
            friends.push({ login: user.login, userId: user.id })
        })

        const invitationsFrom = []
        user.invitationsFrom.forEach(user => {
            invitationsFrom.push({ login: user.login, userId: user.id })
        })

        const invitationsTo = []
        user.invitationsTo.forEach(user => {
            invitationsTo.push({ login: user.login, userId: user.id })
        })

        const posts = await postService.getUserPosts(userId)
        const comments = await commentService.getUserComments(userId)

        const response = {
            login: user.login,
            userId: user.id,
            friends,
            invitationsTo,
            invitationsFrom,
            posts,
            comments
        }

        res.json((response))

    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const inviteUser = async (req, res) => {
    if (req.params.id !== req.user.userId) {
        try {
            const userInvited = await userService.getUserById(req.params.id),
                userInviting = await userService.getUserById(req.user.userId)

            if ( ! userInviting.friends.includes(req.params.id)) {
                if ( ! userInviting.invitationsTo.includes(req.params.id)) {

                    await userService.inviteUser(userInviting.id, userInvited.id)
                    res.status(201).json({ message: `User ${ userInvited.login } successfully invited` })

                }
                return res.status(403).json({ message: `You have already invited user ${ userInvited.login }` })

            }
            return res.status(403).json({ message: `User ${ userInvited.login } is already in your friends list` })

        } catch (e) {
            res.status(500).json({ message: e.message })
        }

    }
    return res.status(403).json({ message: "You can't invite yourself" })

}

const approveUser = async (req, res) => {
    try {
        const userInviting = await userService.getUserById(req.params.id),
            userApproving = await userService.getUserById(req.user.userId)

        if ( ! userApproving.friends.includes(userInviting.id)) {

            await userService.approveUser(userApproving.id, userInviting.id)
            res.status(201).json({ message: `User ${ userInviting.login } successfully added to friends` })

        }
        return res.status(403).json({ message: `User ${ userInviting.login } is allready in your friends list` })


    } catch (e) {
        res.status(500).json({ message: e.message })
    }

}

const getUserPosts = async (req, res) => {
    try {
        const posts = await postService.getUserPosts(req.params.id)
        res.json(posts)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getUserComments = async (req, res) => {
    try {
        const comments = await commentService.getUserComments(req.params.id)
        res.json(comments)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {
    getAllUsers,
    getUser,
    getOwnProfile,
    inviteUser,
    approveUser,
    getUserPosts,
    getUserComments
}