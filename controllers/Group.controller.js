const {Group, User} = require('../models/');

module.exports.createGroup = async(req, res, next) => {
    try {
        const {body} = req;
        const created = await Group.create(body);
        return res.status(201).send('Group created');
    } catch (error) {
        next(error);
    }
}

module.exports.addUserToGroup = async(req, res, next) => {
    try {
        const {userInstance, params: {groupId}} = req;
        const groupInstance = await Group.findByPk(groupId);
        const result = await groupInstance.addUser(userInstance);
        return res.status(200).send('User successfully added to group');
    } catch (error) {
        next(error);
    }
}

module.exports.getUserGroups = async(req, res, next) => {
    try {
        const {userInstance} = req;
        const groups = await userInstance.getGroups();
        return res.status(200).send(groups);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteUserFromGroup = async(req, res, next) => {
    try {
        const {userInstance, params: {groupId}} = req;
        const groupInstance = await Group.findByPk(groupId);
        const rowCount = await groupInstance.removeUser(userInstance);
        if(rowCount) {
            return res.status(200).send('User succesully deleted');
        }
        return res.status(200).send('User is never been in this group');
    } catch (error) {
        next(error);
    }
}

module.exports.getGroupWithMembers = async (req, res, next) => {
    try {
        const {params: {groupId}} = req;
        const group = await Group.findByPk(groupId, {
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }]
        })
        res.status(200).send(group);
    } catch (error) {
        next(error);
    }
}