import 'dotenv-safe/config'
export const JWT_SECRET = process.env["JWT_SECRET"]

if(!JWT_SECRET){
    console.log("Sem segredo do JWT");
    process.exit(1);
}