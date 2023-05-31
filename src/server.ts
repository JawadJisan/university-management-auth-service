import mongoose from "mongoose";
import config from "./config";

import app from "./app";

async function main() {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/universityManagement');
        await mongoose.connect(config.databaseUrl as string);
        console.log(`The Database Is connected Successfully`)

        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })
    } catch (error) {
        console.error(`Failed to connect Database`, error)
    }
}
main()