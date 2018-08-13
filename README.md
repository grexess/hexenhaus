# Hexenhaus

## MONGO DB Comands

### Show users + roles

db.find.users()
db.roles.find()

### Change role of user

db.users.update({ _id: "SFTrsFD2a5gEG7ZtM" }, { $set: {"roles" : { "everyone" : [ "active" ] } }})






