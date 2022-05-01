const jsonfile = require("jsonfile");
const Employee = require("../models/employeeLoginModel");

const file = "./configs/permissions.json";

const getPermissionFile = async () => {
    const file = "./configs/permissions.json";
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const findPermissionIndexByID = async (id) => {
    const allPermissions = await getPermissionFile();
    const permissionIndex = allPermissions.findIndex(permission => permission.id === id);
    return permissionIndex;
}

const addPermissionsToFile = async (newEmployee) => {
    let newestEmployee = await Employee.find({}).sort({ createdAt: -1 }).limit(1);
    newestEmployee = newestEmployee[0];
    const permissionsToAdd = {
        id: newestEmployee._id,
        permissions: newEmployee.permissions
    }
    let permissionsOnFile = await getPermissionFile();
    permissionsOnFile.push(permissionsToAdd);
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, permissionsOnFile, { spaces: 2 }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Permissions added successfully")
            }
        })
    })
}

const editPermissionsInFile = async (id, updatedemployee) => {
    let permissionsOnFile = await getPermissionFile();
    const permissionIndex = await findPermissionIndexByID(id);
    permissionsOnFile[permissionIndex] = {
        ...permissionsOnFile[permissionIndex],
        permissions: updatedemployee.permissions
    }
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, permissionsOnFile, { spaces: 2 }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Edited permissions on file")
            }
        })
    })
}

const removePermissionsFromFile = async (id) => {
    let permissionsOnFile = await getPermissionFile();
    const permissionIndex = await findPermissionIndexByID(id);
    permissionsOnFile.splice(permissionIndex, 1);
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(file, permissionsOnFile, { spaces: 2 }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Permissions removed from file")
            }
        })
    })
}

module.exports = { getPermissionFile, addPermissionsToFile, editPermissionsInFile, removePermissionsFromFile }