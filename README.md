# Hexenhaus

## MONGO DB Comands

### Show users + roles

db.find.users()
db.roles.find()

### Change role of user

db.users.update({ _id: "SFTrsFD2a5gEG7ZtM" }, { $set: {"roles" : { "everyone" : [ "active" ] } }})

## Mail Settings

Adapt Environment variable MAIL_URL

like smtp://<mail>:<pwd>@smtp.1und1.de:587/




