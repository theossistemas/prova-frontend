db.createUser(
    {
        user: "peterson",
        pwd: "peterson",
        roles: [
            {
                role: "readWrite",
                db: "devs"
            }
        ]
    }
);