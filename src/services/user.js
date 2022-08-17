const User = require("../models/User");

const getAllUsers = async function () {
    try {
        return await User.find()
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const getUserByLogin = async function (login) {
    try {
        return await User.findOne(login)
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const getUserById = async function (id) {
    try {
        return await User.findById(id).populate('friends')
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const getOwnProfile = async function (id) {
    try {
        return await User.findById(id).populate('friends').populate('invitationsTo').populate('invitationsFrom')
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}


const createUser = async function (login, password) {
    try {
        const user = new User({login, password})
        await user.save()
        return user
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const inviteUser = async function (fromId, toId) {
    try {
        await User.findById(toId).updateOne({$push: {invitationsFrom: fromId}})
        await User.findById(fromId).updateOne({$push: {invitationsTo: toId}})
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

const approveUser = async function (fromId, toId) {
    try {
            await User.findById(fromId).updateOne({$push: {friends: toId}}).updateOne({$pull: {invitationsFrom: toId}})
            await User.findById(toId).updateOne({$push: {friends: fromId}}).updateOne({$pull: {invitationsTo: fromId}})
    } catch (e) {
        throw Error('Connection to DB failed')
    }
}

module.exports = {
    getUserByLogin,
    createUser,
    getAllUsers,
    getUserById,
    getOwnProfile,
    inviteUser,
    approveUser
}