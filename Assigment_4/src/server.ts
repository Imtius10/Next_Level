import app from "./app";
import { prisma } from "./lib/prisma";


async function main() {
    try {
        prisma.$connect();
        console.log("connected");
        app.listen(5000, () => { 
            console.log("server running");
            
        })
        
    } catch (error) {
        console.error(error);
        prisma.$disconnect();
        
        
    }
}
main();