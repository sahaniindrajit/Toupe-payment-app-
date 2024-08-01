import zod from 'zod'
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})
export default signinBody;